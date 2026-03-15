# Example: Ellington Orchestration Engine — Dm7 → G7 → Cmaj7 (8 Bars)

## Input

harmonic_context: Dm7 (2 bars) | G7 (2 bars) | Cmaj7 (4 bars)
melodic_material: Lead melody (bars 1–8)
ensemble_spec: sax_section, trumpet_section, trombone_section, rhythm_section

## Orchestration Behaviour (8 Bars)

### Bars 1–4
- **sax_section**: leads melody
- **trombone_section**: pad (sustained chord tones)
- **trumpet_section**: silent
- **rhythm_section**: support (piano comping, bass, drums)
- **density**: sparse
- **register**: melody high (saxes), pad mid (trombones)

### Bars 5–8
- **trumpet_section**: answers phrase (call-response; reeds led, brass answers)
- **sax_section**: background figure (ostinato)
- **trombone_section**: pad (sustained)
- **rhythm_section**: support, accents on phrase boundaries
- **density**: medium
- **register**: melody high (trumpets), background mid (saxes)

### Optional extension (bars 9–12)
- **brass**: shout (tutti brass)
- **rhythm_section**: accents
- **density**: dense / tutti

## Section Role Assignment

| Section | Bars 1–4 | Bars 5–8 |
|---------|----------|----------|
| sax_section | lead | background |
| trumpet_section | — | lead |
| trombone_section | pad | pad |
| rhythm_section | support | support |

## Brass/Reed Contrast

- Bars 1–4: Reeds (saxes) lead, sustain; brass silent.
- Bars 5–8: Brass (trumpets) answer, punch; reeds (saxes) background, sustain.
- Contrast: colour (reed vs. brass), weight (balanced), response (sustain vs. staccato).

## Output

- role_map: per phrase
- density_map: [sparse, medium] for 8 bars
- background_figure: sax ostinato bars 5–8
- register_assignment: melody high, pad mid
- section_timeline: call-response bars 5–8
