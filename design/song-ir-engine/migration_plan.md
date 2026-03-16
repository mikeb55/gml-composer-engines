# Migration Plan from Current Runtime

**Version:** 0.1.0

---

## Current State (Assumed)

- Songwriting engine with scoring-helper architecture
- Repair-after-the-fact
- Phrasing optimisation, symmetry balancing
- No typed Song IR
- No MAP-Elites archive
- No grammar-constrained generation

---

## Migration Phases

### Phase 1: Song IR + Schema (Foundation)

**Goal:** Define and validate Song IR without changing runtime.

1. Implement `song_ir_schema.ts` in creative-engines
2. Add JSON schema validation for Song IR
3. Create mappers from current engine output → Song IR (one-way, for testing)
4. **No** replacement of generation yet

**Deliverables:** Schema, validation, example mappers

---

### Phase 2: Section Compiler (Deterministic Compilation)

**Goal:** Compile Song IR → full song.

1. Implement verse_compiler, chorus_compiler (minimal first)
2. Add prechorus, bridge, outro, final_chorus_payoff
3. Preserve asymmetry; no phrasing optimisation
4. Deterministic given IR + seed
5. Unit tests: IR in → song out; same IR → same song

**Deliverables:** Section compilers, compilation pipeline

---

### Phase 3: Grammar-Constrained IR Generation

**Goal:** Generate valid Song IR by construction.

1. Define grammar (e.g. JSON schema + constraints)
2. Implement grammar-constrained decoder (or constrained sampling)
3. Replace current IR generation with grammar-constrained path
4. Remove repair-after-the-fact for IR

**Deliverables:** Grammar, decoder, integration

---

### Phase 4: MAP-Elites Archive

**Goal:** Quality-diversity search.

1. Implement behaviour axis computation (hook_boldness, asymmetry, etc.)
2. Implement niche binning
3. Implement archive insert/query/coverage
4. Integrate with IR generation: generate → score → insert
5. Run until coverage target or budget

**Deliverables:** QD archive, integration with generation

---

### Phase 5: Finalist Selector

**Goal:** Finalist-only search.

1. Implement pairwise comparison
2. Implement reward-guided tree search (lightweight)
3. Implement premium editorial refinement
4. Integrate: archive → finalists → pairwise → tree search → refinement → best

**Deliverables:** Finalist pipeline

---

### Phase 6: MusicXML Contracts

**Goal:** Export/import contracts.

1. Implement export: compiled song + IR → MusicXML
2. Implement import: MusicXML → Song IR (partial)
3. Add validation, failure cases, warnings
4. Integrate with CandidateComposition for ecosystem

**Deliverables:** Export/import, validation

---

### Phase 7: Decommission Old Path

**Goal:** Remove scoring-helper architecture.

1. Switch default generation to Song IR pipeline
2. Deprecate old path
3. Remove phrasing optimisation, symmetry balancing
4. Update user guide

**Deliverables:** Clean codebase, docs

---

## Recommendation: What to Implement First

**Implement first in creative-engines:**

1. **Song IR schema** (`song_ir_schema.ts`) — TypeScript types, no runtime logic
2. **Section compiler (verse + chorus only)** — Minimal deterministic compiler
3. **End-to-end test** — Hardcoded Song IR → compile → output structure

This validates the core pipeline before grammar, QD, or finalist search. Once verse + chorus compile correctly, add remaining section types, then grammar-constrained generation, then QD archive.
