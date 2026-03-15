# Primitives

Reusable musical operations. Primitives are atomic: they do one thing. Engines combine primitives into style-specific behaviour.

Categories: motivic, phrase, harmony, rhythm, orchestration, sectional-orchestration, transform, interaction, counterpoint, guitar.

- **sectional-orchestration** — section_role_assignment, brass_reed_contrast, background_figure, density_orchestration_map. Big-band sectional roles, contrast, and density for Ellington-style orchestration.
- **transform** — Fragment, transposition, rotation, interval_map. Reusable variation logic.
- **interaction** — Handoff, layer_priority, activation_window, conflict_resolution. Engine coordination under the Conductor.
- **counterpoint** — voice_independence, contrary_motion, oblique_motion, parallel_avoidance, suspension_chain. Foundational primitives for Bach, Wyble, Ellington counterlines.
- **contemporary-counterpoint** — line_handoff, rhythmic_independence, register_interlock, dissonance_tolerance, intervallic_cell_counterpoint, phrase_overlap. Modern contrapuntal textures for jazz, chamber, and big-band inner voices.
- **guitar** — register_partition, playability_constraint, dyad_density_control, string_set_preference. Guitar-specific constraints for playable two-line counterpoint.

Each primitive has spec.yaml, notes.md, examples, and tests.
