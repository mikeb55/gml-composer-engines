# Handoff — Test Spec

## Success Conditions

- Material transferred to target engine.
- No gap when overlap_bars 0 and transition_type clean or dovetail.
- Target receives valid input format.

## Failure Conditions

- Gap at handoff when continuity required.
- Material type incompatible with target.
- Overlap exceeds section length.

## Test Cases

1. **Clean handoff:** Source ends bar 8; target starts bar 9; no overlap.
2. **Dovetail:** Source ends bar 8; target starts bar 8 with last phrase as input.
3. **Overlap 2 bars:** Source and target both active bars 7–8; verify no clash.
