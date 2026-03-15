# Notes: Stravinsky Rhythm Engine

## Rationale

Stravinsky's rhythm: displaced accents, block-like cells, metric tension. *Rite of Spring*, *Symphony of Psalms* exemplify. The engine uses accent_displacement as the core primitive. Block rhythm and metric cell primitives are pending.

## Design Decisions

- **accent_displacement** — Primary primitive; shift accents to offbeats or displaced subdivisions.
- **block_rhythm_bias** — Engine favours repeated 2–4 note cells; pending block_rhythm primitive.
- **metric_tension** — High by default; accents contradict implied beat.

## Pending Primitives

- **block_rhythm** — Generate or recognise block-like rhythmic cells (repeated, varied).
- **metric_cell** — Encode metric tension (e.g. 3 over 4, 5 over 4).

Until these exist, the engine applies accent_displacement and documents intended block behaviour in decision_logic.

## Primitive Usage

- accent_displacement: shift_subdivision 1 (half-beat) or shift_beats 1; strength 0.7.

## Open Questions

- How to parameterise "block" character without block_rhythm primitive?
- Should engine support polymetre explicitly?

## References

- Stravinsky, *Rite of Spring*, *Symphony of Psalms*, *Symphonies of Wind Instruments*
