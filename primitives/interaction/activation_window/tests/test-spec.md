# Activation Window — Test Spec

## Success Conditions

- Window resolves to valid [start, end) range.
- Engine produces output only within window.
- Phrase-relative windows resolve correctly per phrase.

## Failure Conditions

- start_bar >= end_bar.
- Window extends beyond formal span.
- Engine output outside window.

## Test Cases

1. **Bars 8–16:** Engine active bars 8–15 only.
2. **Phrase-relative 0–4:** Each phrase: engine active first 4 bars.
3. **Invalid range:** start_bar 10, end_bar 8 → fail.
