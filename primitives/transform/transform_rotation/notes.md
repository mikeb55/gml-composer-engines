# Transform Rotation — Notes

## Rationale

Cyclical rotation creates variation without inventing new material. Stravinsky rotates rhythmic cells; Messiaen rotates modes of limited transposition; jazz composers rotate phrase openings. The primitive is style-neutral: it defines the rotation mechanics.

## Design Choices

- **Unit:** event, beat, bar, contour_segment. Engines choose based on object type.
- **Direction:** forward (shift right) or backward (shift left). Both produce valid variations.
- **Identity:** Rotated object remains recognisable; it is the same material, reordered.

## Future Considerations

- Retrograde as a special case (rotation by length).
- Partial rotation (rotate only a segment).
