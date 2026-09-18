import mapping from "./catalog-mapping.json";
import manifest from "./product-media.json";
import { catalogMappingSchema, mediaManifestSchema, validateCatalogRegistries } from "../lib/catalog-registry";

const issues = validateCatalogRegistries(mapping, manifest);
if (issues.length) throw new Error(`Invalid catalog registries: ${JSON.stringify(issues)}`);
export const catalogMapping = catalogMappingSchema.parse(mapping);
export const mediaManifest = mediaManifestSchema.parse(manifest);
