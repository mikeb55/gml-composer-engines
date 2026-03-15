# Notes: Section Call Response

## Rationale

Brass-reed dialogue is central to big band arranging. Ellington, Basie, and Thad Jones use call-response between sections to build momentum. The primitive structures this alternation without encoding the specific material.

## Design Decisions

- **call_group** and **response_group** are typically brass and reeds, but can be any distinct sections.
- **pattern** can be alternating, or more complex (e.g. call-call-response).
- **overlap** allows shout-style tutti with one section answering over the other.

## Open Questions

- Should pattern support more than two groups (e.g. brass, reeds, rhythm)?
- How to handle material length mismatch (short call, long response)?

## References

- Ellington, "Rockin' in Rhythm" (brass-reed dialogue)
- Thad Jones, "A Child Is Born" (section alternation)
