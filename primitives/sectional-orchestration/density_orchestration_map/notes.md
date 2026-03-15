# Notes: Density Orchestration Map

## Rationale

Big-band arrangements vary density: sparse verses, building bridges, dense shout choruses. Ellington controlled this explicitly—adding sections phrase by phrase, dropping out for contrast. This primitive maps density across phrases so the engine knows when to add or subtract sections.

## Design Decisions

- **sparse** — Few sections (e.g. rhythm + one section).
- **medium** — Moderate activity (2–3 sections).
- **dense** — Many sections active.
- **tutti** — Full ensemble.

## Open Questions

- Should density curve be style-specific?
- How to handle solo sections (reduce density)?

## References

- Ellington, arrangement builds (density increases toward climax)
- Basie, sparse-to-tutti shout chorus structure
