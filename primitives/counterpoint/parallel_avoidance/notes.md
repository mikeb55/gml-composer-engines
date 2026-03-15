# Notes: Parallel Avoidance

## Rationale

Parallel fifths and octaves weaken voice independence. Bach and classical counterpoint avoid them. The primitive detects and discourages them; stylistic exceptions (e.g. jazz) can relax the rule.

## Design Decisions

- strict_mode: when true, no exceptions. When false, occasional parallels allowed.
- Detection is interval-based: same direction, same interval class (P5, P8).

## References

- Fux, Gradus ad Parnassum
- Bach, chorales and inventions
