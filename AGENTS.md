# AISCHMIRA.STORE — Agent Instructions

- Always read `MASTER_BRIEF.md` before work, then `AISCHMIRA_STATUS.md` for the checkpoint, blockers and open questions. Read other docs/code as relevant; historical docs do not override the brief.
- Do not repeat completed work. Recheck evidence only when changes or uncertainty justify it.
- Work on one small phase at a time, within its authorized scope. Ask first when ambiguity affects architecture, data or business logic; continue independent in-scope work where possible.
- Never invent business data or revive excluded features. Preserve exact names/SKUs, missing states, source prices and product/color media ownership from the brief.
- Reuse suitable architecture: Next.js App Router, strict TypeScript, thin routes, Server Components by default. Models: `types/`; source/mapping data: `data/`; focused services: `services/`; pure helpers: `lib/`; SKU cart: `store/`; presentation: `components/`.
- Keep one implementation per concern; avoid parallel repository/provider/container frameworks and unnecessary dependencies. Private account/integration access stays server-side and owner-scoped. Read installed Next.js docs when framework behavior matters.
- Inspect Git status before/after and work on a branch. Preserve unrelated changes. Never bulk-delete, restore, stage or commit other work. Do not edit the workbook without explicit authorization.
- After each phase, self-review and run relevant validation. Documentation phases need content/link/scope checks; code phases need appropriate lint, type-check, build, data/commerce and responsive checks. Never claim unperformed checks.
- Update `AISCHMIRA_STATUS.md` with completed work, validation, blockers, decisions and next phase. Update other documentation only when in scope.
- Create a Git checkpoint after a meaningful completed phase, staging only its explicit files. Record checkpoint reference/status; do not push or deploy unless requested. Stop after the authorized phase.
