# Test Spec: Register Interlock

## Success Conditions

- Complementary register assignment
- Clear texture when crossing
- Brief crossing allowed

## Failure Conditions

- Prolonged identical register
- Muddy texture

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| Standard | Two voices | Complementary zones | |
| Crossing | Brief overlap | Allowed | Clear texture |
