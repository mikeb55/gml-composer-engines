# Test Spec: Contemporary Counterpoint Engine

## Success Conditions

- Lines melodically independent
- Rhythmic profiles differ
- Registers usable
- Dissonance within declared tolerance
- Handoff/overlap occurs without collapse

## Failure Conditions

- Lines identical or lockstep
- Texture collapse
- Dissonance exceeds tolerance
- All voices resolve simultaneously at phrase boundary

## Test Cases

| Case | Input | Expected | Notes |
|------|-------|----------|-------|
| 2 voices | line_count 2 | Two independent lines | |
| 3 voices | line_count 3 | Three lines, distinct rhythms | |
| 4 voices | line_count 4 | Four lines, register interlock | |
| High dissonance | dissonance_level 0.8 | More seconds, sevenths | |
| Low overlap | overlap_tolerance 0.2 | Strict phrase boundaries | |
