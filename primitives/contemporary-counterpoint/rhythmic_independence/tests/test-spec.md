# Test Spec: Rhythmic Independence

## Success Conditions

- Rhythmic profiles differ between voices
- No prolonged lockstep

## Failure Conditions

- Identical attack patterns
- Voices moving in lockstep

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| Standard | Two voices | Different profiles | |
| Lockstep | Same rhythm | Flag | Violation |
