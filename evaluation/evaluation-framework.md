# Evaluation Framework

## Levels

**Primitive-level**: Does the primitive satisfy its spec? Inputs, parameters, rules, outputs. Success and failure conditions from spec.yaml. Tests are mechanical: given input X and parameters Y, output must match Z or satisfy guarantees.

**Engine-level**: Does the engine produce musically coherent output? Primitives are applied correctly; style constraints are met; output is playable and recognisable. Tests are more subjective: musical quality, style fidelity, coherence across primitives.

## Primitive Evaluation

- Run test cases from test-spec.md.
- Check success_conditions and failure_conditions from spec.yaml.
- Pass = all success conditions met; no failure conditions triggered.

## Engine Evaluation

- Run test_prompts from engine spec.
- Evaluate against success_conditions and failure_conditions.
- Additional: musical coherence, style recognisability, playability.
- May require human listening or structured rubric.

## Promotion Gate

Only validated material (primitives and engines that pass evaluation) should be promoted to creative-rule-engines. Draft and experimental status remain in this repo.
