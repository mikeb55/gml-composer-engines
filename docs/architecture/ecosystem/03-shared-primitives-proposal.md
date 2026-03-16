# Shared Primitives Proposal

**Version:** 0.1.0  
**Layer:** gml-composer-engines (Layer 1)

---

## New Primitives to Add

### 1. expectation_violation

| Field | Description |
|-------|-------------|
| **pattern** | Expected pattern (melodic, harmonic, rhythmic) |
| **delay** | How long to delay before violation |
| **deviation** | Type and degree of deviation |
| **recovery** | How to return to expected path |

**Purpose:** Controlled surprise; listener expectation management.

---

### 2. motif_scale_transform

| Field | Description |
|-------|-------------|
| **compress** | Compress motif in time |
| **expand** | Expand motif in time |
| **stretch** | Stretch intervals |
| **condense** | Condense intervals |

**Purpose:** Motivic development; Beethoven-derived, jazz-derived.

---

### 3. energy_gradient

| Field | Description |
|-------|-------------|
| **start_level** | 0–1 |
| **peak_level** | 0–1 |
| **curve_shape** | linear, ramp, plateau, release |

**Purpose:** Energy arc; big-band climax spacing, release before peak.

---

### 4. constraint_field

**Includes:**

- melodic_range
- harmonic_language
- phrase_length
- motif_identity
- lyric_meter
- section_role
- vocal_target

**Purpose:** Declarative constraints; all engines respect.

---

### 5. novelty_field

**Evaluates:**

- interval_surprise
- harmonic_predictability
- motif_originality
- lyric_phrase_rarity
- rhythmic_originality

**Purpose:** Anti-cliché; novelty scoring without generation logic.

---

### 6. motif_economy_constraint

**Purpose:** Ensures limited core material is reused and developed. Max motifs; prefer development over addition.

---

## Elevation of Existing Primitives

- **handoff** → Add `handoff_event` to canonical output schema.
- **motif_fragment** → Add `fragment_spec` as canonical schema.
- **transform_*** → Add `transform_result` with provenance.
- **section_role_assignment** → Generalize role set; add `section_role` to constraint_field.
- **voice_independence** → Add `independence_score` to evaluation output.

---

## Primitive Categories (Updated)

| Category | Primitives |
|----------|------------|
| motivic | motif_fragment, motif_sequence, **motif_scale_transform**, **motif_economy_constraint** |
| phrase | phrase_asymmetry |
| harmony | delay_resolution |
| rhythm | accent_displacement |
| orchestration | register_layer, section_call_response, voicing_spread |
| transform | transform_fragment, transform_transposition, transform_rotation, transform_interval_map |
| interaction | handoff, layer_priority, activation_window, conflict_resolution |
| counterpoint | voice_independence, contrary_motion, oblique_motion, parallel_avoidance, suspension_chain |
| sectional-orchestration | section_role_assignment, brass_reed_contrast, background_figure, density_orchestration_map |
| contemporary-counterpoint | line_handoff, rhythmic_independence, register_interlock, dissonance_tolerance, intervallic_cell_counterpoint, phrase_overlap |
| guitar | register_partition, playability_constraint, dyad_density_control, string_set_preference |
| **surprise** | **expectation_violation** |
| **energy** | **energy_gradient** |
| **constraint** | **constraint_field** |
| **novelty** | **novelty_field** |
