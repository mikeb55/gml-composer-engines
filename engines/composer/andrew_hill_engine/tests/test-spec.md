# Test Spec: Andrew Hill Engine

## Success Conditions

- Phrase structure asymmetric.
- Harmonic motion intervallic or non-functional.
- At least one resolution delayed or obscured.
- Melody uses intervallic leaps.

## Failure Conditions

- Strict ii–V–I throughout.
- Square phrasing (4+4).
- Purely scalar melody.
- Immediate functional resolution.

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| 8-bar harmony | chord list | Intervallic roots | |
| Phrase | 8 bars | 5+3 or similar | |
| Delay | cadence context | Delayed resolution | |
| Motif | seed motif | Fragment development | |

## Edge Cases

- Dense chord changes: engine may simplify or extend.
- Very short phrase: asymmetry still applies where possible.
