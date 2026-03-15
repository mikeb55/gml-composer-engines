# Promotion Pipeline

## Path

```
gml-composer-engines (research/design) — standalone repo, upstream of creative-rule-engines
    → creative-rule-engines (validated rules)
    → creative-engines (execution)
```

## Stages

**Research/design** — Primitives and engines are designed, specified, and tested in gml-composer-engines. Status: draft or experimental.

**Validation** — Outputs meet success conditions. Behaviour is documented. Edge cases are handled. Status: validated.

**Promotion** — Validated material is moved to creative-rule-engines. Specs, rules, and examples are canonicalised.

**Execution** — creative-engines loads rules from creative-rule-engines and applies them at runtime.

## Promotion Criteria

- Primitive or engine passes all defined tests.
- Success conditions are met; failure conditions are documented.
- No known regressions.
- Documentation is complete.
- Dependencies are resolved or explicitly deferred.

## What Stays Here

- Experimental primitives and engines.
- Work-in-progress specs.
- Evaluation frameworks.
- Design notes and rationale.

## What Moves

- Validated primitives and engines.
- Stable specs and rules.
- Proven examples.
