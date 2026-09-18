// Read-only source + registry + generated snapshot freshness validation.
import { runImport } from './import-catalog.mjs';
const result = runImport({ check: true });
console.log(JSON.stringify(result.report.summary, null, 2));
if (!result.report.success) {
  console.error(JSON.stringify(result.report.issues.filter((i) => i.severity === 'error'), null, 2));
  process.exitCode = 1;
}
