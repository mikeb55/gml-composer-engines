# Naming Conventions

## Folders

- Use lowercase snake_case for engine and primitive directories.
- Examples: `motif_fragment`, `wayne_shorter_engine`, `delay_resolution`.

## Spec IDs

- Stable identifiers in spec.yaml.
- Match folder name where possible: `id: motif_fragment`.
- Engine IDs: `wayne_shorter_engine`, `andrew_hill_engine`, etc.

## Public Language

- Repo and docs can use human-readable names: "Wayne Shorter Engine", "Bach Counterpoint Engine".
- Internal references use IDs for consistency.

## File Names

- `spec.yaml` — canonical spec for primitive or engine.
- `notes.md` — design notes, rationale, open questions.
- `example-01.md`, `example-02.md` — numbered examples.
- `test-spec.md` — test criteria and cases.
