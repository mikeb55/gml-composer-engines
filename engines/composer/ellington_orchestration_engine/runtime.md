# Runtime: Ellington Orchestration Engine

## Overview

The Ellington Orchestration Engine generates big-band section behaviour from harmonic input (lead sheet or progression). It uses seven primitives to orchestrate: section_role_assignment, brass_reed_contrast, background_figure, density_orchestration_map, register_layer, section_call_response, voicing_spread.

## Input

- **harmonic_context**: Chord progression (e.g. Dm7 | G7 | Cmaj7)
- **melodic_material**: Lead melody or phrase structure
- **phrase_length**: Optional; bars per phrase

## Generation Pipeline

1. **Parse harmonic context** — Extract chords, phrase boundaries, harmonic rhythm.

2. **Apply density_orchestration_map** — Map phrase_sequence to density_curve (sparse, medium, dense, tutti). Builds from sparse to dense across phrases.

3. **Apply section_role_assignment** — For each phrase, assign roles to sections:
   - lead: primary melodic material
   - pad: sustained harmony
   - background: supporting figures
   - punctuation: short hits
   - support: rhythmic reinforcement
   Ensure one lead per phrase; no role conflict.

4. **Apply brass_reed_contrast** — Set contrast (colour, weight, response) between brass and reeds. When both active, ensure audibly distinct.

5. **Apply background_figure** — For sections with background role, generate ostinato/hits/pad. Enforce density_limit so no competition with lead.

6. **Apply register_layer** — Assign melody to high band, backgrounds to mid band, bass to low. Clear separation.

7. **Apply section_call_response** — When density allows, alternate brass and reeds (call-response). Build momentum.

8. **Apply voicing_spread** — Open voicings for sustained passages; closed for punches. Respect ensemble tessitura.

## Output

- **role_map**: Section → role per phrase
- **density_map**: Phrase → density
- **contrast_spec**: Brass vs. reed contrast
- **section_timeline**: Which section plays when
- **register_assignment**: Melody/background/bass bands
- **voicings**: Per-section voicing specs

## Example Behaviour

- **Bars 1–4**: Saxes lead; trombones pad; trumpets silent; density sparse.
- **Bars 5–8**: Trumpets answer; saxes background figure; trombones pad; density medium.
- **Bars 9–12**: Brass shout; rhythm accents; density dense/tutti.

## Prototype Implementation

A runtime prototype would:
1. Parse harmonic input (JSON or similar).
2. Build phrase_sequence from phrase_length.
3. Call each primitive in order with appropriate inputs.
4. Aggregate outputs into orchestration plan.
5. Emit section_timeline, role_map, density_map, voicings for downstream rendering (e.g. MusicXML, Sibelius).
