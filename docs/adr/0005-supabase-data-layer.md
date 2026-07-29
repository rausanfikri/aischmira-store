# Title: Supabase PostgreSQL as Website Data Layer
Status: Accepted
Date: 2026-07-29
Context: Directly querying BigSeller OMS on every user page request would introduce latency and hit third-party API rate limits.
Decision: Supabase PostgreSQL is chosen as the website's high-performance read store and authentication provider.
Alternatives Considered: Firebase, direct API to BigSeller. Firebase lacks the relational features needed for complex product/collection modeling.
Consequences: Read queries are executed with sub-10ms response times. Row Level Security (RLS) policies restrict public access to active catalog items. Requires a sync mechanism between BigSeller and Supabase.
Future Review: Monitor Supabase performance and costs as traffic scales.
