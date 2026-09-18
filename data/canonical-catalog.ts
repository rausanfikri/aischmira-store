import output from "./generated/canonical-catalog.json";
import report from "./generated/reconciliation-report.json";
import { canonicalCatalogSchema, validateCanonicalCatalog } from "../lib/catalog-contract";

/** Generated read model only. Source freshness is enforced by the import --check command. */
if (!report.success || JSON.stringify(output.generated) !== JSON.stringify(report.generated)) {
  throw new Error("Canonical batch rejected or report mismatched. Review reconciliation and rerun the importer.");
}
export const canonicalCatalog = canonicalCatalogSchema.parse(output.catalog);
export const canonicalAssessment = validateCanonicalCatalog(canonicalCatalog);
if (canonicalAssessment.issues.some((i) => i.severity === "error")) throw new Error("Invalid generated canonical catalog");
