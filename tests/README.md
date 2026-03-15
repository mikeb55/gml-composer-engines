# Tests

Markdown-based test scaffolding. This repo is not yet code-heavy; tests are specification-driven. Each primitive and engine has a `tests/test-spec.md` with success conditions, failure conditions, and test cases.

## Validation

**Local:** Run `npm run validate` (or `npm test`) to execute structural validation. This checks required paths, spec file shape, terminology consistency, and coverage. It does not validate musical quality or runtime behaviour.

**CI:** GitHub Actions runs validation on every push and pull request. See `.github/workflows/validate.yml`.

**What these tests guarantee:** Correct folder structure, presence of required spec fields, terminology consistency, and coverage of notes/examples/tests for primitives and engines.

**What they do not guarantee:** Musical excellence, correct rule logic, or that outputs are playable. Those remain future evaluation goals.
