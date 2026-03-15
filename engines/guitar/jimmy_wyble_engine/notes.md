# Notes: Jimmy Wyble Engine

## What the Wyble Engine Models

Jimmy Wyble's two-line improvisation method: two independent melodic voices on guitar, harmonic implication through dyadic interaction, playable linear texture. The engine models this by combining counterpoint primitives (voice independence, contrary/oblique motion, parallel avoidance) with guitar primitives (register partition, playability, dyad density, string set preference). No block voicings; harmony emerges from line interaction.

## How Two-Line Guitar Counterpoint Works

Two voices move horizontally. When they coincide, dyads form—intervals that imply harmony without full chords. Upper voice typically E4–C6, lower E2–B3. Contrary motion (one up, one down) and oblique motion (one static, one moving) create independence. Parallel fifths and octaves are avoided. Texture alternates: single-line motion, then dyad, then single-line. Guitar constraints: playable stretches, adjacent strings favoured, position shifts minimised.

## Generation Process Overview

1. **Motif or harmonic seed** — Establish context (chord progression or motif).
2. **Register partition assignment** — Assign voices to upper/lower zones.
3. **Counterpoint motion generation** — Generate two lines with voice_independence, contrary_motion, oblique_motion, parallel_avoidance.
4. **Dyad density management** — Apply line→dyad→line→dyad pattern; emphasise dyads at cadences.
5. **Guitar playability validation** — Check playability_constraint and string_set_preference; correct impossible stretches.
6. **Implied harmonic profile inference** — Output chord roots/qualities implied by dyadic events.

## Why This Engine Precedes the Bach Engine

Wyble is simpler: two voices, jazz harmony, guitar-specific. Bach counterpoint is stricter: species rules, more voices, stricter dissonance treatment. Building Wyble first validates the counterpoint and guitar primitives in a constrained, applied context before applying them to full Bach-style counterpoint.

## Wyble Source Concepts (Contrapuntal Concepts, Art of Two-Line Improvisation, Contrapuntal Scales and Arpeggios)

- **Pedal-tone technique:** Fixed or repeated lower-note pedal; upper voice moves above. Rhythmic displacement of upper against pedal.
- **Voice-ratio control:** Wyble explicitly uses 1:1, 2:1, 3:1 note ratios between voices. voice_ratio_mode parameter.
- **Chords as source:** Derive lines from chord stacks; extract 2-note teams from 4-note voicings (5-root-3-7, root-5-7-3, root-7-3-5, root-7-9-11, root-3-7-9).
- **Altered dominant / diminished:** Half-whole and whole-half diminished logic over altered dominants. b9, #9, b5, #5. altered_dominant_bias parameter.
- **Rhythmic displacement:** Syncopated attacks, anticipations, tied or delayed resolutions. Beyond even dyad alternation.
- **Staggered attacks:** Slight bass-before-upper feel. staggered_attack_feel option.
- **Right-hand / fingerstyle:** Thumb on lower voice; index/middle/ring on upper. Practical fingerstyle alternation (design heuristic).
- **Practice mode:** exercise = systematic patterning; etude = musical phrasing; improvisation = freer output.

## Current Limitations

- No runtime implementation. Design-stage specification only.
- Playability constraints (fretboard geometry, exact reach) need future refinement.
- Not validated against Wyble transcriptions or human evaluation.
- contemporary_counterpoint_engine and bach_counterpoint_engine referenced but not yet defined.
