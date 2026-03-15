# Notes: Ellington Orchestration Engine

## Rationale

Ellington's orchestration: distinct section colours, brass-reed dialogue, register clarity. "Mood Indigo", "Diminuendo and Crescendo in Blue", "Rockin' in Rhythm" exemplify. The engine applies register_layer, section_call_response, and voicing_spread to produce Ellington-style arrangements.

## Design Decisions

- **register_layer** — Melody in high band, backgrounds in mid, bass in low. Clear separation.
- **section_call_response** — Brass and reeds alternate; call-response builds momentum.
- **voicing_spread** — Open for tutti and sustained passages; closed for punches and stabs.

## Primitive Usage

- register_layer: Assign melody to high (lead trumpet/alto), backgrounds to mid (2nd/3rd trumpets, saxes).
- section_call_response: Brass states figure, reeds answer; or vice versa.
- voicing_spread: Open 4-way for saxes; closed for brass hits.

## Open Questions

- How to handle Ellington's use of solo instruments (e.g. muted trumpet) vs. section?
- Should engine support "jungle" style (dense, layered) vs. "sweet" (open, sparse)?

## References

- Ellington, "Mood Indigo", "Diminuendo and Crescendo in Blue", "Rockin' in Rhythm"
- Big band arranging: Thad Jones, Bob Brookmeyer
