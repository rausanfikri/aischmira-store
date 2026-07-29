# Title: Clean Architecture
Status: Accepted
Date: 2026-07-29
Context: The project needs a robust structural pattern to organize code and ensure dependencies point in the correct direction (towards the domain).
Decision: Implement a lightweight Clean Architecture consisting of Presentation, Application, Domain, and Infrastructure layers.
Alternatives Considered: Traditional 3-tier architecture, Hexagonal architecture. Clean Architecture provides a very clear separation of concerns that aligns perfectly with our need to swap infrastructure (Dummy -> Supabase/BigSeller).
Consequences: Strict dependency rules: Presentation -> Application -> Domain <- Infrastructure. Domain cannot import anything from Infrastructure or Presentation.
Future Review: Annually or when significant new architectural layers are proposed.
