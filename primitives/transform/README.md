# Transform Primitives

Reusable transformation logic for motifs, cells, rhythms, interval sets, and related musical objects. These primitives are style-neutral and support future Shorter, Bach, Stravinsky, Messiaen, and Hill engine development.

## Purpose

Engines need to vary material without inventing ad hoc logic. Transformation primitives provide:

- **Fragment** — Extract musically meaningful subsets while preserving identity.
- **Transposition** — Restate at a different pitch level while preserving contour.
- **Rotation** — Cyclical reordering for variation without full replacement.
- **Interval map** — Map through defined interval rules or profiles.

## Why Foundational

Motivic development, cell variation, and thematic transformation are common across jazz, classical, and contemporary practice. A Wayne Shorter engine uses fragment and transposition; a Bach engine uses rotation and interval mapping; a Stravinsky engine uses rhythmic rotation. Centralising these as primitives avoids duplication and keeps engines focused on style-specific application.
