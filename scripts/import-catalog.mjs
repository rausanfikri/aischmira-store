import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { root, createEvidenceSnapshot } from './canonical-support.mjs';
import { checkMediaFiles } from './check-catalog-registries.mjs';

export const serialize = (value) => JSON.stringify(value, null, 2) + '\n';
export const fingerprint = (relative, bytes) => createHash('sha256').update(relative.endsWith('.json') ? JSON.stringify(JSON.parse(bytes.toString('utf8'))) : bytes).digest('hex');
const hash = (relative) => fingerprint(relative, fs.readFileSync(path.join(root, relative)));
const counts = (entries, field) => Object.fromEntries([...new Set(entries.map((e) => e[field]))].sort().map((value) => [value, entries.filter((e) => e[field] === value).length]));
const catalogPath = 'data/generated/canonical-catalog.json';
const reportPath = 'data/generated/reconciliation-report.json';

export function checkGeneratedFiles(output, report, directory = path.join(root, 'data/generated')) {
  const issues = [];
  for (const [file, expected] of [[catalogPath, output], [reportPath, report]]) {
    const filename = path.join(directory, path.basename(file));
    if (!fs.existsSync(filename) || fs.readFileSync(filename, 'utf8') !== serialize(expected)) issues.push({
      code: 'STALE_GENERATED_OUTPUT', severity: 'error', source: file, sourceValue: 'missing or different', canonicalValue: 'current deterministic import',
      conflict: 'Generated output does not match current inputs', recommendedAction: 'Review reconciliation, then run node scripts/import-catalog.mjs --write.',
    });
  }
  return issues;
}

export function writeImportBatch({ output, report }, directory) {
  fs.mkdirSync(directory, { recursive: true });
  const save = (name, value) => {
    const target = path.join(directory, name); const temporary = target + '.tmp';
    fs.writeFileSync(temporary, serialize(value)); fs.renameSync(temporary, target);
  };
  // Atomic per-file replacement; consumers require a matching successful report.
  if (report.success && !report.issues.some((i) => i.severity === 'error') && output) save('canonical-catalog.json', output);
  save('reconciliation-report.json', report);
}

/** --write is explicit. Invalid batches only write a rejection report, never a partial catalog. */
function buildImport({ write = false, check = false } = {}) {
  const inputs = ['data/MASTER PRODUCTS.xlsx', 'data/catalog-mapping.json', 'data/product-media.json'];
  const fingerprints = Object.fromEntries(inputs.map((file) => [file, hash(file)]));
  const { workbook, catalog, assessment, issues } = createEvidenceSnapshot();
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'data/product-media.json'), 'utf8'));
  // Malformed manifests are already diagnosed by the strict registry validator.
  if (catalog) for (const i of checkMediaFiles(manifest)) issues.push({ code: i.code, severity: 'error', source: i.source, sourceValue: i.problem, canonicalValue: null, conflict: 'Media reference does not resolve with exact filename spelling', recommendedAction: 'Supply the correct file/association; never substitute another color.' });
  for (const file of inputs) if (fingerprints[file] !== hash(file)) issues.push({ code: 'INPUT_CHANGED', severity: 'error', source: file, sourceValue: fingerprints[file], canonicalValue: hash(file), conflict: 'Input changed while importing', recommendedAction: 'Retry with stable saved inputs.' });
  const generated = { notice: 'GENERATED. Do not edit. Run node scripts/import-catalog.mjs --write from the owning sources.', importerVersion: 'catalog-import-v1', sourceVersion: workbook.version,
    fingerprintPolicy: 'SHA-256: XLSX raw bytes; JSON UTF-8 JSON.stringify(JSON.parse(bytes)), preserving string values and key order.', fingerprints };
  const output = catalog ? { generated, catalog } : null;
  const report = { generated, success: !issues.some((i) => i.severity === 'error'), summary: {
    sourceRows: workbook.rows.length, canonicalRows: catalog?.variants.length ?? 0,
    uniqueSKUs: new Set(workbook.rows.map((r) => r.fields.SKU).filter(Boolean)).size,
    collections: catalog?.collections.length ?? 0, subCollections: catalog?.subCollections.length ?? 0, categories: catalog?.categories.length ?? 0,
    products: catalog?.products.length ?? 0, productsWithSKU: new Set(catalog?.variants.map((v) => v.productId)).size,
    colorPatterns: catalog?.colorPatterns.length ?? 0, missingFabric: workbook.rows.filter((r) => r.fields.FABRIC === null).length,
    sourceStatuses: counts(workbook.rows.map((r) => r.fields), 'STATUS'), publication: counts(catalog?.products ?? [], 'publication'),
    literalPriceRows: catalog?.variants.filter((v) => v.provenance.priceEvidence === 'literal').length ?? 0,
    dataEligibleVariants: assessment?.variants.filter((v) => v.dataEligible).length ?? 0,
    orderableVariants: assessment?.variants.filter((v) => v.orderable).length ?? 0,
    mediaReferences: catalog?.media.length ?? 0, missingMediaGroups: assessment?.issues.filter((i) => i.code === 'MEDIA_MISSING').length ?? 0,
    issueCounts: counts(issues, 'code'),
  }, issues };
  if (catalog && catalog.variants.length !== workbook.rows.length) {
    report.success = false;
    issues.push({ code: 'ROW_LOSS', severity: 'error', source: 'PRODUCTS', sourceValue: workbook.rows.length, canonicalValue: catalog.variants.length, conflict: 'Canonical row count differs from source', recommendedAction: 'Repair importer before accepting this batch.' });
  }
  if (check && report.success) {
    const stale = checkGeneratedFiles(output, report);
    issues.push(...stale);
    if (stale.length) report.success = false;
  }
  if (write) {
    writeImportBatch({ output, report }, path.join(root, 'data/generated'));
  }
  return { output, report };
}

export function runImport(options = {}) {
  try { return buildImport(options); }
  catch (error) {
    const report = { success: false, summary: { accepted: false }, issues: [{
      code: 'IMPORT_IO_FAILURE', severity: 'error', source: 'workbook/registry/output', sourceValue: error.message, canonicalValue: null,
      conflict: 'Import could not read or persist a complete batch', recommendedAction: 'Verify XLSX integrity, source paths and permissions; retry. No new catalog is accepted.',
    }] };
    // Invalidate the previous report on a failed write attempt, without overwriting its catalog.
    if (options.write) writeImportBatch({ output: null, report }, path.join(root, 'data/generated'));
    return { output: null, report };
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const args = process.argv.slice(2);
  if (args.some((a) => !['--write', '--check'].includes(a)) || args.includes('--write') && args.includes('--check')) throw new Error('Use --write OR --check, or no flags for read-only preview.');
  try {
    const { report } = runImport({ write: args.includes('--write'), check: args.includes('--check') });
    console.log(serialize(args.length ? { success: report.success, ...report.summary, errors: report.issues.filter((i) => i.severity === 'error') } : report));
    if (!report.success) process.exitCode = 1;
  } catch (error) {
    console.error(`SOURCE_READ_FAILED: ${error.message}. No new canonical snapshot accepted; verify the XLSX path/container and retry.`);
    process.exitCode = 1;
  }
}
