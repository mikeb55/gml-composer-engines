# Transform Transposition — Notes

## Rationale

Transposition is universal: Shorter restates motives at different pitch levels; Bach transposes subjects; Hill uses intervallic transposition for harmonic colour. The primitive handles the mechanics; engines decide when and where to apply it.

## Design Choices

- **Contour preserve:** Default true. Engines can override for inversion or other treatments.
- **Diatonic vs chromatic:** Diatonic respects scale; chromatic preserves interval classes. Both are useful.
- **Target pitch:** Optional anchor (e.g. "start on G4") for engines that need specific registral placement.

## Future Considerations

- Inversion as a variant (contour_preserve false, interval negation).
- Retrograde-transposition combinations.
