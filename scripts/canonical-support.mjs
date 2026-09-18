// Shared CLI I/O and TypeScript evaluation. No writes and no legacy source dependency.
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import vm from 'node:vm';
import ts from 'typescript';

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const nodeRequire = createRequire(import.meta.url);
const cache = new Map();
export function loadTs(relative) {
  const filename = path.resolve(root, relative);
  if (filename.endsWith('.json')) return JSON.parse(fs.readFileSync(filename, 'utf8'));
  if (cache.has(filename)) return cache.get(filename).exports;
  const loaded = { exports: {} };
  cache.set(filename, loaded);
  const code = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true },
    fileName: filename,
  }).outputText;
  const localRequire = (specifier) => {
    const suffix = specifier.endsWith('.json') ? '' : '.ts';
    if (specifier.startsWith('@/')) return loadTs(`${specifier.slice(2)}${suffix}`);
    if (specifier.startsWith('.')) return loadTs(path.resolve(path.dirname(filename), `${specifier}${suffix}`));
    return nodeRequire(specifier);
  };
  vm.runInThisContext(`(function(require, exports, module) {${code}\n})`, { filename })(localRequire, loaded.exports, loaded);
  return loaded.exports;
}

export function readRawWorkbook(filename = path.join(root, 'data/MASTER PRODUCTS.xlsx')) {
  return JSON.parse(execFileSync('powershell.exe', ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', path.join(root, 'scripts/read-product-workbook.ps1'), '-Workbook', filename], {
    encoding: 'utf8', maxBuffer: 16 * 1024 * 1024, windowsHide: true,
  }));
}

export function readSource() {
  const file = path.join(root, 'data/MASTER PRODUCTS.xlsx');
  const before = createHash('sha256').update(fs.readFileSync(file)).digest('hex');
  const raw = readRawWorkbook(file);
  const after = createHash('sha256').update(fs.readFileSync(file)).digest('hex');
  if (before !== after) throw new Error('Workbook changed during read. Retry after saving the source.');
  return loadTs('lib/catalog-import.ts').extractProductSource(raw, before);
}
export function readWorkbook() { return readSource().workbook; }

export function createEvidenceSnapshot(workbook) {
  const source = workbook ? { workbook, issues: [] } : readSource();
  const mapping = JSON.parse(fs.readFileSync(path.join(root, 'data/catalog-mapping.json'), 'utf8'));
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'data/product-media.json'), 'utf8'));
  const result = loadTs('lib/catalog-import.ts').reconcileCatalog(source.workbook, mapping, manifest, source.issues);
  return { ...result, workbook: source.workbook, extractionIssues: result.issues };
}
