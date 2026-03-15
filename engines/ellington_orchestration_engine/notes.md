# Notes: Ellington Orchestration Engine

## Rationale

Ellington's orchestration: distinct section colours, brass-reed dialogue, register clarity, and controlled density. The engine applies section_role_assignment, brass_reed_contrast, background_figure, density_orchestration_map, register_layer, section_call_response, and voicing_spread to produce Ellington-style arrangements.

## Sections

- **sax_section** — Reeds; lead or background
- **trumpet_section** — Brass; lead or punctuation
- **trombone_section** — Brass; pad or support
- **rhythm_section** — Piano, guitar, bass, drums; support

## Primitive Usage

- **section_role_assignment** — Assigns lead, pad, background, punctuation, support. Ensures no role conflict.
- **brass_reed_contrast** — Colour (timbre), weight (dynamic mass), response (articulation). Preserves dialogue.
- **background_figure** — Ostinato, pad, hits. Density limits prevent competition with lead.
- **density_orchestration_map** — Sparse → medium → dense → tutti. Builds across phrases.
- **register_layer** — Melody in high band, backgrounds in mid, bass in low.
- **section_call_response** — Brass and reeds alternate; call-response builds momentum.
- **voicing_spread** — Open for tutti and sustained passages; closed for punches and stabs.

## Behaviour

Given harmonic input, the engine determines:

- which section leads
- which section answers
- when background figures appear
- when density increases
- when tutti occurs

## References

- Ellington, "Mood Indigo", "Diminuendo and Crescendo in Blue", "Rockin' in Rhythm"
- Big band arranging: Thad Jones, Bob Brookmeyer
