# Transform Interval Map — Notes

## Rationale

Interval mapping supports serial, modal, and post-tonal techniques. Bach uses invertible counterpoint (interval inversion); Messiaen uses modes of limited transposition; Hill uses interval cells. The primitive maps through a profile; engines supply the profile.

## Design Choices

- **Interval profile:** Ordered list of semitones. Can be fixed (e.g. [0,4,7] for major triad) or transformational (e.g. [0,-5,7] for specific voice leading).
- **Anchor pitch:** Optional. When given, first event maps to anchor; profile applies from there.
- **Modulo octave:** For pitch-class space; useful in atonal or modal contexts.

## Future Considerations

- Inversion profile (negate intervals).
- Retrograde-interval combinations.
