# Example: Andrew Hill Engine — 8-Bar Harmony and Phrase

## Input

harmonic_context: Cm7, Fm7, Abmaj7, Em7 (intervallic roots: C–F–Ab–E)
seed_material: 4-note motif (C–Eb–G–Bb)
phrase_length: 8

## Parameters

phrase_asymmetry_bias: 0.8
delay_resolution_bias: 0.7
intervallic_preference: [3, 4, 6]

## Output

Harmony (conceptual): Cm7 | Fm7 | Abmaj7 | Em7 | (delay) Bbm7 | Em7 | Abmaj7 | Cm7
- Roots move by 3rds and 4ths.
- Bar 5: Bbm7 inserted before expected return to Cm7 (delay_resolution).
- Final resolution to Cm7 deferred until bar 8.

Phrase structure: [5, 3] — 5-bar first phrase, 3-bar response.
Melody: Motif fragment (C–Eb–G) developed; intervallic leaps rather than scalar.

## Notes

Non-functional: no ii–V–I. Chord roots by 3rds (C–Eb–Ab) and 4ths (F–Bb–Eb). The delay inserts Bbm7 before the final Cm7. Phrase asymmetry (5+3) avoids squareness. Hill-style intervallic logic.
