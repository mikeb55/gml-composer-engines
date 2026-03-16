# MusicXML / Export Contracts

**Version:** 0.1.0  
**Layer:** gml-composer-engines (Layer 1)

---

## Shared Export Standards

Exporters must consume canonical candidate structures. No generation logic in export.

### Must Support

- Clean lead-sheet structure
- Section labels (rehearsal letters)
- Correct lyric syllabification
- Melisma handling
- Tied-note lyric behaviour
- Vocal range validation
- Sibelius compatibility
- ACE Studio compatibility
- Readable import structure

---

## Engraving Rules (from creative-engines)

- Chord symbols above appropriate staff; reflect actual harmony
- Boxed rehearsal letters at section boundaries
- Sectional boundaries; clear structural transitions
- Correct measure durations
- Time signatures only when changed
- Readable rhythmic groupings
- Consistent articulations

---

## Reject Conditions

- Chord symbols contradict actual harmony
- Rehearsal marks missing
- Time signature in every measure
- Measure duration errors

---

## Export Contract

```yaml
ExportContract:
  input: CandidateComposition
  output: MusicXML string | null
  validation_passed: boolean
  warnings: string[]
  blocked_reason: string | null
```
