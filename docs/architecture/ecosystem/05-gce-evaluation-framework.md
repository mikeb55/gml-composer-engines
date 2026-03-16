# Unified GCE Evaluation Framework

**Version:** 0.1.0  
**Layer:** gml-composer-engines (Layer 1)

---

## Evaluation Categories (0–10 each)

| # | Category | Description |
|---|----------|-------------|
| 1 | melodic_identity | Distinct, memorable melodic material |
| 2 | prosody_correctness | Lyric–melody alignment (when applicable) |
| 3 | hook_strength | Memorability of hook |
| 4 | lyric_imagery | Lyric imagery quality (when applicable) |
| 5 | subtext_quality | Subtext quality (when applicable) |
| 6 | section_role_correctness | Section roles clear and correct |
| 7 | motif_development | Motifs evolve; transformation present |
| 8 | energy_arc_coherence | Energy arc coherent |
| 9 | export_readability | Score readable; structure clear |
| 10 | user_intent_match | Matches user request |
| 11 | clarity_score | Motif economy, density, section-role clarity |

| # | Category | Description |
|---|----------|-------------|
| 12 | listener_foothold | At least one clear listener anchor |
| 13 | memorability_retention | Memorability / retention |
| 14 | emotional_arc_coherence | Emotional arc coherent |
| 15 | novelty_score | Novelty; avoids cliché |
| 16 | vocal_suitability | Vocal range and style (when applicable) |
| 17 | harmonic_voice_leading_integrity | Voice leading and harmony |
| 18 | anti_cliche_scoring | Anti-cliché; distinctive choices |

---

## States

| State | Meaning |
|-------|---------|
| **pass** | Score ≥ threshold; no hard gates failed |
| **warning** | Score below threshold in some area; repairable |
| **fail** | Hard gate failed; cannot export |

---

## Hard Gates

- Harmonic-capable parts (guitar, piano) are monophonic with no harmonic role
- Excessive repetition (cell > 4 bars repeated > 2× without transformation)
- Harmonic stagnation
- Rhythmic identity unclear
- Orchestration lacks dialogue
- Score lacks sectional structure

---

## Repair Triggers

- **Targeted repair:** If weak in one area, repair that area rather than regenerate everything.
- **clarity_score:** If below threshold, trigger repair.
- **listener_foothold:** If missing, add or strengthen anchor.

---

## Mode-Specific Weighting

| Mode | Weighted categories |
|------|---------------------|
| instrumental | melodic_identity, motif_development, harmonic_voice_leading, energy_arc |
| vocal | prosody, hook_strength, lyric_imagery, vocal_suitability |
| orchestration | section_role_correctness, energy_arc, export_readability |
| counterpoint | voice_independence, harmonic_voice_leading, motif_development |

---

## Threshold

- **Minimum for export:** 9.0 (average or weighted)
- **Target:** 9.0–10.0
- **Regenerate if below:** Do not output. Diagnose. Revise. Re-evaluate.
