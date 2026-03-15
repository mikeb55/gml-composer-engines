# Notes: Bach Counterpoint Engine

## Rationale

Bach's counterpoint: voice independence, controlled dissonance, suspension logic. The engine aims to produce Bach-style counterlines for use in jazz arranging (e.g. countermelodies behind a solo) or classical-style composition. Lower-level primitives are not yet implemented.

## Design Decisions

- **species_constraint** allows 1:1, 2:1, etc. For now, species 1 (note-against-note) is the default.
- **dissonance_treatment: strict** — all dissonances prepared and resolved.
- **suspension_preference** — engine favours 4–3, 7–6, 9–8 suspensions.

## Pending Primitives

The following primitives are not yet implemented. The engine spec defines intended behaviour; implementation will depend on:

- **suspension_chain** — Generate preparation–suspension–resolution sequences.
- **voice_independence** — Ensure rhythmic and melodic independence between voices.
- **dissonance_preparation** — Enforce preparation and resolution rules.
- **species_counterpoint** — Species-specific rules (1:1, 2:1, etc.).

Until these exist, the engine is a design specification. Decision logic is documented for future implementation.

## Open Questions

- How to adapt species rules for jazz harmony (7ths, extensions)?
- Should engine support invertible counterpoint?

## References

- Bach, *Two-Part Inventions*, *Well-Tempered Clavier*
- Fux, *Gradus ad Parnassum* (species counterpoint)
