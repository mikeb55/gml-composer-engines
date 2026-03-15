# Notes: Voicing Spread

## Rationale

Voicing spread determines clarity and colour. Closed voicings are dense; open voicings create space. Ellington and Gil Evans use spread to shape ensemble texture. The primitive controls spacing and density without encoding style-specific voicing rules.

## Design Decisions

- **spread**: closed (within octave), open (wider), mixed (varies by register).
- **density**: how many chord tones; 4 is standard for 4-way close.
- **bass_separation**: bass can be an octave or more below the rest; standard for big band.

## Open Questions

- Should spread support drop-2, drop-3 explicitly?
- How to handle extensions (9, 11, 13) in density?

## References

- Ellington, "Mood Indigo" (close brass voicings)
- Gil Evans, "Sketches of Spain" (open, orchestral spread)
