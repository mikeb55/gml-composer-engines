# Deterministic Section Compiler Design

**Version:** 0.1.0

---

## Objective

A compiler that turns **Song IR** into full songs. Each section type has a dedicated compiler. Sections inherit **hook DNA** and **section role contracts**. Output is **deterministic** given IR and seed.

---

## Section Compilers

| Compiler | Input | Output |
|----------|-------|--------|
| **verse_compiler** | IR, section_id, hook_dna, motif_transforms, section_role, harmonic_plan, lyric_skeleton | Verse: melody, lyrics, harmony |
| **prechorus_compiler** | IR, section_id, hook_dna, motif_transforms, section_role, harmonic_plan, lyric_skeleton | Prechorus: melody, lyrics, harmony |
| **chorus_compiler** | IR, section_id, hook_dna, motif_transforms, section_role, harmonic_plan, lyric_skeleton | Chorus: melody, lyrics, harmony |
| **bridge_compiler** | IR, section_id, hook_dna, motif_transforms, section_role, harmonic_plan, lyric_skeleton | Bridge: melody, lyrics, harmony |
| **final_chorus_payoff_compiler** | IR, section_id, hook_dna, motif_transforms (payoff variant), section_role, harmonic_plan | Final chorus with payoff (e.g. higher register, fuller harmony) |
| **outro_compiler** | IR, section_id, section_role, harmonic_plan | Outro: often instrumental, fade or resolution |

---

## Section Role Contracts

| Role | Contract |
|------|----------|
| **setup** | Lower tension; introduce material; establish |
| **build** | Increase tension; prepare for payoff |
| **payoff** | Peak; hook prominence; full delivery |
| **release** | Decrease tension; wind down |
| **anchor** | Stable; return to familiar |

Each compiler respects the section_role when choosing register, density, harmonic tension.

---

## Hook DNA Inheritance

Each compiler receives:

- **hook_dna**: contour, rhythm_skeleton, syllable_count, stress_pattern
- **motif_transforms** for that section: compress, expand, invert, transpose, etc.

The compiler applies the transform to the hook DNA and generates melody that:
- Preserves the transformed contour
- Uses the rhythm_skeleton (or derived rhythm)
- Fits syllable_count and stress_pattern for lyrics

---

## Asymmetry Preservation

- **Do not** force even phrase lengths
- **Do not** balance symmetry
- Compiler uses **syllable_targets** from lyric_skeleton as-is (e.g. [8, 7, 8, 6] for a 4-line verse)
- Line lengths may be 3, 5, 7, etc.

---

## Compilation Order

1. Parse section_order from IR
2. For each section in order:
   - Resolve section_id → section_type (verse, chorus, etc.)
   - Dispatch to appropriate compiler
   - Pass section_role, hook_dna, motif_transforms, harmonic_plan, lyric_skeleton
   - Compiler returns (melody, lyrics, harmony) for that section
3. Concatenate sections in order
4. Output: full song (melody events, lyrics, chord progression)

---

## Determinism

- Given **Song IR** and **seed**, output is deterministic
- Compilers use seeded random for choices within constraints
- No randomness in structure; only in surface realisation (e.g. passing note choice)

---

## Relation to Grammar

- IR is valid by construction (grammar-constrained)
- Compiler assumes valid IR; no runtime validation of IR structure
- Compiler may fail only on edge cases (e.g. impossible vocal range); then failure contract applies
