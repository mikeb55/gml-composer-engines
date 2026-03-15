# Test Spec: Motif Sequence

## Success Conditions

- All restatements are valid transpositions of the motif.
- Sequence length matches count in sequence_spec.
- Order is deterministic.

## Failure Conditions

- Invalid transposition (e.g. negative semitones beyond range).
- Empty sequence.
- Duplicate transpositions when distinct levels were requested.

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| Up | motif, direction: up, count: 3 | 3 ascending restatements | +2, +4, +6 or similar |
| Down | motif, direction: down, count: 2 | 2 descending restatements | -3, -6 or similar |
| Diatonic | motif, strict_diatonic: true, scale: C major | Transpositions on scale degrees | C, E, G only |
| Boundary | motif, boundary_constraint: max C6 | No pitch above C6 | Register limit |

## Edge Cases

- Single restatement (count: 1): output is one transposed motif.
- Very large count: may hit register boundary; last elements may be clipped or wrapped.
