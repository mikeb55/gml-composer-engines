# Architecture Overview

## Stack

```
Primitives → Engines → Conductor → Generated music
```

**Primitives** are atomic musical operations: motif extraction, phrase asymmetry, delay resolution, accent displacement, register layering, section dialogue, voicing spread. Transformation primitives (fragment, transposition, rotation, interval_map) provide reusable variation logic. Interaction primitives (handoff, layer_priority, activation_window, conflict_resolution) govern engine coordination. Each primitive has defined inputs, parameters, rules, and outputs.

**Engines** combine primitives into coherent style-specific behaviour. A Wayne Shorter engine uses motif_fragment, motif_sequence, phrase_asymmetry, delay_resolution. An Ellington orchestration engine uses register_layer, section_call_response, voicing_spread.

**Conductor** coordinates engines. It does not impose style; it handles timing, layering, formal logic, density, interaction, and handoff between engines. It decides when to invoke which engine and how outputs combine.

**Generated music** is the result: material that reflects the primitives and engines in the stack.

## Data Flow

1. Conductor receives formal and contextual input (section, bar range, density target, etc.).
2. Conductor selects and invokes engines in sequence or parallel.
3. Each engine applies its primitives according to its decision logic.
4. Engine outputs are merged, layered, or sequenced by the Conductor.
5. Final output is passed downstream for rendering.

## Separation of Concerns

- Primitives: no style knowledge; pure transformation. Transformation and interaction primitives are foundational layers beneath engines and conductor behaviour.
- Engines: style-specific; know when and how to apply primitives.
- Conductor: no style; knows how to coordinate engines. Conductor coordination depends on interaction primitives such as handoff, activation windows, and conflict resolution.
