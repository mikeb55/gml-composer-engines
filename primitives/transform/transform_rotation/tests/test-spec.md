# Transform Rotation — Test Spec

## Success Conditions

- All events present after rotation; none lost or duplicated.
- Order reflects cyclical shift by offset.
- Forward rotation: last N units become first N.
- Backward rotation: first N units become last N.

## Failure Conditions

- Events missing or duplicated.
- Non-cyclical reordering.
- Offset exceeds length without wrapping (should wrap).

## Test Cases

1. **4-event forward offset 1:** [A,B,C,D] → [D,A,B,C].
2. **4-beat rhythm backward offset 2:** [x,.,x,.] → [x,.,x,.]
3. **Identity:** Rotate by full length → returns to original order.
