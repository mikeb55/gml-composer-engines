"""
IR Pass Interface — Base interface for all compositional passes.

Rule: IR must be treated as immutable input → transformed output.
No pass may modify the incoming IR object in place.
"""

from abc import ABC, abstractmethod


class IRPass(ABC):
    """
    Base interface for IR transformation passes.

    All passes must implement apply() and return a new IR object.
    The input IR must never be mutated.
    """

    name: str

    @abstractmethod
    def apply(self, ir):
        """
        Transform IR by returning a new IR instance.

        Args:
            ir: Input IR (immutable; must not be modified)

        Returns:
            New IR object. Never mutate the input.
        """
        raise NotImplementedError


class IRPassWithMetadata(IRPass):
    """
    Pass that appends trace metadata to the output IR.
    """

    def apply(self, ir):
        new_ir = self._apply_impl(ir)
        self._append_pass_metadata(new_ir)
        return new_ir

    @abstractmethod
    def _apply_impl(self, ir):
        """Override: perform the actual transformation."""
        raise NotImplementedError

    def _append_pass_metadata(self, ir):
        """Append pass name to metadata.passes_applied."""
        if hasattr(ir, "metadata") and ir.metadata is not None:
            if "passes_applied" not in ir.metadata:
                ir.metadata["passes_applied"] = []
            ir.metadata["passes_applied"].append(self.name)
