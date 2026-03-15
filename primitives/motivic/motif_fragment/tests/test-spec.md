# Test Spec: Motif Fragment

## Success Conditions

- Fragment length is between 2 and motif length minus 1.
- At least one distinctive interval or contour feature from source is present.
- Output is a valid motif (non-empty, parseable).

## Failure Conditions

- Empty fragment.
- Fragment equals full motif when reduction was requested.
- preserve_identity not met when threshold is set.

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| Head | 4-note motif, head: true, end_index: 2 | 3-note fragment | First three events |
| Tail | 4-note motif, tail: true, start_index: 2 | 2-note fragment | Last two events |
| Slice | 5-note motif, start: 1, end: 4 | 3-note fragment | Middle portion |
| Contour | 4-note motif, contour_only: true | Contour-preserving fragment | Intervals may change |

## Edge Cases

- 2-note motif: fragment must be at least 2; head/tail may produce same as input.
- Very long motif: fragment_spec must produce valid slice.
