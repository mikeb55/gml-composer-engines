# Test Spec: Oblique Motion

## Success Conditions

- One voice sustains when oblique is applied
- Moving voice moves stepwise or by leap

## Failure Conditions

- Both voices static (no motion)
- Invalid combination

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| Oblique | V1 static, V2 moves | Pass | |
| Both move | Both voices move | Not oblique | Use contrary/parallel |
| Suspension | Static→resolve | Pass | 4–3 setup |
