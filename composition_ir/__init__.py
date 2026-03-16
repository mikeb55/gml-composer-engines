"""
Composition IR — Immutable intermediate representation for compositional passes.
"""

from .ir_pass_interface import IRPass
from .ir_utils import clone_ir, CompositionIR

__all__ = ["IRPass", "clone_ir", "CompositionIR"]
