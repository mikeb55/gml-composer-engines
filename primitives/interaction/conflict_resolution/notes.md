# Conflict Resolution — Notes

## Rationale

When multiple engines output for the same register, beat, or voice, the Conductor must resolve the collision. Ad hoc logic leads to muddle or arbitrary choices. This primitive encodes explicit strategies.

## Design Choices

- **Strategies:** suppress_lower (priority wins), merge (combine if compatible), defer (yield to one engine), split (divide space).
- **Merge:** Only when outputs are compatible (e.g. different registers, non-overlapping beats). Merge of clashing material is invalid.
- **Defer:** Explicit handoff to one engine; others suppressed.

## Future Considerations

- Partial merge (merge melody, suppress harmony).
- Context-sensitive strategy (different resolution in verse vs chorus).
