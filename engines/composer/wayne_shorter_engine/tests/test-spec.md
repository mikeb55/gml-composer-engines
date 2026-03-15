# Test Spec: Wayne Shorter Engine

## Success Conditions

- Motif developed via fragment and/or sequence.
- Phrase structure asymmetric (not 4+4).
- At least one cadence delayed.
- Output is melodically coherent.

## Failure Conditions

- Square phrasing (4+4) throughout.
- No motivic development (literal repetition only).
- Immediate resolution at bar 4 or 8.
- Melodic nonsense.

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| 8-bar | seed motif, 8 bars | Asymmetric, developed | |
| 16-bar | seed motif, 16 bars | Multiple developments | |
| Modal | Cm7 context | Avoids strong leading tone | |
| Cadence | ii–V–I context | Delay before I | |

## Edge Cases

- Very short seed motif: fragment may equal motif; sequence still applies.
- Dense harmonic context: delay_resolution may conflict; engine should prioritise.
