# Example: Wayne Shorter Engine — 8-Bar Melody

## Input

seed_motif: D4–F4–A4–G4 (quarter notes)
harmonic_context: Cm7 (Dorian) for 8 bars
phrase_length: 8

## Parameters

motivic_development: fragment_bias 0.6, sequence_bias 0.4
phrase_asymmetry_bias: 0.7
delay_resolution_bias: 0.6

## Output

Melody (conceptual):
- Bars 1–3: Motif stated (D–F–A–G)
- Bars 4–6: Fragment (D–F–A) sequenced up a 4th to G–Bb–D
- Bars 7–8: Compressed tail (2-bar phrase asymmetry); delayed resolution — melody avoids C, holds on A or G

Phrase structure: [3, 3, 2]
Harmonic suggestion: Delay tonic arrival; insert F7 or Bb7 before Cm7 in bar 8.

## Notes

Classic Shorter development: statement, sequence, compressed close. The 3+3+2 grouping avoids squareness. The delayed resolution keeps modal ambiguity. Fragment and sequence create continuity without literal repetition.
