# Test Spec: Register Layer

## Success Conditions

- All material assigned to valid bands.
- Tessitura within band range.
- No impossible instrument assignments.

## Failure Conditions

- Material outside band range.
- Unassigned material when full coverage required.
- Instrument cannot play assigned register.

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| Melody high | melody C5–G5 | high band | |
| Bass low | bass line | low band | |
| Overlap | two parts, overlap_allowed: true | Both in mid | Shared register |
| Occupancy | material + existing_occupancy | Avoids doubling | |

## Edge Cases

- Very wide material: may span multiple bands; split or assign to widest.
- Empty band: valid; not all bands need material.
