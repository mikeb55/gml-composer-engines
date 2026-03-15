# Example: Accent Displacement — Half-Beat Shift

## Input

rhythmic_material: 4 quarter notes per bar (4/4)
displacement_spec: { shift_subdivision: 1, strength: 0.8 }
metre: 4/4

## Parameters

(subdivision = 8th note; shift by 1 subdivision = half beat)

## Output

Accent map: beats 1.5, 2.5, 3.5, 4.5 (the "and" of each beat)

Original strong beats: 1, 2, 3, 4
Displaced accents: "and" of 1, "and" of 2, "and" of 3, "and" of 4

## Notes

Classic displacement: accents move from the beat to the offbeat. Creates a driving, syncopated feel. In Stravinsky, this produces the "block" effect where the metre is clear but the accents contradict it. In jazz, similar to comping on the "and" of 2 and 4.
