# MusicXML Export/Import Contracts

**Version:** 0.1.0

---

## Supported Structures

| Structure | Description |
|-----------|-------------|
| **lead_sheet** | Melody staff + chord symbols + lyrics |
| **full_score** | Multiple staves (melody, piano, etc.) |
| **piano_vocal** | Piano + vocal |

---

## Required Tags

| Tag | Purpose |
|-----|---------|
| `<harmony>` | Chord symbols; must match actual harmony |
| `<rehearsal>` | Section markers (A, B, C, V1, C, etc.); boxed |
| `<lyric>` | Lyric syllables; syllabic or melismatic |
| `<direction>` | Section boundaries where needed |
| `<attributes>` | Divisions, key, time signature |

---

## Supported Rhythmic Forms

| Form | Beats | Beat type |
|------|-------|-----------|
| 4/4 | 4 | 4 |
| 3/4 | 3 | 4 |
| 6/8 | 6 | 8 |
| 2/4 | 2 | 4 |

---

## Section Markers

- Rehearsal letters at section boundaries: A, B, C, D, V1, V2, PC, C, B, FC, Outro
- Boxed format for Sibelius/ACE compatibility
- One marker per section start

---

## Lyric Alignment Rules

| Rule | Description |
|------|-------------|
| **syllabic** | One syllable per note (default) |
| **melismatic** | Multiple notes per syllable (e.g. melisma on "ah") |
| **hyphenation** | Hyphen between syllables of same word |
| **extend** | Extend syllable across tied notes |

---

## Melody Import Rules

| Rule | Description |
|-----|-------------|
| **pitch_duration** | Import pitch (step, alter, octave) and duration |
| **chord_symbol** | Import chord symbols as harmony context |
| **section_boundaries** | Use rehearsal marks to infer section boundaries |

---

## Harmony Annotation Expectations

| Expectation | Description |
|-------------|-------------|
| **above_staff** | Chord symbols above melody staff |
| **root_bass** | Root and optional bass (e.g. Cmaj7/E) |
| **measure_aligned** | Chord at start of measure or beat |

---

## Failure Cases

| Case | Response |
|------|----------|
| **empty_section** | Reject; do not export |
| **mismatched_lyric_syllables** | Block export; return warning; suggest repair |
| **chord_harmony_mismatch** | Block export; return warning |
| **missing_rehearsal_marks** | Block export; require section markers |
| **invalid_measure_duration** | Block export; fix or reject |
| **vocal_range_exceeded** | Warning; attempt octave repair or block |
| **unsupported_time_signature** | Reject; support only 4/4, 3/4, 6/8, 2/4 |

---

## Export Contract

```yaml
ExportContract:
  input: SongIR + compiled_song
  output: MusicXML string | null
  validation_passed: boolean
  warnings: string[]
  blocked_reason: string | null
```

---

## Import Contract

```yaml
ImportContract:
  input: MusicXML string
  output: { song_ir: SongIR | null, compiled_song: object | null }
  success: boolean
  warnings: string[]
  partial_import: boolean  # true if some sections could not be parsed
```
