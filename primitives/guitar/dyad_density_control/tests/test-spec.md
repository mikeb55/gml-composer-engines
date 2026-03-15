# Test Spec: Dyad Density Control

## Success Conditions

- Alternation between line and dyad present
- No continuous double-stop writing

## Failure Conditions

- Continuous double-stops throughout
- No dyadic moments when required

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| Alternating | Two voices | Line–dyad pattern | |
| Continuous dyads | All beats dyadic | Flag | Violation |
| Structural | Cadence moment | Dyad emphasis allowed | |
