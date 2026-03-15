# Notes: Jimmy Wyble Engine

## What This Engine Is

A design-stage engine for two-line contrapuntal guitar writing in the spirit of Jimmy Wyble. Wyble's method: two independent melodic lines, harmonic implication through dyadic interaction, playable on solo guitar. This engine scaffolds that logic using the counterpoint primitive family.

## Why It Comes Before a Bach Engine

Wyble's approach is simpler and more applied: two voices, jazz harmony, guitar-specific constraints. Bach counterpoint is stricter (species, more voices, stricter dissonance). Building Wyble first validates the counterpoint primitives (voice_independence, contrary_motion, oblique_motion, parallel_avoidance) in a constrained, guitar-relevant context before applying them to full Bach-style counterpoint.

## How It Differs

**From generic chord-melody generation:** Chord-melody treats melody as foreground and chords as accompaniment. Wyble treats both lines as melody; harmony emerges from their interaction. No block voicings.

**From block voicing systems:** Block voicing stacks chord tones vertically. Wyble implies harmony through horizontal line movement and dyadic moments. Sparse vertical saturation.

**From strict species counterpoint:** Species counterpoint has rigid rules (e.g. one note per beat in species 1). Wyble allows jazz rhythm, chromaticism, and guitar-specific voice leading. More flexible, less formal.

## Why It Is Useful

- **Solo guitar etudes:** Two-line studies derived from EP repertoire or original material.
- **EP repertoire reduction:** Reduce piano or ensemble arrangements to two guitar lines that imply the harmony.
- **Polyphonic guitar writing:** Contrapuntal texture without falling into chord-melody cliché.

## Current Limitations

- No runtime implementation yet. This is a design-stage scaffold.
- Playability constraints (fretboard geometry, reach) need future primitive support.
- Not yet validated against real Wyble transcriptions or human evaluation.
- contemporary_counterpoint_engine and bach_counterpoint_engine are referenced but not yet defined.
