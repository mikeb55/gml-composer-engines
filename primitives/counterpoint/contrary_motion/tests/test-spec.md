# Test Spec: Contrary Motion

## Success Conditions

- Contrary motion present when voices move
- Independence promoted

## Failure Conditions

- Sustained parallel motion when contrary was possible

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| Contrary | V1 up, V2 down | Pass | |
| Parallel | Both up | Flag or avoid | |
| Oblique | One static | Pass | Oblique is valid |
