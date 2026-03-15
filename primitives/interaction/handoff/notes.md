# Handoff — Notes

## Rationale

Section transitions, solo handoffs, and texture changes require clean transfer. The Conductor must know how to pass material from melody engine to counterpoint engine, or from one section to another. Ad hoc logic leads to gaps or clashes.

## Design Choices

- **Transition types:** clean (hard cut), overlap (crossfade), dovetail (one ends as other begins), echo (source continues briefly as target enters).
- **Overlap bars:** For overlap and dovetail; must fit within formal span.
- **Material type:** Melody, harmony, texture, etc. Target must accept it.

## Future Considerations

- Handoff chains (A→B→C).
- Conditional handoff (only if density threshold met).
