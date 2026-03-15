# GCE Alignment

## Relation to GCE

GCE (Generative Composition Evaluation) refers to quality evaluation of generated music. This repo's evaluation framework aligns with GCE principles:

- **Explainability**: Outputs traceable to primitives and parameters.
- **Consistency**: Same inputs and parameters produce consistent outputs (where deterministic).
- **Style fidelity**: Engine output reflects intended style (Shorter, Ellington, etc.).
- **Playability**: Output is performable by human or synthesiser.

## Why Only Validated Material Promotes

creative-rule-engines holds canonical rules. Promoted material must be validated: tested, documented, and meeting success conditions. Unvalidated material stays in this design lab. This prevents unstable or broken rules from reaching downstream consumers (creative-engines, apps).

## Evaluation Before Promotion

1. Primitive: All test cases pass; success conditions met.
2. Engine: All test prompts produce coherent output; success conditions met.
3. Documentation: notes.md and examples complete.
4. Dependencies: Resolved or explicitly deferred.
