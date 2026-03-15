# Test Spec: Jimmy Wyble Engine

## Structural Tests

- spec.yaml contains required fields: id, name, category, purpose, primitives, outputs
- All required primitives (voice_independence, contrary_motion, oblique_motion, parallel_avoidance) exist in primitives/counterpoint
- notes.md, examples, tests present

## Musical Tests

- **Both voices melodic:** Each line forms a coherent melody; neither is static accompaniment.
- **Parallel fifths/octaves controlled:** parallel_avoidance primitive applied; no sustained parallel P5 or P8.
- **Contrary/oblique motion:** Contrary and oblique motion appear often enough; not dominated by parallel motion.
- **Guitar playability:** Output respects guitar range (e.g. E2–E6); no impossible stretches or fingerings.
- **Implied harmony:** Harmony clear from dyadic events without constant full voicings

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

## Future Validation Needs

- Runtime implementation to execute test prompts
- Playability primitive (fretboard geometry, reach)
- Human evaluation against Wyble transcriptions
- Comparison with bach_counterpoint_engine output
