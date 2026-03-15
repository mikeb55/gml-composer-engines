# Notes: Delay Resolution

## Rationale

Jazz and modal harmony often delay expected cadences. A ii–V–I can become ii–V–V/V–V–I, or the tonic can be deferred by inserting a substitute dominant. Shorter and Hill use this to maintain ambiguity. The primitive captures the logic of "insert something before the resolution."

## Design Decisions

- **strategy**: insertion (add chord), substitution (replace with tension chord), extension (hold dominant longer).
- **insertion_chord** and **substitution_chord** allow explicit choices; engine can also infer from context.
- **max_delay** prevents endless deferral.

## Open Questions

- How to handle modal contexts where "resolution" is less clearly defined?
- Should delay support rhythmic displacement (resolution on weak beat)?

## References

- Shorter, "Footprints" (delayed tonic arrival)
- Hill, "Black Fire" (non-functional delay)
- Classical: deceptive cadence as a form of delay
