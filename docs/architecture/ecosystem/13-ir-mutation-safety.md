# IR Mutation Safety — Architectural Guardrail

**Version:** 0.1.0  
**Scope:** Song IR, Composition IR, all passes (harmony, rhythm, counterpoint, orchestration)

---

## Context

The system uses a compiler-style architecture based on Song IR / Composition IR. Multiple modules and passes operate on IR objects.

If passes mutate the IR in uncontrolled ways, the engine becomes unstable and non-deterministic.

---

## Core Rule

**IR must be treated as immutable input → transformed output.**

No pass may modify the incoming IR object in place.

---

## What Every Pass Must Do

| Requirement | Description |
|-------------|-------------|
| **Accept IR as input** | Pass receives IR (or a subset) as a parameter |
| **Return new IR (or delta)** | Pass returns a new object; never mutates the input |
| **Preserve referential integrity** | If the pass does not change a field, it may reuse the same reference (structural sharing is allowed for unchanged subtrees) |
| **Be deterministic** | Same input + seed → same output |
| **Declare inputs and outputs** | Pass spec declares what it reads and what it produces |

---

## Pass Contract

```yaml
PassContract:
  name: string
  inputs:
    - ir: IR (immutable)
    - context: object (optional)
    - seed: number (optional)
  outputs:
    - transformed_ir: IR  # New object; input unchanged
  invariants:
    - input_ir_unchanged: boolean  # Must be true
    - deterministic: boolean       # Same inputs → same output
```

---

## Forbidden

| Forbidden | Why |
|-----------|-----|
| Mutating input IR in place | Breaks determinism; corrupts shared state |
| Mutating nested objects of input IR | Same as above |
| Reassigning input parameter then returning it | Still mutation; pass must construct new object |
| Side effects on IR (e.g. push to array on input) | Corrupts pipeline; non-deterministic |

---

## Allowed

| Allowed | Description |
|---------|-------------|
| **Structural sharing** | Reuse unchanged subtrees; do not deep-clone entire IR if only one field changes |
| **Return new root** | Construct new IR with transformed fields; reference unchanged subtrees |
| **Immutable updates** | e.g. `{ ...ir, harmony: transformHarmony(ir.harmony) }` — ir is never mutated |
| **Pure functions** | Pass is a pure function: (ir, context, seed) → new_ir |

---

## Pipeline Invariant

For a pipeline of passes P1, P2, P3:

```
ir0 → P1(ir0) → ir1
ir1 → P2(ir1) → ir2
ir2 → P3(ir2) → ir3
```

Each Pi receives ir(i-1) and returns iri. ir(i-1) is never modified. If any pass mutates its input, the entire pipeline is invalid.

---

## Enforcement

- **Code review:** All passes must be reviewed for in-place mutation
- **Tests:** See `tests/test_ir_pass_immutability.py` — run with `npm run test:ir` or `py -m pytest tests/test_ir_pass_immutability.py`
- **Implementation:** See `composition_ir/`, `passes/`, and `docs/architecture/IR_Pass_System.md`
- **Linting:** Consider lint rules that flag mutation of parameters (e.g. no-param-reassign, immutable data structures)
- **Documentation:** Every pass documents that it does not mutate input

---

## Applies To

- Song IR passes (harmony, rhythm, lyric, section compilation)
- Composition IR passes (counterpoint, orchestration, voicing)
- Any future IR types in the compiler-style architecture
