# Ecosystem Reuse Report

**Version:** 0.1.0  
**Scope:** gml-composer-engines, creative-rule-engines, creative-engines

---

## 1. Core Primitives to Elevate and Standardize

| Primitive | Location | Rationale |
|-----------|----------|-----------|
| **handoff** | interaction | Already engine-agnostic; transfer material between layers. Elevate to canonical handoff contract. |
| **motif_fragment** | motivic | Extract/reuse motif parts. Core to development logic. Standardize fragment_spec schema. |
| **transform_fragment**, **transform_transposition**, **transform_rotation**, **transform_interval_map** | transform | Reusable variation logic. Pure functions. Elevate as canonical transform primitives. |
| **voice_independence**, **contrary_motion**, **oblique_motion**, **parallel_avoidance**, **suspension_chain** | counterpoint | Foundational for Bach, Wyble, Ellington, Contemporary. Standardize inputs/outputs. |
| **section_role_assignment** | sectional-orchestration | Section role clarity. Generalize beyond big band. |
| **layer_priority**, **activation_window**, **conflict_resolution** | interaction | Conductor coordination. Already shared. |
| **phrase_asymmetry** | phrase | Phrase-level structure. Reusable across styles. |
| **delay_resolution** | harmony | Tension/release. Reusable. |
| **accent_displacement** | rhythm | Rhythmic identity. Reusable. |
| **register_layer**, **voicing_spread** | orchestration | Register and voicing. Generalize. |

---

## 2. Engine-Specific Primitives to Keep Local

| Primitive | Engine | Rationale |
|-----------|--------|-----------|
| **register_partition**, **playability_constraint**, **dyad_density_control**, **string_set_preference** | Jimmy Wyble | Guitar-specific. Keep in guitar domain. |
| **brass_reed_contrast**, **background_figure**, **density_orchestration_map** | Ellington | Big-band sectional. Keep in sectional-orchestration. |
| **line_handoff**, **rhythmic_independence**, **register_interlock**, **dissonance_tolerance**, **intervallic_cell_counterpoint**, **phrase_overlap** | Contemporary Counterpoint | Modern counterpoint. Keep in contemporary-counterpoint family. |

---

## 3. Shared Evaluation Patterns Already Working Well

| Pattern | Location | Notes |
|---------|----------|-------|
| **GCE rubric (0–10)** | creative-engines/rules/gce_evaluation_framework.md | 10 categories, threshold 9.0. Reuse as base. |
| **Wyble 6-metric scoring** | wybleAutoTest.ts | voiceIndependence, contraryMotion, intervalQuality, harmonicClarity, playability, voiceLeading. Portable pattern. |
| **Ellington plan scoring** | ellingtonAutoTest.ts | sectionClarity, densityShape, contrastQuality, supportVsLead, orchestrationVariety. |
| **Architecture validation** | architectureValidation.ts | formClarity, sectionBalance, contrast, variety, orchestrationIntegration. |
| **Full-stack pipeline** | fullStackValidation.ts | architectureQuality, orchestrationPlausibility, arrangerUsefulness, noteGenerationPlausibility, musicXmlValidity. |
| **Seeded random** | Multiple generators | Deterministic reproducibility. Standard pattern. |
| **Success/failure conditions** | All spec.yaml | Declarative evaluation. Already in primitives. |

---

## 4. Architecture Patterns to Become Ecosystem Standards

| Pattern | Current State | Target |
|---------|---------------|--------|
| **Three-layer dependency** | Implicit | Explicit: creative-engines → creative-rule-engines → gml-composer-engines |
| **Conductor coordination** | Conductor spec exists | Conductor invokes engines; engines never invoke each other directly |
| **Primitive spec shape** | id, name, category, version, status, purpose, inputs, parameters, outputs, evaluation, tags | Add schema_version, guarantees, failure_contract |
| **Engine spec shape** | primitives, parameters, generation_pipeline | Add active_profiles, intelligence_layers, constraint_field |
| **Export separation** | Exporters in each engine | Exporters consume canonical candidate; no generation logic in export |
| **Promotion pipeline** | Design → Validate → Promote → Execute | Keep; add evaluation gate before promotion |
| **Engraving rules** | creative-engines/rules/engraving_rules.md | Elevate to shared contract; MusicXML structure |

---

## Summary

- **Reuse:** 20+ primitives ready to elevate. GCE rubric, Wyble/Ellington scoring patterns, seeded random, spec-based evaluation.
- **Keep local:** Guitar, sectional-orchestration, contemporary-counterpoint domain primitives.
- **Standardize:** Three-layer flow, canonical candidate schema, shared evaluation framework, export contracts.
