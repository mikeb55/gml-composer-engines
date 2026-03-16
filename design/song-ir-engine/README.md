# Song IR Engine — Design Package

**Version:** 0.1.0  
**Status:** Design only — no runtime implementation yet

---

## Objective

Radical replacement architecture for the songwriting engine based on:

1. **Typed Song IR** — Intermediate representation for songs; grammar-constrained generation
2. **MAP-Elites quality-diversity archive** — Keep elites per niche, not one global winner
3. **Deterministic section compiler** — IR → full song; sections inherit hook DNA and role contracts
4. **Finalist-only search** — Pairwise comparison, reward-guided tree search, editorial refinement on top finalists only

---

## Design Principles

- **Valid by construction** — Grammar-constrained decoding; no repair-after-the-fact
- **Preserve asymmetry** — Do not optimise phrasing or balance symmetry
- **Testable** — Each stage (IR generation, compilation, export) is independently testable
- **GCE ≥ 9 target** — Architecture designed to raise quality to GCE threshold

---

## Documents

| File | Description |
|------|-------------|
| [song_ir_spec.md](song_ir_spec.md) | Song IR specification and field definitions |
| [song_ir_schema.ts](song_ir_schema.ts) | TypeScript schema for Song IR |
| [song_ir_examples.json](song_ir_examples.json) | Example Song IR instances |
| [qd_archive_design.md](qd_archive_design.md) | MAP-Elites quality-diversity archive design |
| [section_compiler_design.md](section_compiler_design.md) | Deterministic section compiler design |
| [finalist_selector_design.md](finalist_selector_design.md) | Finalist-only search design |
| [musicxml_contracts.md](musicxml_contracts.md) | MusicXML export/import contracts |
| [migration_plan.md](migration_plan.md) | Migration from current runtime |

---

## Future User Guide Planning

The design anticipates a user guide with at least 20 practical examples:

- **Lyrics-only examples** — Generate from lyric input
- **Song-from-title examples** — Title-driven generation
- **Hook-first examples** — Hook DNA → full song
- **MusicXML import/export examples** — Round-trip, import harmony, export lead sheet
- **Form variations** — Verse-chorus, AABA, through-composed
- **Genre presets** — Pop, ballad, rock, folk
- **Constraint examples** — Vocal range, harmonic language, section count

---

## Relation to Ecosystem

- Song IR maps to **CandidateComposition** for evaluation and export
- Uses **songwriting_intelligence_layer** (from ecosystem architecture)
- Export follows **MusicXML contracts** (docs/architecture/ecosystem/08-export-contracts.md)
