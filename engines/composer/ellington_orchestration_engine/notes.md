# Notes: Ellington Orchestration Engine

## Rationale

Ellington's orchestration: distinct section colours, brass-reed dialogue, register clarity, and controlled density. "Mood Indigo", "Diminuendo and Crescendo in Blue", "Rockin' in Rhythm" exemplify. The engine applies register_layer, section_call_response, voicing_spread, and the sectional-orchestration primitives (section_role_assignment, brass_reed_contrast, background_figure, density_orchestration_map) to produce Ellington-style arrangements.

## Design Decisions

- **section_role_assignment** — Assigns lead, pad, background, counterline, punctuation, support. Ensures no role conflict.
- **brass_reed_contrast** — Colour (timbre), weight (dynamic mass), response (articulation). Preserves dialogue.
- **background_figure** — Ostinato, pad, hits. Density limits prevent competition with lead.
- **density_orchestration_map** — Sparse → medium → dense → tutti. Builds across phrases.
- **register_layer** — Melody in high band, backgrounds in mid, bass in low.
- **section_call_response** — Brass and reeds alternate; call-response builds momentum.
- **voicing_spread** — Open for tutti and sustained passages; closed for punches and stabs.

## Primitive Usage

- section_role_assignment: Lead to saxes or trumpets; pad to trombones; background to reeds; punctuation to brass.
- brass_reed_contrast: Brass punch vs. reed sustain; weight balance per phrase.
- background_figure: Reed ostinato behind brass lead; density_limit 4.
- density_orchestration_map: phrase_sequence → density_curve per phrase.
- register_layer: Melody high, backgrounds mid, bass low.
- section_call_response: Brass call, reeds response; or vice versa.
- voicing_spread: Open 4-way for saxes; closed for brass hits.

## Open Questions

- How to handle Ellington's use of solo instruments (e.g. muted trumpet) vs. section?
- Should engine support "jungle" style (dense, layered) vs. "sweet" (open, sparse)?

## References

- Ellington, "Mood Indigo", "Diminuendo and Crescendo in Blue", "Rockin' in Rhythm"
- Big band arranging: Thad Jones, Bob Brookmeyer
