# Example: Section Role Assignment — Ellington-Style Ballad

## Input

sections: [trumpets, trombones, reeds, rhythm]
phrase_context: 8-bar ballad, melody in reeds

## Parameters

lead_section: reeds
role_preferences: { trumpets: punctuation, trombones: pad, reeds: lead }

## Output

role_map:
  reeds: lead
  trumpets: punctuation
  trombones: pad
  rhythm: support

## Notes

Classic Ellington ballad texture. Reeds carry the melody; trombones provide sustained pad; trumpets add short hits on phrase boundaries; rhythm supports. No section competes with the lead. Big-band specific: brass punctuation (muted) and reed lead are idiomatic.
