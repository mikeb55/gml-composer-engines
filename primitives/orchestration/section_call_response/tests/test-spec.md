# Test Spec: Section Call Response

## Success Conditions

- Call and response groups are distinct.
- Pattern is followed.
- No unassigned bars in pattern.

## Failure Conditions

- Same group for call and response (unless overlap with different material).
- Pattern length mismatch with material.
- Invalid group reference.

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| Alternating | brass/reeds, pattern [c,r,c,r] | 4 alternations | |
| Overlap | overlap: true | Both play simultaneously | Shout style |
| 3 groups | brass, reeds, rhythm | 3-way dialogue | If supported |

## Edge Cases

- Unequal material length: call 1 bar, response 2 bars; pattern must accommodate.
- Single bar pattern: call only or response only; valid for short phrases.
