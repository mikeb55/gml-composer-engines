# Test Spec: Bach Counterpoint Engine

## Success Conditions

- Voices are rhythmically and melodically independent.
- All dissonances prepared and resolved.
- No parallel fifths or octaves.
- Suspensions follow preparation–suspension–resolution.

## Failure Conditions

- Parallel fifths or octaves.
- Unprepared dissonance.
- Voice crossing that obscures independence.
- Suspension without preparation.

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| 2-voice | melody, 2 voices | Independent counterpoint | |
| Suspension | melody, suspension_preference: true | 4–3 or 7–6 chain | |
| Dissonance | melody with dissonance | Prepared and resolved | |
| Parallels | any | No P5 or P8 | |

## Edge Cases

- Jazz harmony: 7ths may be treated as consonances; engine may need mode flag.
- Very dense melody: counterpoint may need to simplify rhythm.

## Pending

Tests cannot be fully executed until suspension_chain, voice_independence, and dissonance_preparation primitives are implemented.
