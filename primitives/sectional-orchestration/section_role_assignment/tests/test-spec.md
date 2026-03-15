# Test Spec: Section Role Assignment

## Success Conditions

- Every section receives exactly one role.
- Lead is unique per phrase.
- Role clarity: no ambiguity about which section carries primary material.
- Support sections do not compete with lead for focus.

## Failure Conditions

- Unassigned section.
- Two sections assigned lead.
- Background or support section playing material that competes with lead.

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| Single lead | reeds lead, others varied | One lead, others pad/background/support | Role clarity |
| Punctuation | brass punctuation | Short hits only | No sustained competition |
| Counterline | trombones counterline | Secondary line, subservient to lead | Support vs. competition |
| Full assignment | 4 sections | 4 roles, 1 lead | No unassigned |

## Edge Cases

- All sections pad: invalid (no lead).
- Lead and counterline: both foreground but counterline subordinate.
- Empty sections list: reject or default.
