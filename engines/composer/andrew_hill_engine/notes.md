# Notes: Andrew Hill Engine

## Rationale

Hill's harmony: intervallic (3rds, 4ths, 6ths), non-functional, often ambiguous. Phrase structure is irregular. "Black Fire", "Point of Departure" exemplify. The engine captures intervallic logic and asymmetry.

## Design Decisions

- **phrase_asymmetry** with very high bias (0.8) — Hill's phrases are rarely square.
- **delay_resolution** — resolutions are often deferred or replaced with substitute harmony.
- **motif_fragment** — development through fragmentation rather than literal sequence; contour and interval matter.

## Primitive Usage

- phrase_asymmetry: 5+3, 7-bar, or irregular; avoid 4+4.
- delay_resolution: substitute dominant, or insert chord that obscures resolution.
- motif_fragment: extract head or contour; transpose by 3rd or 4th for intervallic coherence.

## Open Questions

- How to encode "intervallic preference" as rules? (Chord roots by 3rds, etc.)
- Pending: intervallic_harmony primitive for chord-to-chord movement.

## References

- Hill, "Black Fire", "Point of Departure", "Compulsion"
