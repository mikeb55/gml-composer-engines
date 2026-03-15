# Notes: Register Partition

## Rationale

Two-line guitar counterpoint needs clear register separation. Upper line in treble, lower in bass; crossing allowed briefly for musical effect. Wyble's method relies on this separation for clarity.

## Design Decisions

- Default ranges match typical guitar tessitura: upper E4–C6, lower E2–B3.
- crossing_tolerance allows brief overlap without violating the rule.
- Long periods in identical register obscure independence.
