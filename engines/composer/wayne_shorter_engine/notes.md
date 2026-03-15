# Notes: Wayne Shorter Engine

## Rationale

Shorter's compositional voice: motivic economy, modal ambiguity, delayed resolution, asymmetric phrasing. "Footprints", "Nefertiti", "Speak No Evil" exemplify this. The engine captures these traits through primitives.

## Design Decisions

- **motif_fragment** and **motif_sequence** handle development; engine chooses when to fragment vs. sequence based on context.
- **phrase_asymmetry** with high bias (0.7) enforces non-square phrasing.
- **delay_resolution** applied at cadence points; engine selects insertion or extension strategy.

## Primitive Usage

- motif_fragment: extract head or tail for variation; contour_only for modal abstraction.
- motif_sequence: transposition by 3rds or 4ths for modal continuity.
- phrase_asymmetry: 3+3+2, 5+3, or 7-bar phrases.
- delay_resolution: insert V/V or substitute dominant before tonic.

## Open Questions

- How to parameterise "modal ambiguity" (scale choice, avoidance of leading tone)?
- Should engine output harmonic suggestions or only melody?

## References

- Shorter, "Footprints", "Nefertiti", "Speak No Evil", "Infant Eyes"
