# Test Spec: Stravinsky Rhythm Engine

## Success Conditions

- Accents displaced from strong beats (1, 3 in 4/4).
- Block-like rhythmic character (repeated cells).
- Metric tension audible (beat vs. accent conflict).

## Failure Conditions

- Accents on strong beats throughout.
- No displacement when strength > 0.
- Metre unclear or lost.

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| 4/4 | 4 bars, 4/4 | Displaced accents | |
| Strength 0 | any, strength: 0 | No displacement | |
| Block | 4 bars | Repeated cells | Pending block_rhythm |
| 3/4 | 4 bars, 3/4 | Displaced in 3/4 | |

## Edge Cases

- Compound metre (6/8): accents may shift to 2, 3, 5, 6.
- Very dense material: displacement may apply to subset of attacks.

## Pending

Block rhythm tests require block_rhythm primitive.
