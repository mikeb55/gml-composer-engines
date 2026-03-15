# Notes: Accent Displacement

## Rationale

Stravinsky, Bartók, and jazz rhythm sections use accent displacement to create metric tension. The beat is implied but accents land on offbeats or displaced subdivisions. The primitive shifts accent weight without changing the underlying metre.

## Design Decisions

- **shift_beats** and **shift_subdivision** allow precise control: e.g. shift by half-beat, or by one beat.
- **strength** scales the effect: subtle vs. aggressive.
- **target_beat** can force accent onto a specific beat (e.g. always on "and" of 2).

## Open Questions

- How to represent accent "weight" vs. binary accent/no-accent?
- Should displacement support polymetric patterns (e.g. 3 over 4)?

## References

- Stravinsky, *Rite of Spring* (block rhythm, displaced accents)
- Jazz comping (syncopated accents on 2 and 4, or "and" of 1)
