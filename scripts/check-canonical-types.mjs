import path from 'node:path';
import ts from 'typescript';
import { root } from './canonical-support.mjs';

const config = ts.readConfigFile(path.join(root, 'tsconfig.json'), ts.sys.readFile);
const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, root);
const files = ['types/canonical-catalog.ts', 'types/catalog-registry.ts', 'lib/catalog-contract.ts', 'lib/catalog-registry.ts', 'data/catalog-registry.ts', 'data/catalog.ts', 'data/product-media.ts'].map((f) => path.join(root, f));
const program = ts.createProgram(files, { ...parsed.options, incremental: false, noEmit: true });
const diagnostics = [...parsed.errors, ...ts.getPreEmitDiagnostics(program)];
if (diagnostics.length) {
  console.error(ts.formatDiagnosticsWithColorAndContext(diagnostics, {
    getCanonicalFileName: (f) => f, getCurrentDirectory: () => root, getNewLine: () => '\n',
  }));
  process.exitCode = 1;
} else console.log('Canonical types and validator: PASS (strict, no emit).');
