# Test Spec: Accent Displacement

## Success Conditions

- Accent positions differ from default strong beats when strength > 0.
- Output is valid within metre.
- Displacement is consistent with displacement_spec.

## Failure Conditions

- No displacement when strength > 0.
- Invalid beat or subdivision index.
- Rhythm violates metre.

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| Half-beat | 4/4, shift_subdivision: 1 | Accents on offbeats | |
| Full beat | 4/4, shift_beats: 1 | Accents on 2, 4 | |
| Strength 0 | any, strength: 0 | No change | |
| Strength 1 | any, strength: 1 | Full displacement | |

## Edge Cases

- 3/4: strong beats 1, 3; displacement may target 2 or subdivisions.
- Compound metre (6/8): accent on 1 and 4; displacement to 2, 3, 5, 6.
