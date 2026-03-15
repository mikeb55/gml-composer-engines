# Test Spec: Intervallic Cell Counterpoint

## Success Conditions

- Cells recur meaningfully
- Counterpoint coherent
- Intervallic logic present

## Failure Conditions

- Random intervals
- Purely chordal, no cells

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| Standard | Cell seed | Recurring cells | |
| High bias | intervallic_cell_bias 0.9 | Cell-driven | |
