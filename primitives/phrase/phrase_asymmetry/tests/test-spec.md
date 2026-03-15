# Test Spec: Phrase Asymmetry

## Success Conditions

- Output grouping matches asymmetry_spec when grouping_pattern is provided.
- When avoid_square is true, output is not 4+4 or 8+8.
- Total bar count is preserved or explicitly extended.

## Failure Conditions

- Square output when asymmetric was requested.
- grouping_pattern sum does not match bar_count.
- Empty or degenerate structure.

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| 3+3+2 | 8 bars, pattern [3,3,2] | [3,3,2] | Standard |
| 5+3 | 8 bars, pattern [5,3] | [5,3] | |
| Bias high | 8 bars, bias 0.9, no pattern | Non-square | System chooses |
| Bias low | 8 bars, bias 0.1 | May be square | Less constraint |

## Edge Cases

- 7-bar phrase: valid patterns [3,4], [4,3], [2,2,3], etc.
- 12-bar phrase: [3,3,3,3] or [5,4,3] etc.
