# Notes: Background Figure

## Rationale

Ellington's arrangements use background figures—repeated rhythmic/harmonic patterns—to support the lead without drawing attention. Sax section pads, brass hits on offbeats, and ostinato figures are common. This primitive generates such figures with explicit constraints to avoid competition.

## Design Decisions

- **ostinato** — Repeated short figure; common in Ellington.
- **pad** — Sustained harmony; minimal rhythm.
- **hits** — Short stabs on beat or offbeat; brass typical.
- **counter_rhythm** — Rhythmic figure complementing lead; must not compete.

## Open Questions

- How to detect when figure would compete with lead?
- Should figure respond to lead rests (fill) or stay constant?

## References

- Ellington, "Caravan" (ostinato figures behind melody)
- Thad Jones, background writing (support without competition)
