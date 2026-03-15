# Notes: Brass Reed Contrast

## Rationale

Big-band texture relies on brass-reed contrast. Ellington exploited muted brass vs. open reeds, staccato brass vs. legato reeds, and dynamic weight (brass heavy in shout choruses, reeds dominant in ballads). This primitive encodes contrast behaviour so the engine can apply appropriate voicing and articulation.

## Design Decisions

- **colour** — Timbre: muted brass vs. open reeds; cup vs. straight mute.
- **weight** — Dynamic mass: brass can overpower reeds; balance is style-dependent.
- **response** — Articulation/attack: staccato vs. sustained; punch vs. swell.

## Open Questions

- Should contrast be phrase-level or bar-level?
- How to encode Ellington's specific mute choices?

## References

- Ellington, "Rockin' in Rhythm" (brass punch, reed sustain)
- Basie, "April in Paris" (brass-reed dialogue with clear contrast)
