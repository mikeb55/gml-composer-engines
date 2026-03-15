# Test Spec: Jimmy Wyble Engine

## Structural Tests

- spec.yaml contains required fields: id, name, category, purpose, primitives, outputs, generation_pipeline
- All required primitives exist: voice_independence, contrary_motion, oblique_motion, parallel_avoidance, register_partition, playability_constraint, dyad_density_control, string_set_preference
- notes.md, examples, tests present

## Voice Independence Tests

- **Both voices melodic:** Each line forms a coherent melody; neither is static accompaniment.
- **Rhythmic differentiation:** Voices do not share identical attack patterns (no lockstep).
- **Singability:** Each line is singable in isolation.

## Parallel Interval Avoidance Tests

- **Parallel fifths:** parallel_avoidance primitive applied; no sustained parallel P5.
- **Parallel octaves:** No sustained parallel P8.
- **Detection:** Two voices moving C→D and G→A simultaneously flagged.

## Dyad Density Behaviour Tests

- **Alternation:** Texture alternates line→dyad→line→dyad (or similar).
- **No continuous double-stops:** Avoid continuous double-stop writing throughout.
- **Structural emphasis:** Dyads at cadences or phrase ends when specified.

## Register Partition Enforcement Tests

- **Upper zone:** Upper voice in E4–C6 (or within register_plan).
- **Lower zone:** Lower voice in E2–B3 (or within register_plan).
- **Overlap tolerance:** Momentary crossing allowed; prolonged overlap flagged.

## Playability Constraint Tests

- **Stretch limit:** Intervals within guitar_position_span (e.g. 5 semitones per hand position).
- **String adjacency:** string_set_preference favours adjacent strings.
- **Impossible combinations:** Intervals exceeding playable hand span flagged by playability_constraint.

## Success Conditions

- Two independent melodic lines
- Harmonic implication sufficient for listener to infer progression
- Texture guitar-playable
- Motion avoids excessive parallel perfect intervals
- Contrapuntal character, not melody-plus-filler

## Failure Conditions

- One voice becomes mere accompaniment
- Too many static filler dyads
- Implied harmony weak or muddy
- Writing not realistically playable on guitar

## Wyble Source Integration Tests

- **Pedal-tone:** When pedal_tone_enabled, lower voice holds or repeats; upper moves above.
- **Voice-ratio:** voice_ratio_mode one_to_one, two_to_one, three_to_one, mixed produces correct note-density ratio.
- **Altered dominant:** When altered_dominant_bias > 0 over dominant chords, b9/#9/b5/#5 or diminished-derived motion appears.
- **Chord-stack derivation:** Lines informed by 2-note teams from chord stacks (5-root-3-7, root-5-7-3, etc.).
- **Contrary motion scoring:** Real contrary motion rewarded more strongly than mere spacing success.
- **Practice mode:** exercise = more systematic; etude = more musical; improvisation = freer.

## Future Validation Needs

- Runtime implementation to execute test prompts
- Human evaluation against Wyble transcriptions
- Comparison with bach_counterpoint_engine output
