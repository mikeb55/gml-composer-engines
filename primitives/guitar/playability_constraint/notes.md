# Notes: Playability Constraint

## Rationale

Guitar has physical limits: hand span, string adjacency, position shifts. Two-line writing must respect these or the output is unperformable. This primitive flags or constrains impossible combinations.

## Design Decisions

- max_stretch: semitones (e.g. 5 = tritone) as rough hand-span limit.
- position_preference: favour one-position playability.
- Adjacent string movement reduces awkward jumps.
