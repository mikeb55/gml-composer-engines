# Notes: Register Layer

## Rationale

Big band and orchestral arranging rely on clear register separation. Melody in high brass, backgrounds in mid reeds, bass in low. Ellington and Basie use register layers to create depth and avoid muddiness. The primitive assigns material to pitch bands.

## Design Decisions

- **bands** are configurable; default low/mid/high maps to typical big band layout.
- **overlap_allowed** permits doublings or blended registers when desired.
- **existing_occupancy** lets the primitive avoid doubling or clashing with already-placed material.

## Open Questions

- How fine-grained should bands be? (3 vs. 5 vs. per-instrument)
- Should assignment consider timbre (e.g. trumpet vs. alto in same register)?

## References

- Ellington, "Diminuendo and Crescendo in Blue" (register-based tutti)
- Big band standard: melody high, backgrounds mid, bass low
