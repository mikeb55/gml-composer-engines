# Test Spec: Register Partition

## Success Conditions

- Upper voice in E4–C6 range
- Lower voice in E2–B3 range
- No prolonged identical register

## Failure Conditions

- Both voices in same register for extended period

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| Standard | Two voices | Assigned to zones | |
| Crossing | Brief overlap | Allowed | Within tolerance |
| Prolonged overlap | Both in C4–E4 | Flag | Violation |
