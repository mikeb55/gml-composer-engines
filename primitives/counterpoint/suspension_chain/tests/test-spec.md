# Test Spec: Suspension Chain

## Success Conditions

- All dissonances prepared
- All suspensions resolve by step

## Failure Conditions

- Unprepared dissonance
- Resolution not by step (e.g. leap)

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| 4–3 | Prepare D, suspend over C, resolve to C | Pass | |
| Unprepared | Dissonance without preparation | Fail | |
| Wrong resolution | Resolve by leap | Fail | |
