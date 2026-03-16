# Intelligence Layers Architecture

**Version:** 0.1.0  
**Layer:** gml-composer-engines (Layer 1)

---

## Overview

Intelligence layers are **optional, composable modules** that influence generation, refinement, and evaluation. They are **not** engines. They provide style-capability primitives and heuristics.

---

## A. listener_psychology_layer

**Purpose:** Model how music is perceived by a listener.

| Primitive | Description |
|-----------|-------------|
| listener_attention_curve | Attention span and focus over time |
| expectation_memory | What listener expects next |
| familiarity_anchor | Recognisable reference points |
| release_satisfaction | Satisfaction from resolution |
| surprise_tolerance | How much surprise is acceptable |

---

## B. memory_hook_retention_layer

**Purpose:** Measure memorability and return strength.

| Primitive | Description |
|-----------|-------------|
| hook_retention_index | Strength of hook recall |
| recurrence_spacing | Optimal spacing for motif return |
| motif_recall_strength | How memorable a motif is |
| rhythmic_stickiness | Rhythmic memorability |
| title_memory_weight | Title–content association |

---

## C. emotional_narrative_arc_layer

**Purpose:** Track emotional movement across sections and whole forms.

| Primitive | Description |
|-----------|-------------|
| emotional_arc_map | Emotional trajectory |
| polarity_shift | Positive/negative movement |
| vulnerability_gradient | Exposure vs protection |
| distance_to_confession | Intimacy level |
| irony_sincerity_balance | Tone balance |

---

## D. classical_songcraft_layer

**Purpose:** Reusable classical compositional intelligence.

### Beethoven-derived

- beethoven_motivic_engine
- dramatic_arc
- idea_compression
- development_transform
- climax_engine
- structural_weight_map
- problem_resolution_cycle

### Mozart-derived

- melodic_conversation
- formal_balance
- singability_index
- supportive_harmony_model
- ornamentation_layer
- character_voice_mode

### Bach-derived

- bach_voice_logic
- counterpoint_interaction
- harmonic_gravity_field
- rhythmic_continuity

### Ellington-derived

- ellington_voice_character
- section_conversation
- texture_density_curve
- ellington_color_harmony

### Schubert / libretto / art-song derived

- prosody_alignment
- dramatic_climax_placement
- motivic_accompaniment_support
- emotional_harmony_mapping
- libretto_structure
- narrative_pivot_detection
- phrase_architecture_templates

---

## E. songwriting_intelligence_layer

**Purpose:** Lyric-driven composition, vocal writing, hooks, prosody.

**Default for:** Lyric/vocal engines.

| Module | Inspiration |
|--------|-------------|
| lyric_driven_composition | — |
| vocal_writing | — |
| hooks | McCartney, Bacharach, Brian Wilson |
| prosody | — |
| title_logic | — |
| verse_chorus_architecture | — |
| anti_cliche_filter | — |
| imagery_bank | — |
| hook_compression_test | — |
| self_simplification_pass | — |
| subtext_mode | — |
| title_driven_generation | — |
| reference_song_mode | — |
| freeze_controls | — |
| vocal_target_defaults | male_tenor_default, female_vocal_option |

**Style-capability modules (optional):** McCartney, Bacharach, Wilson, Smokey Robinson, Stevie Wonder, Prince, Fagen/Steely Dan, Randy Newman, Joni Mitchell, Leonard Cohen, Sondheim, Sonic Youth (experimental only).

---

## F. jazz_composer_intelligence_layer

**Purpose:** Instrumental and compositional jazz intelligence.

**Default for:** Jazz/instrumental engines.

**Do NOT merge with songwriting_intelligence_layer at base level.**

| Primitive | Description |
|-----------|-------------|
| motivic_development | — |
| phrase_rhetoric | — |
| harmonic_pacing | — |
| density_contrast | — |
| inside_outside_dosage | — |
| ensemble_dialogue | — |
| formal_arc | — |
| asymmetrical_phrase_logic | — |
| tension_resolution_dosage | — |

**Profile-capability modules:**

- **Metheny:** lyrical_arc, long_phrase_contour, spacious_formal_pacing, warm_harmonic_colour
- **Scofield:** groove_asymmetry, angular_motif_logic, blues_contamination, phrase_interruption

---

## Crossover Control

| Concept | Values |
|---------|--------|
| **cross_intelligence_mode** | off, light, medium, strong |
| **primary_layer** | Mandatory when both songwriting and jazz-composer active |
| **secondary_layer** | Mandatory when both active |

**Rule:** If both songwriting and jazz-composer layers are active, define `primary_layer` and `secondary_layer` to prevent mush.
