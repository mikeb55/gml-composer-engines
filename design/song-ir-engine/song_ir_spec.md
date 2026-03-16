# Song IR Specification

**Version:** 0.1.0

---

## Overview

Song IR is a typed intermediate representation for songs. It is designed for **grammar-constrained generation** so that output is **valid by construction**. No repair-after-the-fact.

---

## Fields

### Core Identity

| Field | Type | Description |
|-------|------|-------------|
| **title** | string | Song title |
| **premise** | string | One-line premise or concept |
| **seed** | number | Deterministic seed for reproducibility |

---

### Form and Structure

| Field | Type | Description |
|-------|------|-------------|
| **form** | FormKind | e.g. verse_chorus, aaba, through_composed |
| **section_order** | SectionRef[] | Ordered list of section references (e.g. ["intro", "v1", "pc", "c", "v2", "c", "b", "c", "outro"]) |
| **section_roles** | Record<SectionId, SectionRole> | Role per section: setup, build, payoff, release, anchor |

---

### Hook and Motif

| Field | Type | Description |
|-------|------|-------------|
| **hook_dna** | HookDNA | Core hook: contour, rhythm_skeleton, syllable_count, stress_pattern |
| **motif_transforms** | MotifTransform[] | Transforms applied to hook across sections: compress, expand, invert, transpose |
| **title_placements** | number[] | Bar indices where title/hook appears |

---

### Lyric and Imagery

| Field | Type | Description |
|-------|------|-------------|
| **image_family** | string[] | Coherent image set (e.g. ["water", "shore", "tide"]) |
| **lyric_skeleton** | LyricSkeleton | Per-section: line_count, rhyme_scheme, syllable_targets |
| **lyric_density** | number | 0–1: sparse to dense |

---

### Harmonic and Contrast

| Field | Type | Description |
|-------|------|-------------|
| **harmonic_plan** | HarmonicPlan | Per-section: key, mode, chord_progression_template, tension_level |
| **contrast_arc** | ContrastArc | Emotional/tension arc: start, peak, release, end |
| **harmonic_adventurousness** | number | 0–1: diatonic to highly chromatic |

---

### Compilation Hints

| Field | Type | Description |
|-------|------|-------------|
| **export_hints** | ExportHints | Tempo, key, time_signature, vocal_range |
| **musicxml_constraints** | MusicXMLConstraints | Supported structures, section markers, lyric alignment rules |

---

## Grammar Constraints

The IR is generated via grammar-constrained decoding. Valid IR must satisfy:

1. **section_order** references only defined sections
2. **section_roles** covers every section in section_order
3. **hook_dna** has valid contour and rhythm_skeleton
4. **harmonic_plan** has valid progressions per section
5. **title_placements** fall within section boundaries
6. **motif_transforms** reference valid transform types

Invalid IR is never produced; the grammar rejects invalid tokens.

---

## Asymmetry Preservation

- **Do not** optimise phrasing to balance symmetry
- **Do not** force even phrase lengths
- **Preserve** asymmetric line lengths, irregular section lengths, uneven rhyme schemes
- **Allow** 3-line verses, 5-line choruses, 7-bar prechorus

---

## Relation to Section Compiler

The section compiler consumes Song IR and produces full songs. Each section type (verse, prechorus, chorus, bridge, final chorus payoff, outro) has a dedicated compiler that:

- Inherits **hook_dna** and applies **motif_transforms**
- Respects **section_roles** and **contrast_arc**
- Uses **harmonic_plan** for chord choice
- Preserves asymmetry from IR
