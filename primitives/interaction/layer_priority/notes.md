# Layer Priority — Notes

## Rationale

When melody engine and counterpoint engine both output for the same bar, the Conductor must decide which is primary. Orchestration layers (melody, background, bass) compete for register and density. Priority rules prevent muddle.

## Design Choices

- **Order:** Explicit list. First = highest. Conductor or formal context may override.
- **Tie resolution:** first (earlier in order wins), last (later wins), defer (hand to conflict_resolution primitive).
- **Salience:** Optional. When layers have equal priority, salience (loudness, register, density) can break ties.

## Future Considerations

- Dynamic priority (changes by section).
- Partial precedence (melody wins register, harmony wins bass).
