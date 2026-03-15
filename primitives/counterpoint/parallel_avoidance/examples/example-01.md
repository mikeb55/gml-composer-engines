# Example: Parallel Avoidance — Detection

## Input

Two voices moving simultaneously.

## Output (flagged)

Voice 1: C4 D4 E4
Voice 2: G4 A4 B4

## Notes

C–G (fifth) → D–A (fifth) → E–B (fifth). Parallel fifths detected. The primitive flags this. Expected: avoid by changing one voice (e.g. Voice 2: G4 F4 E4) or use contrary motion.

## Test Case

Two voices moving C→D and G→A simultaneously. Expected: Parallel fifth detected → flagged by parallel_avoidance.
