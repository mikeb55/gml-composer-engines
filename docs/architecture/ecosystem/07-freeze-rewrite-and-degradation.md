# Freeze/Rewrite Controls and Graceful Degradation

**Version:** 0.1.0  
**Scope:** Ecosystem-wide

---

## Freeze / Rewrite Controls

Reusable refinement interface supporting:

| Control | Description |
|---------|-------------|
| freeze_melody_rewrite_lyrics | Keep melody; rewrite lyrics |
| freeze_lyrics_rewrite_melody | Keep lyrics; rewrite melody |
| freeze_hook_rewrite_verses | Keep hook; rewrite verses |
| freeze_harmony_rewrite_rhythm | Keep harmony; rewrite rhythm |
| freeze_structure_rewrite_surface | Keep structure; rewrite surface |
| preserve_best_material_only | Keep only highest-scoring material; regenerate rest |

**Reusable by:** Multiple engines, not just Songwriting Engine.

---

## Graceful Degradation and Failure Contracts

Every engine must fail gracefully. No silent nonsense. No crashes where structured degradation is possible.

| Scenario | Response |
|----------|----------|
| impossible hybrid conflict | Fall back to primary profile with warning |
| export failure | Preserve candidate; block export; return warning |
| import ambiguity | Require manual section ranges |
| too much density | Auto-simplify before rejection |
| impossible vocal range | Attempt octave/contour repair first |
| GCE below threshold | Block export; return breakdown; suggest repair targets |

---

## Failure Contract Schema

```yaml
FailureContract:
  type: "degradation" | "block" | "repair_attempted"
  reason: string
  fallback_applied: string | null
  warning: string
  candidate_preserved: boolean
  export_blocked: boolean
```
