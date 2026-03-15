# Notes: Section Role Assignment

## Rationale

Big-band orchestration requires clear functional hierarchy. Ellington's arrangements distinguish lead (solo or section melody), pad (sustained harmony), background figures, counterlines, punctuation (hits, stabs), and support (rhythmic or harmonic reinforcement). This primitive assigns roles so the engine knows which section carries what responsibility.

## Design Decisions

- **lead** — Primary melodic material; typically one section (trumpets, reeds, or solo).
- **pad** — Sustained chords; reeds or brass in closed voicings.
- **background** — Rhythmic/harmonic figures behind lead; must not compete.
- **counterline** — Secondary melodic line; reeds or trombones.
- **punctuation** — Short hits, stabs; brass preferred.
- **support** — Rhythmic or harmonic reinforcement; rhythm section or light section work.

## Open Questions

- How to handle role transitions mid-phrase?
- Should role preferences be style-specific (Ellington vs. Basie)?

## References

- Ellington, "Mood Indigo" (reed pad, brass punctuation)
- Thad Jones, "A Child Is Born" (role clarity across sections)
