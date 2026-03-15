# Repo Test Plan

## Scope

- Validate folder structure
- Validate all spec files parse
- Validate internal references (primitives, engines) are consistent
- Run primitive test cases (when executable)
- Run engine test prompts (when executable)

## Primitive Validation Criteria

1. spec.yaml exists and is valid YAML
2. Required fields present: id, name, category, purpose, inputs, outputs
3. notes.md exists
4. At least one example exists
5. test-spec.md exists with success/failure conditions and test cases

## Engine Validation Criteria

1. spec.yaml exists and is valid YAML
2. Required fields present: id, name, category, purpose, primitives, outputs
3. All required primitives exist in primitives/
4. notes.md exists
5. At least one example exists
6. test-spec.md exists

## Terminology Consistency

- primitive (lowercase)
- engine (lowercase)
- conductor (lowercase)
- promotion (lowercase)
- validated (lowercase)

## Future

When executable test harness exists: run primitive test cases from test-spec.md; run engine test prompts; report pass/fail.
