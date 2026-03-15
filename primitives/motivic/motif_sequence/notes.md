# Notes: Motif Sequence

## Rationale

Sequencing is a core motivic technique: restate the motif at different pitch levels to build continuity and tension. Bach, Shorter, and classical composers use it extensively. The primitive isolates the transposition logic from style-specific choices.

## Design Decisions

- **direction** controls whether sequence ascends, descends, or mixes. Mixed can produce more interesting results in modal contexts.
- **strict_diatonic** constrains transpositions to scale degrees when harmonic context is known.
- **boundary_constraint** prevents register overflow; important for orchestration.

## Open Questions

- Should sequence support rhythmic displacement (stretto-like)?
- How to handle motif length vs. bar boundaries in sequence placement?

## References

- Bach, *Two-Part Inventions* (sequential treatment)
- Shorter, "Speak No Evil" (modal sequencing)
