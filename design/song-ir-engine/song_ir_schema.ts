/**
 * Song IR Schema — Typed intermediate representation for songs
 * Version: 0.1.0
 * Design only — no runtime implementation
 */

export type FormKind =
  | 'verse_chorus'
  | 'aaba'
  | 'verse_chorus_bridge'
  | 'through_composed'
  | 'blues'
  | 'custom';

export type SectionKind =
  | 'intro'
  | 'verse'
  | 'prechorus'
  | 'chorus'
  | 'bridge'
  | 'final_chorus_payoff'
  | 'outro'
  | 'tag';

export type SectionRole = 'setup' | 'build' | 'payoff' | 'release' | 'anchor';

export type MotifTransformKind =
  | 'compress'
  | 'expand'
  | 'invert'
  | 'transpose'
  | 'stretch'
  | 'condense'
  | 'identity';

export interface HookDNA {
  contour: number[];           // Pitch contour (relative intervals)
  rhythm_skeleton: string[];   // e.g. ["q", "q", "e", "q", "h"]
  syllable_count: number;
  stress_pattern: number[];    // 0=unstressed, 1=stressed
}

export interface MotifTransform {
  section_id: string;
  kind: MotifTransformKind;
  degree?: number;             // For transpose, stretch, etc.
}

export interface LyricSkeleton {
  section_id: string;
  line_count: number;
  rhyme_scheme: string;        // e.g. "AABB", "ABAB"
  syllable_targets: number[];  // Per line; asymmetry allowed
}

export interface HarmonicPlan {
  section_id: string;
  key: string;
  mode: 'major' | 'minor';
  chord_progression_template: string[];  // e.g. ["I", "V", "vi", "IV"]
  tension_level: number;       // 0–1
}

export interface ContrastArc {
  start: number;              // 0–1
  peak: number;
  release: number;
  end: number;
}

export interface ExportHints {
  tempo: number;
  key: string;
  time_signature: { beats: number; beatType: number };
  vocal_range: { min_midi: number; max_midi: number };
}

export interface MusicXMLConstraints {
  supported_structures: string[];
  required_tags: string[];
  supported_rhythmic_forms: string[];
  section_markers: string[];
  lyric_alignment_rules: string[];
  melody_import_rules: string[];
  harmony_annotation_expectations: string[];
  failure_cases: string[];
}

export interface SongIR {
  title: string;
  premise: string;
  seed: number;

  form: FormKind;
  section_order: string[];
  section_roles: Record<string, SectionRole>;

  hook_dna: HookDNA;
  motif_transforms: MotifTransform[];
  title_placements: number[];

  image_family: string[];
  lyric_skeleton: LyricSkeleton[];
  lyric_density: number;

  harmonic_plan: HarmonicPlan[];
  contrast_arc: ContrastArc;
  harmonic_adventurousness: number;

  export_hints: ExportHints;
  musicxml_constraints: MusicXMLConstraints;
}
