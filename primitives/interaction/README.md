# Interaction Primitives

Govern how engines interact under the Conductor Engine Architecture. Define when engines enter, yield, overlap, dominate, or defer. Support future conductor contracts.

## Purpose

When the Conductor coordinates multiple engines, it needs explicit rules for:

- **Handoff** — Transfer material or responsibility from one engine/layer to another without breaking continuity.
- **Layer priority** — Which layer has precedence when simultaneous outputs compete for space or salience.
- **Activation window** — When an engine or layer is active within a section, phrase, or formal span.
- **Conflict resolution** — How to resolve collisions between simultaneous engine outputs.

## Why Essential

Without interaction primitives, conductor behaviour becomes ad hoc and hard to reason about. Handoff rules prevent abrupt cuts; activation windows prevent engines from firing at wrong moments; conflict resolution prevents overlapping material from clashing. These primitives are architectural: they define the contract between Conductor and engines.
