# Repo Test Plan

## Scope

- Structural validation (automated via `npm run validate`)
- Spec completeness validation
- Terminology consistency checks
- Future: musical validation, primitive/engine runtime tests

## Structural Validation

Automated by `scripts/validate-repo.js`. Checks:

- Required files and directories exist
- Primitive specs contain: id, name, category, version, status, purpose, inputs, parameters, outputs, evaluation, tags
- Engine specs contain: id, name, category, version, status, purpose, musical_scope, inputs, primitives, parameters, style_constraints, outputs, evaluation, tags
- Core docs contain: primitive, engine, conductor, promotion, validated
- No stale repo references (old repo name or URL)
- Conductor identity: "not a style engine" stated
- Examples: engine-stack-examples has ≥3 stacks; beatrice-big-band-stack has required phrases
- Every primitive/engine with spec.yaml has notes.md, examples/example-01.md, tests/test-spec.md

## Spec Completeness Validation

- spec.yaml exists and parses
- Required fields present per schema
- notes.md, examples, test-spec.md present

## Terminology Consistency

- primitive (lowercase)
- engine (lowercase)
- conductor (lowercase)
- promotion (lowercase)
- validated (lowercase)

## Future Musical Validation

- Primitive test cases from test-spec.md (executable)
- Engine test prompts (executable)
- Output quality evaluation
