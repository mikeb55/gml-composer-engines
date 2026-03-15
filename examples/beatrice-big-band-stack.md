# Beatrice Big Band Stack

## Practical Relevance

The Beatrice project (jazz big band arranging) benefits from this engine stack. The following map engine outputs to arranging needs:

## Motivic Development

**Wayne Shorter engine** provides motivic melody: fragment and sequence development, asymmetric phrasing. Use for:
- Head arrangements
- Solo backgrounds (motivic figures behind soloist)
- Bridge and transition material

## Background Figures

**Bach Counterpoint engine** (when primitives are implemented) provides counterlines. Use for:
- Sax backgrounds behind brass
- Contrapuntal fills
- Suspension chains for colour

## Sectional Dialogue

**Ellington engine** provides brass-reed call-response. Use for:
- Shout choruses
- Build sections
- Section feature passages

## Density Growth

**Conductor** controls density over time. Use for:
- Sparse → dense builds
- Tutti vs. section alternation
- Dynamic shaping through orchestration

## Counterline Support

**Bach engine** + **register_layer** primitive: counterlines in mid register, melody in high. Clear separation. Ellington engine applies register_layer and voicing_spread.

## Rhythmic Tension

**Stravinsky engine** provides accent displacement. Use for:
- Comping patterns
- Background rhythm figures
- Metric tension in builds

## Stack for Beatrice

| Engine | Beatrice Use |
|--------|--------------|
| Wayne Shorter | Melody, motivic backgrounds |
| Andrew Hill | Harmonic colour (optional) |
| Bach | Counterlines (when ready) |
| Stravinsky | Rhythmic figures |
| Ellington | Orchestration, section layout |

Conductor coordinates; density and formal structure drive engine invocation.
