# Transform Transposition — Test Spec

## Success Conditions

- All events transposed by same interval.
- Contour (up/down pattern) matches source when contour_preserve true.
- Diatonic transposition yields scale-valid pitches when target_tonality given.

## Failure Conditions

- Mixed transposition (some events +7, others +5).
- Contour altered when contour_preserve true.
- Output outside valid pitch range when constraints exist.

## Test Cases

1. **Chromatic +7:** C–E–G → G–B–D; contour preserved.
2. **Diatonic in C major:** C–D–E → G–A–B (fifth up, scale degrees).
3. **Contour violation:** If contour_preserve true and output has different up/down pattern → fail.
