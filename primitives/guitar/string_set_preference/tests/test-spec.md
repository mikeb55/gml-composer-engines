# Test Spec: String Set Preference

## Success Conditions

- String pairs mostly adjacent or near-adjacent
- Picking patterns ergonomic

## Failure Conditions

- Frequent large string skips
- Awkward picking patterns

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| Adjacent | A and D strings | Pass | Preferred |
| Near-adjacent | D and G strings | Pass | Allowed |
| Large skips | E and high E frequently | Flag | Violation |
