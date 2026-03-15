# Development Roadmap v1

Concise roadmap for gml-composer-engines. Honest about current state: Bach, Ellington, and Stravinsky are design-stage specs, not mature engines. Shorter is the best candidate for first true engine deepening. Ellington is the most practical next engine for big-band relevance.

## Phase 1 — Stabilise Core Existing Primitives

- motif_fragment
- phrase_asymmetry
- delay_resolution
- register_layer
- section_call_response
- voicing_spread

Validate against real musical examples. Ensure notes, examples, and test-specs are complete and accurate.

## Phase 2 — Add Transformation Primitives

- transform_fragment
- transform_transposition
- transform_rotation
- transform_interval_map

Done. Validate and refine.

## Phase 3 — Add Missing Dependency Primitives

- voice_independence
- suspension_chain
- block_rhythm
- metric_cell

These support Bach, Stravinsky, and Ellington engines.

## Phase 4 — Deepen One Engine Properly

Priority:

1. **Wayne Shorter Engine** — Best candidate for first true engine deepening. Melodic, motivic, phrase-level. Clear style references.
2. **Ellington Orchestration Engine** — Most practical next for big-band relevance. Section layout, voicing, register.
3. **Bach Counterpoint Engine** — Design-stage. Needs voice_independence, suspension_chain.
4. **Stravinsky Rhythm Engine** — Design-stage. Needs block_rhythm, metric_cell.

## Phase 5 — Add Form Primitives and Form Architecture Engine

Form-level logic: section boundaries, repeats, transitions. Supports conductor formal coordination.

## Phase 6 — Tighten Conductor Contracts and Engine Interaction Rules

Formalise handoff, activation_window, layer_priority, conflict_resolution. Conductor behaviour expressed via interaction primitives, not ad hoc code.
