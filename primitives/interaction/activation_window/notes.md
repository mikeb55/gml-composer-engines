# Activation Window — Notes

## Rationale

Engines should not run when they have nothing to contribute. A counterpoint engine may be active only in the B section; a rhythm engine only in the groove chorus. Activation windows tell the Conductor when to invoke each engine.

## Design Choices

- **Bar/beat range:** Absolute or phrase-relative. Phrase-relative allows reusable window specs (e.g. "first 4 bars of each phrase").
- **Exclusive end:** [start, end) so adjacent windows do not overlap unless intended.
- **Overlap rules:** When windows overlap, layer_priority or conflict_resolution applies.

## Future Considerations

- Conditional activation (if density > X, activate).
- Activation by event (activate on downbeat of chorus).
