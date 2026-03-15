# Test Spec: Brass Reed Contrast

## Success Conditions

- Brass and reeds are audibly distinct when contrast is applied.
- Weight balance is respected (brass_heavy, balanced, reed_heavy).
- Contrast supports rather than obscures lead material.

## Failure Conditions

- Brass and reeds indistinguishable (no contrast).
- Weight imbalance contradicts phrase intent (e.g. reed lead with brass_heavy).
- Contrast creates competition instead of support.

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| Colour contrast | contrast_mode: colour | Muted brass vs. open reeds | Timbre distinct |
| Weight balance | brass_heavy | Brass dominates | Shout chorus |
| Response | contrast_mode: response | Staccato brass, legato reeds | Articulation |
| Support behaviour | reed lead, brass pad | Brass does not compete | Support vs. competition |

## Edge Cases

- Combined mode: all dimensions applied.
- Balanced weight: neither section dominates.
- Single section active: contrast N/A.
