# Test Spec: Line Handoff

## Success Conditions

- Handoff occurs without texture collapse
- Continuity preserved
- At least one voice active at all times

## Failure Conditions

- All voices silent at handoff
- Abrupt break in melodic flow

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| Standard | Two voices, phrase end | Smooth handoff | |
| Mid-phrase | Handoff at bar 3 | Continuity preserved | |
