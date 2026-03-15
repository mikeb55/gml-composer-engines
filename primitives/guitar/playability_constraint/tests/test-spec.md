# Test Spec: Playability Constraint

## Success Conditions

- All intervals within playable hand span
- Movement favours adjacent strings

## Failure Conditions

- Intervals exceeding playable hand span
- Excessive position shifts

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| Playable | Two voices, reasonable intervals | Pass | |
| Impossible stretch | E2 and B5 simultaneously | Flag | Violation |
| Excessive leaps | Large position jumps | Flag | Discourage |

## Example

Test: Two voices generated with intervals exceeding playable hand span.
Expected: playability_constraint flags violation.
