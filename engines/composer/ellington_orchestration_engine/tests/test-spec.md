# Test Spec: Ellington Orchestration Engine

## Success Conditions

- Register layers clear (melody high, backgrounds mid).
- Section dialogue present when density allows.
- Voicings playable and clear.
- No register clash.

## Failure Conditions

- Melody and background in same register band.
- Impossible tessitura (e.g. trumpet below staff).
- Unplayable voicings (e.g. closed in very low register).
- Section overlap without intent.

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| 8-bar | melody + harmony | Register + dialogue | |
| Dense | density_target: high | More overlap, less dialogue | |
| Sparse | density_target: low | Clear separation | |
| Voicing | chord + spread: open | Open 4-way | |

## Edge Cases

- Very high melody: backgrounds must stay below.
- Very low bass: upper voicings must clear.
