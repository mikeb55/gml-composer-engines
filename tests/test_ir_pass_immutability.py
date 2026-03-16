"""
IR Pass Immutability Tests — Verify no in-place mutation.

Test cases:
- Applying a pass does not modify the input IR
- Output IR differs when changes are expected
- Pipeline order produces deterministic results
- Repeated runs with same inputs produce identical outputs
"""

import sys
from pathlib import Path

# Add repo root for imports
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from composition_ir.ir_utils import CompositionIR, clone_ir
from composition_ir.ir_pass_interface import IRPass
from passes.ir_pass_pipeline import IRPassPipeline
from passes.example_pass import ExampleHarmonyPass, ExampleRhythmPass


def test_pass_does_not_modify_input_ir():
    """Applying a pass must not modify the input IR."""
    ir = CompositionIR(harmony={"chords": ["C", "G"]}, metadata={"passes_applied": []})
    ir_id_before = id(ir)
    ir_harmony_before = ir.harmony.copy()
    ir_metadata_before = list(ir.metadata.get("passes_applied", []))

    pass_obj = ExampleHarmonyPass()
    result = pass_obj.apply(ir)

    assert id(ir) == ir_id_before, "Input IR object identity must not change"
    assert ir.harmony == ir_harmony_before, "Input IR harmony must not be modified"
    assert ir.metadata.get("passes_applied", []) == ir_metadata_before, "Input IR metadata must not be modified"
    assert result is not ir, "Output must be a new object"


def test_output_ir_differs_when_changes_expected():
    """Output IR should differ from input when pass makes changes."""
    ir = CompositionIR(harmony={}, metadata={"passes_applied": []})
    pass_obj = ExampleHarmonyPass()
    result = pass_obj.apply(ir)

    assert "processed_by" in result.harmony
    assert result.harmony["processed_by"] == "example_harmony"
    assert "example_harmony" in result.metadata["passes_applied"]


def test_pipeline_order_deterministic():
    """Pipeline order must produce deterministic results."""
    ir = CompositionIR(metadata={"passes_applied": []})

    pipeline_ab = IRPassPipeline([ExampleHarmonyPass(), ExampleRhythmPass()])
    pipeline_ba = IRPassPipeline([ExampleRhythmPass(), ExampleHarmonyPass()])

    result_ab = pipeline_ab.run(ir)
    result_ba = pipeline_ba.run(ir)

    assert result_ab.metadata["passes_applied"] == ["example_harmony", "example_rhythm"]
    assert result_ba.metadata["passes_applied"] == ["example_rhythm", "example_harmony"]
    assert result_ab.metadata["passes_applied"] != result_ba.metadata["passes_applied"]


def test_repeated_runs_identical_outputs():
    """Repeated runs with same inputs must produce identical outputs."""
    ir = CompositionIR(harmony={"seed": 42}, metadata={"passes_applied": []})
    pipeline = IRPassPipeline([ExampleHarmonyPass(), ExampleRhythmPass()])

    result1 = pipeline.run(ir)
    result2 = pipeline.run(ir)

    assert result1.harmony == result2.harmony
    assert result1.rhythm == result2.rhythm
    assert result1.metadata["passes_applied"] == result2.metadata["passes_applied"]


def test_input_unchanged_after_pipeline():
    """Input IR must be unchanged after pipeline run."""
    ir = CompositionIR(harmony={"original": True}, metadata={"passes_applied": []})
    ir_snapshot = clone_ir(ir)

    pipeline = IRPassPipeline([ExampleHarmonyPass(), ExampleRhythmPass()])
    pipeline.run(ir)

    assert ir.harmony == ir_snapshot.harmony
    assert ir.rhythm == ir_snapshot.rhythm
    assert ir.metadata == ir_snapshot.metadata


def test_clone_ir_produces_independent_copy():
    """clone_ir must produce an independent copy."""
    ir = CompositionIR(harmony={"nested": [1, 2, 3]}, metadata={"passes_applied": []})
    cloned = clone_ir(ir)

    cloned.harmony["nested"].append(4)
    assert 4 not in ir.harmony["nested"], "Clone modification must not affect original"
