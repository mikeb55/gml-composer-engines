# Canonical Candidate Schema

**Version:** 0.1.0  
**Layer:** gml-composer-engines (Layer 1)

---

## CandidateComposition

All engines generate or map into this shared structure. Evaluation, repair, and export operate on this object.

```yaml
CandidateComposition:
  metadata:
    schema_version: "1.0"
    engine_source: string          # e.g. "jimmy_wyble_engine", "ellington_orchestration_engine"
    seed: number
    generated_at: iso8601
    primitive_pack_version: string
    rule_pack_version: string

  active_profiles: string[]       # e.g. ["classic", "ballad"]
  active_intelligence_layers: string[]
    # e.g. ["jazz_composer_intelligence_layer", "classical_songcraft_layer"]
  active_primitives: string[]     # e.g. ["voice_independence", "contrary_motion"]

  constraint_field:
    melodic_range: { min: number, max: number }
    harmonic_language: string
    phrase_length: number
    motif_identity: string[]
    lyric_meter: string
    section_role: string
    vocal_target: string

  sections:
    - name: string
      role: string
      start_bar: number
      length: number
      density: string
      lead_section: string
      support_section: string

  melody:
    events: []
    contour: []
    register: string

  harmony:
    chords: []
    implied_harmony: []
    progression: []

  lyrics: []                     # Optional; lyric-driven engines
  motifs: []
  groove: {}
  texture: {}
  accompaniment_hints: []

  evaluation_scores:
    melodic_identity: number
    prosody_correctness: number
    hook_strength: number
    # ... (see GCE framework)

  evaluation_breakdown: []

  warnings: []
  repair_history: []
  export_state: { ready: boolean, blocked_reason: string }
  export_ready: boolean
```

---

## Traceability

Every candidate preserves:

- **seed** — Reproducibility
- **profile_selection** — Which style profiles were active
- **intelligence_layer_selection** — Which layers influenced generation
- **primitive_activation** — Which primitives were applied
- **repair_steps_taken** — What was repaired and how
- **score_deltas** — Before/after repair scores
- **warnings** — First-class; failures and degradation reasons

---

## Mapping from Engine Outputs

| Engine | Maps to |
|--------|---------|
| Wyble | melody (upper_line, lower_line), harmony (implied_harmony), constraint_field (guitar) |
| Ellington | sections, texture, accompaniment_hints |
| Big Band Architecture | sections, constraint_field |
| Contemporary Counterpoint | melody (lines), harmony, texture |
| Arranger Assist | sections, accompaniment_hints |
| Selective Generation | melody, harmony, sections |

---

## Rules

- Evaluation modules must consume `CandidateComposition`.
- Repair modules must produce `CandidateComposition` (or delta).
- Exporters must consume `CandidateComposition`; no direct engine output.
- `export_ready` is false until evaluation passes threshold and export checks pass.
