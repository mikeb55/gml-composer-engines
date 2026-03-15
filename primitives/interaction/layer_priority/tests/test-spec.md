# Layer Priority — Test Spec

## Success Conditions

- Higher-priority layer receives precedence when layers compete.
- Tie resolution applied when order does not distinguish.
- Output reflects single clear precedence.

## Failure Conditions

- Ambiguous: both layers treated as equal when one should dominate.
- Inversion: lower priority wins over higher.

## Test Cases

1. **Order [A,B]:** A and B compete → A wins.
2. **Tie resolution first:** A and B equal priority → first in order wins.
3. **Salience override:** When salience_target set, louder layer wins tie.
