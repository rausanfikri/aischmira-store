import { Category } from "./types";
import { categorySchema } from "./schema";

export class CategoryMapper {
  static toDomain(rawPayload: unknown): Category {
    return categorySchema.parse(rawPayload) as Category;
  }

  static toDomainList(rawPayloads: unknown[]): Category[] {
    return rawPayloads.map((item) => this.toDomain(item));
  }
}
