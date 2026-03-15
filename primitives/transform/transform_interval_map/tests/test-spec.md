# Transform Interval Map — Test Spec

## Success Conditions

- Each event mapped according to interval profile.
- Anchor pitch used as first output when specified.
- Modulo_octave yields correct pitch-class mapping when true.

## Failure Conditions

- Profile applied inconsistently across events.
- Anchor ignored when specified.
- Output intervals do not match profile.

## Test Cases

1. **Profile [0,4,7] from C4:** C4–E4–G4.
2. **Profile [0,4,7] anchor G3:** G3–B3–D4.
3. **Modulo octave:** Profile [0,12,24] with modulo_octave true → same as [0,0,0] in pitch-class space.
