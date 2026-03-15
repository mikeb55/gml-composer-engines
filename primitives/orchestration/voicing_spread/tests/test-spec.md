# Test Spec: Voicing Spread

## Success Conditions

- Chord tones correctly spelled.
- Spacing matches spread (closed vs. open).
- bass_separation applied when true.

## Failure Conditions

- Wrong chord spelling.
- Impossible spread (e.g. open in 1 octave).
- Density exceeds available chord tones.

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| Closed | Cmaj7, spread: closed | Within octave | |
| Open | Cmaj7, spread: open | Wider spacing | |
| Density 3 | Cmaj7, density: 3 | 3 notes (root, 3, 7) | |
| Bass sep | any, bass_separation: true | Bass separate | |

## Edge Cases

- Diminished: 4 notes from dim7 chord.
- Altered: #9, b13 etc.; density may include or exclude.
