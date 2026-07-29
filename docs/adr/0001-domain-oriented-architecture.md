# Title: Domain-Oriented Architecture
Status: Accepted
Date: 2026-07-29
Context: Mixing UI code with mock datasets or external API endpoints creates fragile codebases that break during backend migrations. The application needs a way to decouple UI components from data fetching to allow swapping dummy data for production data sources later.
Decision: Separate business logic into explicit domain modules (`product`, `collection`, `category`, `homepage`, `navigation`, `loyalty`, `member`, `wishlist`, `cart`).
Alternatives Considered: MVC, generic utility files. These don't scale well with complex business logic and often lead to tightly coupled UI and data.
Consequences: UI components consume domain use cases or services, allowing prototype mock data to be replaced with Supabase API calls in the future without changing a single line of UI code. Increases initial boilerplate but greatly improves long-term maintainability.
Future Review: Review when introducing the first real external data source (Supabase) to ensure the domain boundaries held up.
