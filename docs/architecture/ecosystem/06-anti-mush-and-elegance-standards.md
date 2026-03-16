# Anti-Mush and Elegance Standards

**Version:** 0.1.0  
**Scope:** Ecosystem-wide

---

## Anti-Mush Safeguards

### Hard Ecosystem Defaults

| Parameter | Default |
|-----------|---------|
| max_active_style_modules | 2 |
| max_core_motifs | 3 |
| max_major_surprises | 3 per piece or song |
| max_simultaneous_layers | 4 (unless explicitly overridden) |

**Principle:** Prefer development of existing material over addition of new material.

---

### Section and Anchor Rules

- Each section must have a defined role.
- Each output must preserve at least one clear listener anchor:
  - rhythmic
  - melodic
  - lyrical
  - bass
  - textural

---

### Clarity Metric

**clarity_score** based on:

- motif economy
- harmonic density
- rhythmic density
- section-role clarity
- listener anchor strength

If clarity_score is below threshold, trigger repair.

---

## Coding Elegance Standards

| Standard | Description |
|----------|-------------|
| pure_function_bias | Prefer pure functions wherever practical |
| strict_data_contracts | Data contracts between stages |
| declarative_rule_tables | Rule tables over large conditional branching |
| deterministic_seeds | Reproducibility for every candidate |
| traceable_decision_history | Every candidate preserves decision history |
| targeted_repair | Repair specific areas rather than blind regeneration |
| graceful_degradation | Degrade gracefully when requests are impossible |
| warnings_as_first_class | Warnings as first-class objects |
| versioning | Version primitive packs, rule packs, schema, evaluation weights |

---

## Candidate Traceability

Every candidate must preserve:

- seed
- profile selection
- intelligence layer selection
- primitive activation
- repair steps taken
- score deltas
- warnings and failures
