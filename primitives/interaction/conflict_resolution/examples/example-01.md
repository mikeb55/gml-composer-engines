# Example: Melody vs Counterpoint in Same Register

**Conflicting outputs:** Melody (C5–E5) and counterpoint (D5–F5) both for bars 5–6, same register.

**Resolution spec:** strategy suppress_lower, merge_allowed false. Layer priority: melody > counterpoint.

**Result:** Melody retained. Counterpoint suppressed or moved to different register. Single coherent line in contested space.

**Use case:** Conductor prevents melody and counterpoint from clashing in same register.
