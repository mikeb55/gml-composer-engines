"""
Example IR Pass — Demonstrates the immutable apply pattern.

This pass is for testing only. Real passes (messiaen_harmony, stravinsky_rhythm,
bach_counterpoint) would register similar passes.
"""

from composition_ir.ir_pass_interface import IRPass
from composition_ir.ir_utils import clone_ir


class ExampleHarmonyPass(IRPass):
    """Example pass: adds a placeholder harmony field."""

    name = "example_harmony"

    def apply(self, ir):
        new_ir = clone_ir(ir)
        new_ir.harmony["processed_by"] = self.name
        if "passes_applied" not in new_ir.metadata:
            new_ir.metadata["passes_applied"] = []
        new_ir.metadata["passes_applied"].append(self.name)
        return new_ir


class ExampleRhythmPass(IRPass):
    """Example pass: adds a placeholder rhythm field."""

    name = "example_rhythm"

    def apply(self, ir):
        new_ir = clone_ir(ir)
        new_ir.rhythm["processed_by"] = self.name
        if "passes_applied" not in new_ir.metadata:
            new_ir.metadata["passes_applied"] = []
        new_ir.metadata["passes_applied"].append(self.name)
        return new_ir
