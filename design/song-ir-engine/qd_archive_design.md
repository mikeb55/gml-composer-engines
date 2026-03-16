# MAP-Elites Quality-Diversity Archive Design

**Version:** 0.1.0

---

## Objective

Keep **elites per niche** instead of one global winner. Quality-diversity (QD) search explores the behavioural space and maintains the best candidate in each niche.

---

## Behaviour Axes

| Axis | Range | Description |
|------|-------|-------------|
| **hook_boldness** | 0–1 | How bold/arresting the hook is (interval leap, rhythm surprise, placement) |
| **asymmetry** | 0–1 | Degree of asymmetry (phrase lengths, section lengths, rhyme irregularity) |
| **lyric_density** | 0–1 | Sparse to dense lyrics |
| **harmonic_adventurousness** | 0–1 | Diatonic to highly chromatic |
| **emotional_temperature** | 0–1 | Cool to hot (contrast_arc peak, tension_level) |

---

## Niche Definition

Each niche is a discrete bin in the multi-dimensional grid. Example:

- **hook_boldness**: [0–0.25], [0.25–0.5], [0.5–0.75], [0.75–1.0]
- **asymmetry**: [0–0.33], [0.33–0.66], [0.66–1.0]
- **lyric_density**: [0–0.5], [0.5–1.0]
- **harmonic_adventurousness**: [0–0.5], [0.5–1.0]
- **emotional_temperature**: [0–0.5], [0.5–1.0]

Total niches: 4 × 3 × 2 × 2 × 2 = 96 (configurable).

---

## Elite Selection

- Within each niche, keep the **single best** candidate by quality score (GCE or composite).
- When a new candidate falls in a niche:

  - If niche is empty → add
  - If niche has incumbent → replace only if new candidate has higher quality

- No global winner; diversity is preserved.

---

## Quality Score

- GCE composite (or subset) for songwriting:
  - melodic_identity
  - hook_strength
  - prosody_correctness
  - lyric_imagery
  - clarity_score
  - novelty_score

- Target: GCE ≥ 9.0 for export

---

## Archive Operations

| Operation | Description |
|-----------|-------------|
| **insert** | Add candidate; compute behaviour vector; bin to niche; replace if better |
| **query** | Return elite for niche; or all elites |
| **coverage** | Return fraction of niches filled |
| **sample** | Sample random filled niche for mutation/variation |

---

## Mutation and Variation

- Mutate IR: change one field (e.g. harmonic_adventurousness, section_order)
- Mutate within grammar constraints
- New candidate is placed in its niche; may displace incumbent

---

## Relation to Finalist Search

- QD archive produces a **pool of diverse elites**
- Finalist selector takes **top N by quality** from archive (or from niches meeting a threshold)
- Finalist-only search (pairwise, reward-guided tree search, editorial refinement) runs **only on those finalists**
