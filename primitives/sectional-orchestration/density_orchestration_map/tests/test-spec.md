# Test Spec: Density Orchestration Map

## Success Conditions

- Density logic is coherent across phrases.
- One density value per phrase.
- max_density respected (no over-activation).
- Transitions support musical flow (build, release).

## Failure Conditions

- Density exceeds max_density.
- Abrupt or nonsensical density jumps.
- Missing density for phrase.
- Density curve length mismatch with phrase_sequence.

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| Build | curve [sparse, medium, dense, tutti] | Increasing density | Density logic |
| Release | curve [tutti, dense, medium, sparse] | Decreasing | Release |
| Max density | max_density: 3 | Never more than 3 sections | Role clarity |
| Coherent | 4 phrases | 4 density values | No missing |

## Edge Cases

- Empty phrase_sequence: reject.
- Curve longer than phrases: truncate or error.
- Solo phrase: density should drop (sparse).
