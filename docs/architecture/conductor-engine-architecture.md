# Conductor Engine Architecture

## Role

The Conductor Engine is not a style engine. It does not generate melody, harmony, or orchestration. It coordinates specialised engines.

## Responsibilities

- **Timing** — When each engine runs; bar-level and phrase-level scheduling.
- **Layering** — How outputs from multiple engines combine (melody over harmony, counterpoint over bass).
- **Formal logic** — Section boundaries, repeats, transitions.
- **Density** — Controlling activity level across the ensemble.
- **Interaction** — How engines influence each other (e.g. harmony engine informs orchestration engine).
- **Handoff** — Passing material between engines (e.g. melody engine output becomes counterpoint engine input).

## Example Stack

| Engine | Role |
|--------|------|
| Wayne Shorter | Melody, motivic development |
| Andrew Hill | Harmony, intervallic motion |
| Bach Counterpoint | Counterlines, suspensions |
| Stravinsky | Rhythm, accent displacement |
| Ellington | Orchestration, section colour |

The Conductor invokes these in order or in parallel, merges outputs, and produces a coherent arrangement.

## Invariant

The Conductor never encodes style. It encodes coordination logic. Style lives in the engines.
