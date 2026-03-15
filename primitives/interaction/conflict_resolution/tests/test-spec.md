# Conflict Resolution — Test Spec

## Success Conditions

- Single coherent output after resolution.
- Strategy applied consistently (e.g. suppress_lower suppresses lower-priority output).
- No overlapping material in contested space when merge not allowed.

## Failure Conditions

- Both outputs fully present when suppress_lower.
- Merge produces overlapping pitches in same register.
- Defer to non-existent engine.

## Test Cases

1. **Suppress_lower:** A (high), B (low) → A retained, B suppressed.
2. **Merge allowed, different registers:** A (treble), B (bass) → both retained.
3. **Merge not allowed, same register:** A and B → one suppressed per priority.
