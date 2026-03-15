# Test Spec: Phrase Overlap

## Success Conditions

- Overlap occurs without collapse
- Continuity preserved
- At least one voice active at boundary

## Failure Conditions

- All voices resolve simultaneously
- Texture collapse

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| Standard | Phrase boundary | One voice overlaps | |
| Resolve | Both resolve | Flag | Avoid |
