# Ecosystem Architecture

**Version:** 0.1.0

Shared compositional architecture for the GML ecosystem. Work at the primitive / architecture / evaluation / shared-model level first. Do not jump to runtime code.

---

## Documents

| # | Document | Description |
|---|----------|-------------|
| 01 | [Reuse Report](01-reuse-report.md) | Core primitives to elevate; engine-specific to keep local; shared evaluation patterns |
| 02 | [Canonical Candidate Schema](02-canonical-candidate-schema.md) | CandidateComposition; traceability; mapping from engines |
| 03 | [Shared Primitives Proposal](03-shared-primitives-proposal.md) | New primitives; expectation_violation, motif_scale_transform, energy_gradient, etc. |
| 04 | [Intelligence Layers Architecture](04-intelligence-layers-architecture.md) | listener_psychology, memory_hook, emotional_narrative, classical_songcraft, songwriting, jazz_composer |
| 05 | [GCE Evaluation Framework](05-gce-evaluation-framework.md) | Unified evaluation; pass/warning/fail; repair triggers |
| 06 | [Anti-Mush and Elegance Standards](06-anti-mush-and-elegance-standards.md) | Hard defaults; clarity metric; coding standards |
| 07 | [Freeze/Rewrite and Degradation](07-freeze-rewrite-and-degradation.md) | Freeze controls; graceful degradation; failure contracts |
| 08 | [Export Contracts](08-export-contracts.md) | MusicXML standards; engraving rules |
| 09 | [Compositional Laboratory](09-compositional-laboratory.md) | Multi-candidate testing; regression checks |
| 10 | [Architecture Diagram](10-architecture-diagram.md) | Three-layer flow; data flow |
| 11 | [Ecosystem Benefits](11-ecosystem-benefits.md) | How this helps current/future engines |
| 12 | [Portable Compositional Principles](12-portable-compositional-principles.md) | Wyble, Ellington, big-band, counterpoint principles |

---

## Layer Flow

```
creative-engines (Layer 3)
    → creative-rule-engines (Layer 2)
    → gml-composer-engines (Layer 1)
```

---

## Dependency Rules

- Primitives must never depend on engines
- Evaluation logic must not be buried inside each engine
- Export logic must not leak into generation logic
- Generation, evaluation, repair, and export remain distinct
