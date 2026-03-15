# Notes: Contemporary Counterpoint Engine

## Rationale

This engine generates modern contrapuntal textures where harmony emerges from interacting lines rather than block chords. It targets guitar, chamber, and horn-section use cases with a modern jazz / contemporary classical leaning.

## How This Differs from Wyble

- **Wyble** is two-voice, guitar-specific, playability-constrained. It uses register_partition, playability_constraint, dyad_density_control, string_set_preference.
- **Contemporary Counterpoint** is 2–4 voices, not guitar-specific. It adds line_handoff, rhythmic_independence, register_interlock, dissonance_tolerance, intervallic_cell_counterpoint, phrase_overlap. No playability constraint by default.
- Wyble favours implied harmony from dyads; Contemporary Counterpoint allows more vertical dissonance and intervallic cell logic.

## How This Differs from Bach

- **Bach** is strict species counterpoint: consonance, resolution rules, parallel avoidance, suspension chains.
- **Contemporary Counterpoint** allows controlled dissonance (dissonance_tolerance), phrase overlap, line handoff, intervallic cells. It is not species-based.
- Bach avoids crossing; Contemporary Counterpoint allows crossing when register_interlock keeps texture clear.

## How It Can Feed Ellington / Big-Band Inner Voices

- The engine can generate 2–4 inner-voice lines for horn sections.
- line_handoff and phrase_overlap support sectional dialogue.
- register_interlock and register_separation_strength help assign lines to saxes, brass, etc.
- Output can feed density_orchestration_map, section_role_assignment, brass_reed_contrast in the Ellington stack.

## References

- Modern jazz counterpoint (Shorter, Hill)
- Contemporary classical line writing
- Big-band inner-voice orchestration
