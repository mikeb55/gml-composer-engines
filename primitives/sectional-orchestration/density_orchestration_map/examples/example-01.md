# Example: Density Orchestration Map — 32-Bar Chorus Build

## Input

phrase_sequence: [A1, A2, B, A3] (8+8+8+8 bars)
section_spec: [trumpets, trombones, reeds, rhythm]

## Parameters

density_curve: [sparse, medium, dense, tutti]
max_density: 4

## Output

density_map:
  A1: sparse (rhythm + reeds)
  A2: medium (rhythm + reeds + trombones)
  B: dense (all except full brass)
  A3: tutti (full ensemble)

## Notes

Classic build structure. Sparse A1 establishes; medium A2 adds weight; B builds; A3 tutti climax. Big-band specific: Ellington-style phrase-by-phrase density increase. Density logic supports musical flow.
