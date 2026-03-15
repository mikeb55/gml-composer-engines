# Transform Fragment — Notes

## Rationale

Fragment extraction underpins motivic development. A Shorter-style engine extracts head motives; a Bach engine extracts subject heads; a Stravinsky engine extracts rhythmic cells. The primitive is style-neutral: it defines *how* to extract, not *what* to extract.

## Design Choices

- **Boundary types:** beat, bar, event, contour_segment. Engines choose based on context.
- **Identity preservation:** The fragment must remain recognisable. A 3-note head from an 8-note phrase is valid; a single grace note is not.
- **Provenance:** Output carries reference to source for traceability.

## Future Considerations

- Optional pitch-class or interval-class normalisation for atonal contexts.
- Support for overlapping fragments (sliding window).
