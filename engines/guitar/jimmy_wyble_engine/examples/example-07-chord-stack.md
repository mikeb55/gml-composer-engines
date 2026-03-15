# Example: Jimmy Wyble Engine — Chord-Stack-Derived Lines

## Harmonic Context

Cmaj7 for 4 bars. Chord stack: C E G B (root, 3, 5, 7)

## Chord-Tone Families (chord_stack_extraction)

- 5-root-3-7: G C E B
- root-5-7-3: C G B E
- root-7-3-5: C B E G
- root-7-9-11: C B D F
- root-3-7-9: C E B D

## Output (Conceptual)

**Upper line:** G4 E4 B4 C5 | E4 G4 B4 A4 | G4 E4 C4 B3 | C4 E4 G4 —

**Lower line:** C3 E3 G3 B3 | C3 G3 E3 C3 | E3 C3 G3 E3 | C3 — — —

## How It Works

- **2-note teams:** Upper/lower derived from pairs within chord stack: (G,C), (E,B), (B,E), (C,G).
- **Voice leading:** Root-5-7-3 and 5-root-3-7 inform smooth motion between chord tones.
- **Implied harmony:** Cmaj7 throughout. No block voicing; lines imply chord.
- **Independence:** Each line uses chord tones but with different rhythmic and contour logic.

## Notes

Wyble derives lines from chord stacks and two-note teams inside voicings. Informs generation and scoring.
