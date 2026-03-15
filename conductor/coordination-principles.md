# Coordination Principles

## Stack Assembly

The Conductor can assemble stacks such as:

- **Wayne Shorter** → melody
- **Andrew Hill** → harmony
- **Bach** → counterpoint
- **Stravinsky** → rhythm
- **Ellington** → orchestration

Order and layering are configurable. Melody engine runs first; harmony engine receives formal context; counterpoint engine receives melody as input; rhythm engine may run in parallel; orchestration engine receives all prior outputs.

## Handoff Rules

1. **Melody → Counterpoint**: Melody engine output becomes cantus_firmus for Bach engine.
2. **Harmony → Orchestration**: Harmony engine output informs voicing_spread and register_layer.
3. **Rhythm → All**: Stravinsky engine output can influence accent placement in melody, backgrounds, and counterpoint.

## Density Control

The Conductor adjusts density by:
- Reducing or expanding engine output (fewer notes, more rests)
- Selecting which engines run in a given section
- Controlling section_call_response alternation rate

## Formal Logic

- Section boundaries trigger engine re-invocation or parameter change.
- Repeats may reuse prior output or vary (engine-dependent).
- Transitions may blend engines (e.g. fade from Shorter to Hill harmony).
