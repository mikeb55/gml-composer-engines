# Notes: Motif Fragment

## Rationale

Motivic development relies on extracting and reusing parts of a motif. A full motif may be too long for a given context; a fragment preserves identity while allowing variation. Common in Shorter, Bach, Stravinsky.

## Design Decisions

- **fragment_spec** supports head, tail, or arbitrary slice. Head/tail are most common in jazz and classical development.
- **contour_only** allows abstraction: same shape, different intervals. Useful for modal and atonal contexts.
- **preserve_identity** threshold prevents fragments that lose all connection to source.

## Open Questions

- How to measure "recognisable identity" quantitatively?
- Should fragment_spec support rhythmic extraction independent of pitch?

## References

- Schoenberg, *Fundamentals of Musical Composition* (motivic development)
- Shorter's use of head fragments in "Footprints", "Nefertiti"
