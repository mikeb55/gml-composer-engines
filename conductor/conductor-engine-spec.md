# Conductor Engine Specification

## Role

The Conductor Engine is not a style engine. It coordinates specialised engines. It does not generate melody, harmony, counterpoint, rhythm, or orchestration. It decides when to invoke which engine and how to combine their outputs.

## Responsibilities

| Responsibility | Description |
|----------------|-------------|
| Timing | When each engine runs; bar-level and phrase-level scheduling |
| Layering | How outputs combine (melody over harmony, counterpoint over bass) |
| Formal logic | Section boundaries, repeats, transitions |
| Density | Controlling activity level across the ensemble |
| Interaction | How engines influence each other (e.g. harmony informs orchestration) |
| Handoff | Passing material between engines (melody → counterpoint input) |

## Invariant

The Conductor never encodes style. It encodes coordination logic. Style lives in the engines.

## Example Stack

A full stack might assemble:

| Engine | Role |
|--------|------|
| Wayne Shorter | Melody, motivic development |
| Andrew Hill | Harmony, intervallic motion |
| Bach Counterpoint | Counterlines, suspensions |
| Stravinsky | Rhythm, accent displacement |
| Ellington | Orchestration, section colour |

The Conductor invokes these in sequence or parallel, merges outputs, and produces a coherent arrangement.

## Inputs

- Formal structure (sections, bar counts)
- Density targets
- Engine stack configuration
- Context (key, tempo, ensemble)

## Outputs

- Layered, coordinated material ready for rendering
- Timeline of engine invocations
- Handoff points and dependencies
