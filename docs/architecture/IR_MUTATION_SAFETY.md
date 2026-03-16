# IR Mutation Safety and Pass Pipeline Architecture

**Version:** 0.1.0

---

## 1. Overview

### Purpose of IR Mutation Safety

The composition system uses a **compiler-style architecture** based on Song IR and Composition IR. Multiple modules and passes operate on IR objects—harmony, rhythm, counterpoint, orchestration.

If passes mutate the IR in uncontrolled ways, the engine becomes **unstable and non-deterministic**. Shared state corruption, hidden side effects, and unpredictable behaviour make debugging impossible and composition results unreproducible.

IR mutation safety exists to:

- Ensure **deterministic composition** (same inputs → same outputs)
- Prevent **shared-state corruption** between passes
- Enable **modular composer systems** that can be composed safely
- Support **debugging** via traceable transformation history
- Allow **safe hybrid composers** (e.g. Messiaen + Stravinsky + Bach) without cross-module mutation conflicts

### Why Uncontrolled Mutation Breaks Generative Systems

When a pass modifies its input IR in place:

1. **Downstream passes** receive corrupted or partially transformed data
2. **Repeated runs** with the same seed produce different results
3. **Pipeline order** becomes unpredictable (pass A may overwrite pass B's changes)
4. **Debugging** is impossible—no clear record of what changed when
5. **Composer modules** cannot be combined safely; they step on each other's state

---

## 2. Architectural Principle

### The Rule

**IR must be treated as immutable input → transformed output.**

No pass may modify the incoming IR object in place. Every pass receives IR, produces a new IR, and returns it.

### Transformation Model

```
IR₀ → pass₁ → IR₁ → pass₂ → IR₂ → pass₃ → IR₃
```

Each pass receives the output of the previous pass. The input is never mutated.

```
current_ir = initial_ir
for ir_pass in pipeline:
    current_ir = ir_pass.apply(current_ir)  # pass returns NEW ir
return current_ir
```

---

## 3. IRPass Interface

### Role of `composition_ir/ir_pass_interface.py`

This module defines the base interface for all IR transformation passes. Every pass must implement `IRPass` and its `apply()` method.

### Interface Definition

```python
class IRPass(ABC):
    name: str

    @abstractmethod
    def apply(self, ir):
        """
        Transform IR by returning a new IR instance.
        The input ir must not be modified.
        """
        raise NotImplementedError
```

### Key Requirement

`apply()` must return a **new IR object**. It must never mutate the input `ir`.

### Example Usage

```python
from composition_ir.ir_pass_interface import IRPass
from composition_ir.ir_utils import clone_ir

class MyHarmonyPass(IRPass):
    name = "my_harmony"

    def apply(self, ir):
        new_ir = clone_ir(ir)
        new_ir.harmony["processed"] = True
        return new_ir
```

---

## 4. Safe Cloning Rule

### Role of `composition_ir/ir_utils.py` and `clone_ir()`

The `clone_ir()` function performs a deep copy of the IR. Each pass must clone the input before modifying it, so the original remains untouched.

### Pattern

```python
def apply(self, ir):
    new_ir = clone_ir(ir)
    # modify new_ir only
    return new_ir
```

### Why Cloning Prevents Shared-State Corruption

- **Original preserved:** The caller and other passes never see the input change
- **Isolated modifications:** Each pass works on its own copy; no cross-pass interference
- **Deterministic:** Same input always produces the same output; no hidden state
- **Traceable:** The pipeline can log or inspect each transformation step without side effects

---

## 5. IR Pass Pipeline

### Role of `passes/ir_pass_pipeline.py`

The pipeline executes a sequence of passes in deterministic order. Each pass receives the output of the previous pass.

### Pipeline Concept

```python
current_ir = initial_ir
for ir_pass in pipeline:
    current_ir = ir_pass.apply(current_ir)
return current_ir
```

### Deterministic Execution

- Passes run in **registration order**
- Same `initial_ir` + same pipeline → same final IR
- No randomness in execution order; no hidden state between passes

### Usage

```python
from passes.ir_pass_pipeline import IRPassPipeline

pipeline = IRPassPipeline([
    MessiaenHarmonyPass(),
    StravinskyRhythmPass(),
    BachCounterpointPass(),
])
final_ir = pipeline.run(initial_ir)
```

---

## 6. Pass Registration Pattern

### How Composer Modules Register Passes

Composer modules **register passes** instead of mutating IR directly. The pipeline builder decides execution order.

| Module              | Registers              |
|---------------------|------------------------|
| messiaen_harmony    | Harmony-related passes |
| stravinsky_rhythm   | Rhythm-related passes  |
| bach_counterpoint   | Counterpoint passes    |

### Concept

```
messiaen_harmony  →  harmony pass
stravinsky_rhythm →  rhythm pass
bach_counterpoint →  counterpoint pass
```

The pipeline builder assembles passes from these modules. It does **not** hard-wire cross-module mutation logic. Each module contributes passes; the pipeline orchestrates them.

### Example

```python
def build_hybrid_pipeline():
    return IRPassPipeline([
        MessiaenHarmonyPass(),
        StravinskyRhythmPass(),
        BachCounterpointPass(),
    ])
```

---

## 7. Debugging Metadata

### Use of `ir.metadata["passes_applied"]`

Each pass can append its name to the output IR's metadata:

```python
new_ir.metadata["passes_applied"].append(self.name)
```

This records the **transformation history** for debugging and regression testing.

### Benefits

- **Traceability:** See which passes ran and in what order
- **Regression testing:** Verify pipeline configuration
- **Debugging:** Identify which pass produced unexpected output
- **Audit trail:** Full composition history on the IR object

### Important

Metadata is appended only to the **output** (the cloned IR), never to the input. The input IR remains unchanged.

---

## 8. Testing and Safety Guarantees

### Role of `tests/test_ir_pass_immutability.py`

These tests enforce the immutability and determinism guarantees.

### What the Tests Enforce

| Test | Guarantee |
|------|-----------|
| **Input IR unchanged** | Applying a pass does not modify the input IR |
| **Output differs when expected** | Passes that make changes produce different output |
| **Deterministic outputs** | Repeated runs with same inputs produce identical outputs |
| **Cloning works correctly** | `clone_ir()` produces an independent copy; modifying the clone does not affect the original |
| **Pipeline behaviour stable** | Pipeline order produces deterministic results; input unchanged after pipeline run |

### Running the Tests

```bash
npm run test:ir
# or
py -m pytest tests/test_ir_pass_immutability.py -v
```

---

## 9. Practical Example

### Example Pipeline: Messiaen → Stravinsky → Bach

```python
from passes.ir_pass_pipeline import IRPassPipeline
from composition_ir.ir_utils import CompositionIR

# Build pipeline
pipeline = IRPassPipeline([
    MessiaenHarmonyPass(),
    StravinskyRhythmPass(),
    BachCounterpointPass(),
])

# Run
initial_ir = CompositionIR(harmony={}, rhythm={}, counterpoint={})
final_ir = pipeline.run(initial_ir)

# initial_ir is unchanged
# final_ir has harmony, rhythm, counterpoint from each pass
# final_ir.metadata["passes_applied"] == ["messiaen_harmony", "stravinsky_rhythm", "bach_counterpoint"]
```

---

## 10. Why This Matters

### Benefits

| Benefit | Description |
|---------|-------------|
| **Deterministic composition** | Same seed + same pipeline → same output every time |
| **Modular composer systems** | Add or remove passes without breaking others |
| **Easier debugging** | Clear transformation history; no hidden state |
| **Safe hybrid composers** | Combine Messiaen, Stravinsky, Bach, etc. without cross-module mutation conflicts |
| **Scalable architecture** | New composers register passes; pipeline orchestrates; no tight coupling |

### Summary

IR mutation safety and the pass pipeline architecture provide a **clean, testable, and scalable** foundation for compositional systems. By treating IR as immutable and enforcing the clone-modify-return pattern, the system remains stable, deterministic, and easy to extend.
