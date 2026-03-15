# Test Spec: Voice Independence

## Success Conditions

- Each voice forms a coherent melodic line
- Rhythmic profiles differ between voices
- Voices maintain melodic logic when crossing

## Failure Conditions

- One voice purely chordal or accompanimental
- Identical attack patterns (lockstep rhythm)
- Voice crossing that obscures melodic logic

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| Two voices | Two melodic lines | Both independent | |
| Rhythmic | Same pitches, different rhythms | Pass | Different profiles |
| Lockstep | C→D and G→A simultaneously, same rhythm | Fail | Identical profile |
