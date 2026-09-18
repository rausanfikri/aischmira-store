# Read-only OOXML extraction. Schema and business validation live in lib/catalog-import.ts.
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
    [xml]$relationships = Read-Entry 'xl/_rels/workbook.xml.rels'
    $sheets = @()
    foreach ($definition in $book.workbook.sheets.sheet) {
        $rid = $definition.GetAttribute('id', 'http://schemas.openxmlformats.org/officeDocument/2006/relationships')
        $target = ($relationships.Relationships.Relationship | Where-Object Id -EQ $rid).Target
        $entryName = if ($target.StartsWith('/')) { $target.TrimStart('/') } else { 'xl/' + $target }
        [xml]$sheet = Read-Entry $entryName
        $cells = @()
        foreach ($row in $sheet.worksheet.sheetData.row) {
            foreach ($cell in $row.c) {
                $formula = $cell.SelectSingleNode('*[local-name()="f"]')
                $value = [string]$cell.v
                if ($cell.t -eq 's') { $value = $strings[[int]$value] }
                if ($cell.t -eq 'inlineStr') { $value = $cell.is.InnerText }
                if ($value -ne '' -or $formula) {
                    $cells += [ordered]@{
                        ref=[string]$cell.r
                        value=$(if ($value -eq '') { $null } else { $value })
                        formula=$(if ($formula) { $formula.OuterXml } else { $null })
                        cellType=$(if ($cell.t) { [string]$cell.t } else { 'n' })
                        error=($cell.t -eq 'e')
                    }
                }
            }
        }
        $merges = @($sheet.worksheet.mergeCells.mergeCell | Where-Object { $_ } | ForEach-Object { [string]$_.ref })
        $sheets += [ordered]@{name=[string]$definition.name;cells=$cells;merges=$merges}
    }
    $externalLinks = @($archive.Entries | Where-Object { $_.FullName -like 'xl/externalLinks/externalLink*.xml' } | ForEach-Object { $_.FullName })
    [ordered]@{sheets=$sheets;externalLinks=$externalLinks} | ConvertTo-Json -Depth 8 -Compress
} finally { $archive.Dispose() }
