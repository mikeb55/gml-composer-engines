# IR Pass System

**Version:** 0.1.0

---

## IR Immutability Rule

**IR must be treated as immutable input → transformed output.**

No pass may modify the incoming IR object in place.

Every pass must follow this pattern:

```
new_ir = pass(old_ir)
```

and return a new IR instance.

---

## Pass Pipeline Model

```
current_ir = initial_ir
for ir_pass in pipeline:
    current_ir = ir_pass.apply(current_ir)
return current_ir
```

- Each pass receives the output of the previous pass
- Each pass returns a new IR; it never mutates its input
- Transformation order is deterministic

---

## Safe Cloning Rule

Each pass must operate on a cloned IR, never the original input.

```python
def apply(self, ir):
    new_ir = clone_ir(ir)
    # modify new_ir only
    return new_ir
```

Use `clone_ir(ir)` from `composition_ir.ir_utils`. This performs a deep copy. The original `ir` is never modified.

---

## Deterministic Execution Order

- Pipeline executes passes in registration order
- Same inputs → same outputs
- No hidden state; no in-place mutation

---

## Debugging Metadata

Each pass may append trace metadata in a safe way:

```python
new_ir.metadata["passes_applied"].append(pass.name)
```

This records the transformation history for debugging and regression testing. Metadata is appended only to the **output** (the cloned IR), never to the input.

---

## Composer-Module Pass Registration Pattern

Composer modules register passes rather than directly editing IR:

| Module | Registers |
|--------|-----------|
| messiaen_harmony | Harmony-related passes |
| stravinsky_rhythm | Rhythm-related passes |
| bach_counterpoint | Counterpoint-related passes |

The pipeline builder decides execution order. Do not hard-wire cross-module mutation logic.

Example:

```python
def build_harmony_rhythm_pipeline():
    return IRPassPipeline([
        MessiaenHarmonyPass(),
        StravinskyRhythmPass(),
    ])
```

---

## IR Pass Interface

All passes implement:

```python
class IRPass(ABC):
    name: str

    @abstractmethod
    def apply(self, ir):
        """Return new IR. Never mutate input."""
        raise NotImplementedError
```

---

## Self-Check

Before merging, confirm that no in-place mutation path remains in the new pass flow:

- All passes use `clone_ir(ir)` at the start of `apply()`
- No pass modifies `ir` (the parameter); only `new_ir` (the clone)
- Tests verify input IR is unchanged after pass application
