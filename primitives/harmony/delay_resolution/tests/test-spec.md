# Test Spec: Delay Resolution

## Success Conditions

- Resolution occurs after the original expected point.
- Inserted/substituted harmony is coherent.
- max_delay is respected.

## Failure Conditions

- Resolution at original point (no delay applied).
- Unparseable or nonsensical progression.
- Delay exceeds max_delay.

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| Insertion | ii–V–I, insert G7 | ii–V–V/V–V–I | Secondary dominant |
| Substitution | ii–V–I, substitute V with bII | ii–bII–I | Tritone sub |
| Extension | ii–V–I, extend V by 1 bar | ii–V(2 bars)–I | Hold dominant |

## Edge Cases

- Modal: "resolution" may be return to tonic chord; delay = inserting another modal chord.
- Very short context: delay may not fit; output should truncate or warn.
