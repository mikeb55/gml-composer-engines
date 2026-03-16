# Finalist-Only Search Design

**Version:** 0.1.0

---

## Objective

Lightweight final stage using:
- **Pairwise comparison**
- **Reward-guided tree search**
- **Premium editorial refinement**

Used **only on top finalists**, not the full search. Keeps cost low while improving the best candidates.

---

## Input

- **Pool**: Top N candidates from MAP-Elites archive (e.g. N = 5–10)
- **Selection**: By quality score (GCE composite) or by niche coverage + quality

---

## Stages

### 1. Finalist Selection

- From QD archive, take top N by quality score
- Or: take best from each of top M niches
- N is small (5–10) to keep finalist search cheap

### 2. Pairwise Comparison

- For each pair (A, B) among finalists:
  - Compare on dimensions: hook_strength, prosody, lyric_imagery, clarity
  - Produce preference: A > B, B > A, or tie
- Build preference graph
- Rank finalists by wins / transitive closure

### 3. Reward-Guided Tree Search

- Use pairwise preferences as reward signal
- Small tree search over **local edits** to top finalists:
  - Edit: change one word, one note, one chord
  - Reward: does edit improve pairwise preference?
- Depth limited (e.g. 2–3 steps)
- Branch factor limited (e.g. 5–10 edits per node)
- Only on top 2–3 finalists

### 4. Premium Editorial Refinement

- Apply targeted refinements to the single best candidate:
  - Prosody alignment pass
  - Lyric syllabification fix
  - Hook emphasis pass
  - Vocal range validation
- Deterministic; no search
- Output: final candidate ready for export

---

## When to Run

- **After** QD archive has been populated (e.g. 100–500 candidates)
- **Only on** top 5–10 finalists
- **Never** on full search space

---

## Cost Control

| Stage | Cost |
|-------|------|
| QD archive fill | O(archive_size) |
| Finalist selection | O(1) — just sort |
| Pairwise comparison | O(N²) — N small |
| Tree search | O(branch^depth) — branch, depth small |
| Editorial refinement | O(1) — single candidate |

---

## Output

- **Best candidate** (Song IR + compiled song)
- **Runner-up** (optional, for user choice)
- **Preference summary** (optional, for explainability)
