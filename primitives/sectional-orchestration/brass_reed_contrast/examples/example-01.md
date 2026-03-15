# Example: Brass Reed Contrast — Shout Chorus

## Input

brass_section: trumpets, trombones
reed_section: saxes
phrase_context: 8-bar shout chorus, tutti with brass lead

## Parameters

contrast_mode: weight
weight_balance: brass_heavy

## Output

contrast_spec:
  brass: { weight: heavy, articulation: staccato, role: lead }
  reeds: { weight: light, articulation: sustained, role: pad }

## Notes

Shout chorus: brass carries the punch; reeds provide pad. Weight contrast ensures brass dominates. Big-band specific: brass heavy in shout is idiomatic. Reeds support without competing.
