// Read-only registry assessment; no importer, output writer or publication action.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { root, loadTs, readSource } from './canonical-support.mjs';

export function checkMediaFiles(manifest) {
  const issues = [];
  for (const media of manifest.media) {
    const parts = ['public', ...media.reference.slice(1).split('/')];
    let directory = root;
    let valid = true;
    // Exact spelling also catches Windows-only case-insensitive successes.
    for (const part of parts) {
      if (!fs.existsSync(directory) || !fs.statSync(directory).isDirectory() || !fs.readdirSync(directory).includes(part)) { valid = false; break; }
      directory = path.join(directory, part);
    }
    if (!valid || !fs.statSync(directory).isFile()) issues.push({
      code: 'MEDIA_FILE_MISSING', severity: 'error', source: 'data/product-media.json', field: media.id, problem: media.reference,
    });
  }
  return issues;
}

export function assessRegistries() {
  const mapping = JSON.parse(fs.readFileSync(path.join(root, 'data/catalog-mapping.json'), 'utf8'));
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'data/product-media.json'), 'utf8'));
  const { validateCatalogRegistries, mediaManifestSchema } = loadTs('lib/catalog-registry.ts');
  const { workbook, issues: sourceIssues } = readSource();
  const issues = [...sourceIssues.filter((i) => i.severity === 'error'), ...validateCatalogRegistries(mapping, manifest, workbook.rows.map((r) => r.fields))];
  if (mediaManifestSchema.safeParse(manifest).success) issues.push(...checkMediaFiles(manifest));
  return { issues, summary: { products: mapping.products?.length, media: manifest.media?.length, sourceRows: workbook.rows.length } };
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const report = assessRegistries();
  console.log(JSON.stringify(report, null, 2));
  if (report.issues.length) process.exitCode = 1;
}
