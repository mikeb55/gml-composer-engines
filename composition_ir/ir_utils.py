"""
IR Utilities — Safe cloning and base IR types.
"""

import copy
from dataclasses import dataclass, field
from typing import Any, Dict


@dataclass
class CompositionIR:
    """
    Base Composition IR structure.
    Supports harmony, rhythm, counterpoint, orchestration fields.
    """

    harmony: Dict[str, Any] = field(default_factory=dict)
    rhythm: Dict[str, Any] = field(default_factory=dict)
    counterpoint: Dict[str, Any] = field(default_factory=dict)
    orchestration: Dict[str, Any] = field(default_factory=dict)
    metadata: Dict[str, Any] = field(default_factory=dict)

    def __post_init__(self):
        if "passes_applied" not in self.metadata:
            self.metadata["passes_applied"] = []


def clone_ir(ir: Any) -> Any:
    """
    Deep-clone IR for safe transformation.

    Returns a new object. The original input is never modified.
    Use this at the start of each pass.apply() so the pass modifies
    only the clone, never the original.

    Args:
        ir: IR object (dataclass, dict, or other structure)

    Returns:
        Deep copy of ir. Safe to modify.
    """
    return copy.deepcopy(ir)
