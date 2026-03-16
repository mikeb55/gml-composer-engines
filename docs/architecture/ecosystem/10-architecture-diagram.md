# Ecosystem Architecture Diagram

**Version:** 0.1.0

---

## Three-Layer Dependency Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  LAYER 1: gml-composer-engines                                               │
│  ─────────────────────────────────────────────────────────────────────────  │
│  • Pure compositional primitives                                            │
│  • Canonical candidate schema (CandidateComposition)                        │
│  • Shared intelligence layers (listener, memory, emotional, classical,      │
│    songwriting, jazz-composer)                                               │
│  • Shared evaluation framework (GCE)                                         │
│  • Shared export contracts                                                  │
│  • Anti-mush standards                                                      │
│  • Compositional laboratory framework                                       │
└─────────────────────────────────────────────────────────────────────────────┘
                                        │
                                        │ depends on
                                        ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  LAYER 2: creative-rule-engines                                            │
│  ─────────────────────────────────────────────────────────────────────────  │
│  • Style grammars                                                            │
│  • Profile maps                                                              │
│  • Engine-specific rule weighting                                           │
│  • Profile blends                                                            │
│  • Sophistication activation maps                                           │
└─────────────────────────────────────────────────────────────────────────────┘
                                        │
                                        │ depends on
                                        ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  LAYER 3: creative-engines                                                 │
│  ─────────────────────────────────────────────────────────────────────────  │
│  • Runtime generators                                                       │
│  • Repair loops                                                              │
│  • Exporters                                                                 │
│  • Desktop apps / launchers                                                  │
│  • User-facing workflows                                                    │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Data Flow

```
User Request
    │
    ▼
Conductor (coordinates; no style)
    │
    ├──► Engine A (e.g. Wyble)     ──► CandidateComposition (partial)
    ├──► Engine B (e.g. Ellington) ──► CandidateComposition (partial)
    └──► Engine C (e.g. Counterpoint) ──► CandidateComposition (partial)
    │
    ▼
Merge / Layer
    │
    ▼
CandidateComposition (full)
    │
    ├──► Evaluation (GCE)
    │         │
    │         ├── pass  ──► Export
    │         ├── warning ──► Repair
    │         └── fail ──► Block
    │
    └──► Export (MusicXML)
```

---

## Rules

- Primitives must never depend on engines
- Evaluation logic must not be buried inside each engine
- Export logic must not leak into generation logic
- Generation, evaluation, repair, and export remain distinct
