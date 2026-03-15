# Transform Fragment — Test Spec

## Success Conditions

- Fragment from 8-event source with length 4 yields 4 events.
- Contour of fragment matches corresponding segment of source.
- Output includes provenance reference to source.

## Failure Conditions

- Empty fragment when source has content.
- Fragment length exceeds source length.
- Single-event fragment when contour_preserve is true (degenerate).

## Test Cases

1. **Valid extraction:** 8-note phrase → fragment of first 4 notes → 4 events, contour preserved.
2. **Boundary alignment:** Bar-boundary fragment from 4-bar phrase → starts and ends on bar lines.
3. **Invalid length:** length 10 from 6-event source → fail or clamp with warning.
