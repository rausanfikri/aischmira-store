# Title: Repository Pattern
Status: Accepted
Date: 2026-07-29
Context: We are currently using dummy data for the prototype but will eventually migrate to Supabase and BigSeller.
Decision: Introduce the Repository Pattern. Domain modules will define `IRepository` interfaces (e.g., `IProductRepository`). Infrastructure will implement these interfaces (e.g., `DummyProductRepository`, `SupabaseProductRepository`).
Alternatives Considered: Active Record, direct service data fetching. Active Record couples the domain to the database. Direct service fetching violates the separation of concerns.
Consequences: Application services depend only on the interfaces. We will need a Dependency Injection mechanism to resolve these interfaces to their concrete implementations at runtime.
Future Review: When implementing the Supabase repositories.
