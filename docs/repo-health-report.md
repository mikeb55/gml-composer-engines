# Repository Health Report

**Generated:** Post-move validation  
**Repository:** gml-composer-engines  
**Remote:** https://github.com/mikeb55/gml-composer-engines

---

## Repo Status

**Overall:** Healthy. All structural validations pass. Automation and CI are valid.

**Note:** The specified local path `C:\Users\mike\Documents\Cursor AI Projects\gml-composer-engines` does not exist. The repository was validated at `creative-rule-engines\gml-composer-engines`. If the folder was moved, update paths accordingly.

---

## Git Configuration

| Item | Status |
|------|--------|
| Remote | https://github.com/mikeb55/gml-composer-engines.git |
| Branch | main (renamed from master) |
| Push | Succeeds |
| Pull | Succeeds |

---

## Validation Results

| Check | Result |
|------|--------|
| `npm run validate` | Pass |
| `npm test` | Pass |
| Files checked | 36 |
| Spec files checked | 13 |

---

## Test Results

- `scripts/validate-repo.js` runs successfully
- All required paths exist
- Spec file shape checks pass (primitive and engine)
- Terminology consistency (primitive, engine, conductor, promotion, validated) verified
- Conductor identity ("not a style engine") confirmed
- Examples coverage verified
- Notes/examples/tests present for all primitives and engines

---

## Automation Status

| Item | Status |
|------|--------|
| `.github/workflows/validate.yml` | Exists |
| Triggers | push, pull_request |
| Runner | ubuntu-latest |
| Node.js | LTS |
| Command | `npm run validate` |

---

## Repository Structure

All required folders present:

- primitives
- engines
- conductor
- evaluation
- docs
- examples
- templates
- tests
- palettes

---

## Engine Specification Validation

All 5 engine specs contain:

| Field | Status | Note |
|-------|--------|------|
| name | Pass | All engines |
| type | Pass | Via outputs.type and category |
| description | Pass | Via purpose field |
| primitives.required | Pass | Bach has empty (pending primitives) |
| notes | Pass | notes.md sibling |
| examples | Pass | examples/example-01.md |
| tests | Pass | tests/test-spec.md |

Engines: wayne_shorter_engine, andrew_hill_engine, bach_counterpoint_engine, ellington_orchestration_engine, stravinsky_rhythm_engine.

---

## Primitive Specification Validation

All 8 primitive specs contain:

| Field | Status | Note |
|-------|--------|------|
| name | Pass | All primitives |
| category | Pass | All primitives |
| description | Pass | Via purpose field |
| inputs | Pass | All primitives |
| outputs | Pass | All primitives |
| rules | Pass | All primitives |
| examples | Pass | examples/example-01.md |
| tests | Pass | tests/test-spec.md |

Primitives: motif_fragment, motif_sequence, phrase_asymmetry, delay_resolution, accent_displacement, register_layer, section_call_response, voicing_spread.

---

## Conductor Identity

- `conductor/conductor-engine-spec.md` exists
- States: "The Conductor Engine is not a style engine"
- README and docs reference Conductor correctly
- Engines reference Conductor in stack examples (docs/architecture, examples/)

---

## Stale References Scan

No stale references found in content:

- `-gml-composer-engines` — not present in docs
- Old repo URL — not present
- `scripts/validate-repo.js` contains the check logic (intentional)

---

## Inconsistencies

None. All checks pass.

---

## Recommendations

1. If the repo was moved to `C:\Users\mike\Documents\Cursor AI Projects\gml-composer-engines`, ensure that path exists and contains this repo.
2. Consider setting `main` as the default branch on GitHub if not already.
3. Optionally delete the `master` branch on remote if it is obsolete.
