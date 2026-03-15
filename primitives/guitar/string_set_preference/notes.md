# Notes: String Set Preference

## Rationale

Two-line guitar writing is easier when voices stay on adjacent or near-adjacent strings (e.g. D and G, or A and D). Large skips (e.g. E to high E) are awkward. This primitive encourages efficient string grouping.

## Design Decisions

- adjacency_preference: strength of preference for adjacent strings.
- skip_penalty: discourages large skips.
- Alternate string sets allowed when musical motion justifies.
