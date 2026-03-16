"""
IR Pass Pipeline — Deterministic pipeline executor.

Pipeline behaviour:
    current_ir = initial_ir
    for ir_pass in pipeline:
        current_ir = ir_pass.apply(current_ir)
    return current_ir

Ensures deterministic transformation order.
"""

from typing import List

from composition_ir.ir_pass_interface import IRPass


class IRPassPipeline:
    """
    Executes a sequence of IR passes in deterministic order.

    Each pass receives the output of the previous pass.
    No pass mutates its input; each returns a new IR.
    """

    def __init__(self, passes: List[IRPass]):
        self.passes = passes

    def run(self, initial_ir):
        """
        Run the pipeline.

        Args:
            initial_ir: Starting IR (immutable; must not be modified)

        Returns:
            Final IR after all passes applied.
        """
        current_ir = initial_ir
        for ir_pass in self.passes:
            current_ir = ir_pass.apply(current_ir)
        return current_ir
