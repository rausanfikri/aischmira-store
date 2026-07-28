import { Collection } from "./types";
import { collectionSchema } from "./schema";

export class CollectionMapper {
  static toDomain(rawPayload: unknown): Collection {
    const validated = collectionSchema.parse(rawPayload);
    return validated as Collection;
  }

  static toDomainList(rawPayloads: unknown[]): Collection[] {
    return rawPayloads.map((item) => this.toDomain(item));
  }
}
