# Status Model

## Statuses

| Status | Meaning |
|--------|---------|
| draft | Spec exists; not yet tested. Work in progress. |
| experimental | Tested; behaviour not fully validated. Iterating. |
| validated | Meets success conditions. Ready for promotion. |
| promoted | Moved to creative-rule-engines. Canonical. |
| deprecated | No longer recommended. Superseded or abandoned. |

## Transitions

- draft → experimental: First tests pass.
- experimental → validated: All success conditions met; failure conditions documented.
- validated → promoted: Material moved to creative-rule-engines.
- Any → deprecated: Decision to retire.

## Usage

Status appears in spec.yaml for primitives and engines. It drives promotion decisions and documentation.
