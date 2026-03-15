# Development Philosophy

## Principles

**Engines are rule systems.** Behaviour is explicit and auditable. No black-box magic.

**Explainability matters.** Outputs should be traceable to primitives, parameters, and rules. "Why did it do that?" should have an answer.

**Primitives should be reusable.** A motif_fragment primitive serves Wayne Shorter, Bach, and Stravinsky. Avoid duplicating low-level mechanics in each engine.

**Engines should be composable.** A stack of engines produces richer output than a single engine. The Conductor coordinates; engines stay focused.

**Style identity should not duplicate low-level mechanics.** Wayne Shorter and Andrew Hill both use phrase_asymmetry. Their engines differ in how they apply it, not in the primitive itself.

**Style engines should not duplicate generic transformation logic.** Fragment, transposition, rotation, and interval mapping are primitives. Engines apply them; they do not reimplement them.

**Conductor behaviour should not be hard-coded ad hoc when reusable interaction primitives can express the same logic.** Handoff, activation_window, layer_priority, and conflict_resolution exist to avoid scattered coordination code.

## Anti-patterns

- Monolithic engines that encode everything.
- Primitives that encode style.
- Opaque decision logic.
- Copy-paste of similar behaviour across engines.
