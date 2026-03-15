# Test Spec: Ellington Orchestration Engine

## Success Conditions

- Register layers clear (melody high, backgrounds mid).
- Section dialogue present when density allows.
- Voicings playable and clear.
- **Section roles never conflict** (one lead per phrase).
- **Density map evolves logically** (build, release; no nonsensical jumps).
- **Brass/reed contrast maintained** (audibly distinct when both active).

## Failure Conditions

- Melody and background in same register band.
- Impossible tessitura (e.g. trumpet below staff).
- Unplayable voicings.
- **Role conflict**: two sections assigned lead.
- **Density violation**: abrupt or nonsensical density jumps.
- **Contrast loss**: brass and reeds indistinguishable.

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| Role clarity | 8-bar phrase | One lead per phrase | Section roles never conflict |
| Density logic | 4 phrases | Sparse → medium → dense → tutti | Density map evolves logically |
| Brass/reed contrast | brass + reeds active | Audibly distinct | Contrast maintained |
| 8-bar Dm7→G7→Cmaj7 | melody + harmony | Register + dialogue | |

## Edge Cases

- Very high melody: backgrounds must stay below.
- Very low bass: upper voicings must clear.
- Role transition: lead changes section; no overlap.
- Density max: tutti respects ensemble limits.
