# Notes: Phrase Asymmetry

## Rationale

Square phrasing (4+4, 8+8) dominates pop and early jazz. Asymmetric phrasing (3+3+2, 5+3, 7-bar phrases) creates tension and sophistication. Shorter, Hill, and contemporary jazz rely on it. The primitive biases toward uneven grouping without imposing a single pattern.

## Design Decisions

- **bias** is continuous: 0 allows square; 1 pushes strongly toward irregular. Most engines use 0.5–0.8.
- **grouping_pattern** allows explicit patterns like [3, 3, 2] or [5, 3].
- **avoid_square** is a simple guard; can be overridden when square is intentionally desired.

## Open Questions

- How to handle phrase extension (e.g. 4+4+2) vs. compression?
- Should asymmetry apply to sub-phrase level (within 4 bars) or only phrase level?

## References

- Shorter, "Nefertiti" (7-bar phrases)
- Hill, "Black Fire" (irregular phrase lengths)
- Konitz, Tristano school (asymmetric line construction)
