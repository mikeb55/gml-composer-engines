# GML Composer Engines

Experimental design lab for the Conductor Engine Architecture (CEA) within the GML ecosystem. This repository is its own project; it sits upstream of `creative-rule-engines` and is the design lab, not a submodule or nested component of any other repo. Composition emerges from specialised engines coordinated by a Conductor Engine. Engines are built from reusable musical primitives.

## Ecosystem

| Repo | Role |
|------|------|
| gml-codex | Knowledge source: theory, style, reference material |
| gml-composer-engines | Research and design lab: primitives, engines, CEA |
| creative-rule-engines | Canonical stable rules: validated, promoted material |
| creative-engines | Runtime and execution: rule application |
| apps / generators | Downstream consumers: composition interfaces |

## Development Pipeline

1. **Design** — Define primitives and engines in this repo.
2. **Test** — Evaluate outputs against criteria; iterate.
3. **Validate** — Meet success conditions; document behaviour.
4. **Promote** — Move validated material to creative-rule-engines.
5. **Execute** — creative-engines applies rules at runtime.

## Engine Categories

- **Composer engines** — Melodic, motivic, phrase-level logic (e.g. Wayne Shorter, Andrew Hill).
- **Theory engines** — Harmonic, contrapuntal, formal logic (e.g. Bach counterpoint).
- **Arranging engines** — Orchestration, voicing, section layout (e.g. Ellington).
- **Rhythm engines** — Accent, metre, groove (e.g. Stravinsky).

## Development Philosophy

- **Rule systems** — Engines encode explicit, auditable rules.
- **Explainability** — Outputs traceable to primitives and parameters.
- **Modularity** — Primitives reusable across engines; engines composable.
- **Cross-genre capability** — Same primitives can serve jazz, classical, contemporary.

## Current Focus

- Jazz big band arranging.
- Beatrice relevance: motivic development, sectional dialogue, density growth.
- Wayne Shorter, Ellington, Bach, Stravinsky as reference styles.

## Long-term Vision

A Conductor Engine that assembles stacks of specialised engines (melody, harmony, counterpoint, rhythm, orchestration) into coherent compositions. Engines remain modular; style emerges from combination and parameterisation.

## Validation

The repo includes automated structural tests. Run `npm run validate` (or `npm test`) locally. CI runs validation on push and pull request via GitHub Actions. These checks validate folder structure, spec completeness, and terminology consistency. They do not validate musical quality or runtime behaviour.

## Next Steps

1. Validate primitive specs against real musical examples.
2. Implement engine decision logic in executable form.
3. Build evaluation harness for primitive and engine outputs.
4. Define promotion criteria for creative-rule-engines.
