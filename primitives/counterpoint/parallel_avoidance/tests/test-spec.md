# Test Spec: Parallel Avoidance

## Success Conditions

- Parallel fifths and octaves detected
- Flagged or avoided when strict

## Failure Conditions

- Parallel fifth or octave undetected

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| Parallel fifth | C→D and G→A simultaneously | Flagged | |
| Parallel octave | C→D and C→D (octave apart) | Flagged | |
| Contrary | C→D and A→G | Pass | No parallel |
| Stylistic | Parallel with strict_mode: false | May allow | |
