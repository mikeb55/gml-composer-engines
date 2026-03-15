# Example: Bach Counterpoint Engine — 2-Voice Suspension

## Input

cantus_firmus_or_melody: C4–D4–E4–F4–G4 (quarter notes)
number_of_voices: 2
harmonic_context: C major

## Parameters

species: 1
dissonance_treatment: strict
suspension_preference: true

## Output (Conceptual — Pending Primitives)

Counterpoint (voice 2, above melody):
- Bar 1: E5 (consonant with C4)
- Bar 2: D5 (4–3 suspension: D5 over D4, resolves to C5)
- Bar 3: G5 (consonant with E4)
- Bar 4: F5 (4–3 suspension over F4)
- Bar 5: E5 (consonant with G4)

Voice leading: Stepwise where possible; suspensions prepared by same pitch in prior beat.

## Notes

Classic 4–3 suspension chain. Each suspension is prepared (same note as suspension), sustained (suspension on weak beat), resolved (down by step). Pending implementation of suspension_chain and voice_independence primitives. This example describes intended output.
