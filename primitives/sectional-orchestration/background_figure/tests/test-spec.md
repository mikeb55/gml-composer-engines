# Test Spec: Background Figure

## Success Conditions

- Figure is audible but subordinate to lead.
- Density within density_limit.
- No support-vs-competition violation (figure does not steal focus).
- Figure reinforces harmonic rhythm.

## Failure Conditions

- Figure competes with lead for focus.
- Density exceeds limit.
- Figure obscures or conflicts with lead material.
- Melodic content in figure rivals lead.

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| Ostinato | figure_style: ostinato, density_limit: 4 | 4 or fewer notes/bar | Support behaviour |
| Pad | figure_style: pad | Sustained, minimal rhythm | No competition |
| Hits | figure_style: hits | Short stabs, offbeat | Subordinate |
| Density | density_limit: 2 | Max 2 notes/bar | Role clarity |

## Edge Cases

- Lead rests: figure may fill but must not dominate.
- Dense lead: figure should simplify further.
- Empty harmonic context: reject or default.
