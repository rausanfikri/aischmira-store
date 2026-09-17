# Read-only Phase-1 evidence extraction. No import, publication or workbook mutation.
param([string]$Workbook = (Join-Path $PSScriptRoot '..\data\MASTER PRODUCTS.xlsx'))
$ErrorActionPreference = 'Stop'
[Console]::OutputEncoding = [System.Text.UTF8Encoding]::new($false)
Add-Type -AssemblyName System.IO.Compression.FileSystem
$archive = [IO.Compression.ZipFile]::OpenRead((Resolve-Path -LiteralPath $Workbook))
function Read-Entry([string]$name) {
    $entry = $archive.GetEntry($name)
    if (!$entry) { throw "Missing XLSX entry: $name" }
    $reader = [IO.StreamReader]::new($entry.Open())
    try { $reader.ReadToEnd() } finally { $reader.Dispose() }
}
try {
    $strings = @()
    if ($archive.GetEntry('xl/sharedStrings.xml')) {
        [xml]$shared = Read-Entry 'xl/sharedStrings.xml'
        $strings = @($shared.sst.si | ForEach-Object { $_.InnerText })
    }
    [xml]$book = Read-Entry 'xl/workbook.xml'
    $dashboard = @($book.workbook.sheets.sheet | Where-Object name -EQ 'DASHBOARD')
    if ($dashboard.Count -ne 1) { throw 'Expected exactly one DASHBOARD sheet' }
    [xml]$relationships = Read-Entry 'xl/_rels/workbook.xml.rels'
    $rid = $dashboard[0].GetAttribute('id', 'http://schemas.openxmlformats.org/officeDocument/2006/relationships')
    $target = ($relationships.Relationships.Relationship | Where-Object Id -EQ $rid).Target
    $entryName = if ($target.StartsWith('/')) { $target.TrimStart('/') } else { 'xl/' + $target }
    [xml]$sheet = Read-Entry $entryName
    $values = @{}; $origins = @{}; $formulas = @{}
    foreach ($row in $sheet.worksheet.sheetData.row) {
        foreach ($cell in $row.c) {
            $formula = $cell.SelectSingleNode('*[local-name()="f"]')
            if ($formula) { $formulas[[string]$cell.r] = $formula.OuterXml }
            $value = [string]$cell.v
            if ($cell.t -eq 's') { $value = $strings[[int]$value] }
            if ($cell.t -eq 'inlineStr') { $value = $cell.is.InnerText }
            if ($cell.t -eq 'e') { throw "Workbook error at $($cell.r)" }
            $values[[string]$cell.r] = if ($value -eq '') { $null } else { $value }
            $origins[[string]$cell.r] = [string]$cell.r
        }
    }
    # Expand only actual vertical merges, never blanket forward-fill unrelated blanks.
    foreach ($merge in $sheet.worksheet.mergeCells.mergeCell) {
        $match = [regex]::Match($merge.ref, '^([A-Z]+)(\d+):([A-Z]+)(\d+)$')
        if ($match.Success -and $match.Groups[1].Value -eq $match.Groups[3].Value) {
            $column = $match.Groups[1].Value; $origin = $column + $match.Groups[2].Value
            for ($index = [int]$match.Groups[2].Value; $index -le [int]$match.Groups[4].Value; $index++) {
                $values[$column + $index] = $values[$origin]; $origins[$column + $index] = $origin
            }
        }
    }
    $headers = @{A1='COLLECTION';B1='FABRIC';C1='CATEGORY';D1='TYPE/ITEM';E1='COLOR';F1='SIZE';G2='NO';H2='CODE';I2='NAME';J2='OFFLINE BAZAAR PRICE (RP)';K2='MARKETPLACE DEFAULT PRICE (RP)';L2='MARKETPLACE FINAL PRICE (RP)'}
    foreach ($cell in $headers.Keys) { if ($values[$cell] -cne $headers[$cell]) { throw "Unexpected header $cell : $($values[$cell])" } }
    $columns = [ordered]@{COLLECTION='A';FABRIC='B';CATEGORY='C';TYPE='D';COLOR='E';SIZE='F';SKU_NO='G';SKU='H';SKU_NAME='I';START_PRICE='K';FINAL_PRICE='L'}
    $records = @()
    foreach ($row in $sheet.worksheet.sheetData.row) {
        $number = [int]$row.r
        if ($number -le 2) { continue }
        # SKU number/name retains records with missing business SKU; don't hide them.
        if (!$values['G'+$number] -and !$values['H'+$number] -and !$values['I'+$number]) { continue }
        $fields = [ordered]@{}; $cells = [ordered]@{}; $formulaEvidence = [ordered]@{}
        foreach ($field in $columns.Keys) {
            $cell = $columns[$field] + $number
            $fields[$field] = $values[$cell]
            $cells[$field] = if ($origins[$cell]) { $origins[$cell] } else { $cell }
            $formulaEvidence[$field] = $formulas[$cells[$field]]
        }
        $records += [ordered]@{row=$number; fields=$fields; cells=$cells; formulas=$formulaEvidence}
    }
    [ordered]@{workbook='data/MASTER PRODUCTS.xlsx';sheet='DASHBOARD';rows=$records} | ConvertTo-Json -Depth 8 -Compress
} finally { $archive.Dispose() }
