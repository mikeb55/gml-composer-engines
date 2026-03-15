#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
let errors = [];
let filesChecked = 0;
let specFilesChecked = 0;

function fail(msg) {
  errors.push(msg);
}

function readFile(p) {
  const full = path.join(ROOT, p);
  try {
    return fs.readFileSync(full, 'utf8');
  } catch (e) {
    return null;
  }
}

function fileExists(p) {
  const full = path.join(ROOT, p);
  return fs.existsSync(full);
}

function containsText(content, phrase) {
  return content && content.toLowerCase().includes(phrase.toLowerCase());
}

// A. Required files and directories
const REQUIRED_PATHS = [
  'README.md',
  'docs/architecture/overview.md',
  'docs/architecture/conductor-engine-architecture.md',
  'docs/architecture/promotion-pipeline.md',
  'docs/engine-governance/development-philosophy.md',
  'docs/engine-governance/status-model.md',
  'docs/engine-governance/naming-conventions.md',
  'primitives/README.md',
  'engines/README.md',
  'conductor/README.md',
  'evaluation/README.md',
  'examples/README.md',
  'tests/README.md',
  'palettes/README.md',
  'templates/primitive-spec-template.yaml',
  'templates/engine-spec-template.yaml',
  'templates/primitive-notes-template.md',
  'templates/engine-notes-template.md',
  'templates/example-template.md',
  'templates/test-template.md',
  'examples/engine-stack-examples.md',
  'examples/beatrice-big-band-stack.md',
  'tests/repo-test-plan.md',
  'primitives/motivic/motif_fragment/spec.yaml',
  'primitives/motivic/motif_sequence/spec.yaml',
  'primitives/phrase/phrase_asymmetry/spec.yaml',
  'primitives/harmony/delay_resolution/spec.yaml',
  'primitives/rhythm/accent_displacement/spec.yaml',
  'primitives/orchestration/register_layer/spec.yaml',
  'primitives/orchestration/section_call_response/spec.yaml',
  'primitives/orchestration/voicing_spread/spec.yaml',
  'primitives/transform/README.md',
  'primitives/transform/transform_fragment/spec.yaml',
  'primitives/transform/transform_transposition/spec.yaml',
  'primitives/transform/transform_rotation/spec.yaml',
  'primitives/transform/transform_interval_map/spec.yaml',
  'primitives/interaction/README.md',
  'primitives/interaction/handoff/spec.yaml',
  'primitives/interaction/layer_priority/spec.yaml',
  'primitives/interaction/activation_window/spec.yaml',
  'primitives/interaction/conflict_resolution/spec.yaml',
  'primitives/counterpoint/README.md',
  'primitives/counterpoint/voice_independence/spec.yaml',
  'primitives/counterpoint/contrary_motion/spec.yaml',
  'primitives/counterpoint/oblique_motion/spec.yaml',
  'primitives/counterpoint/parallel_avoidance/spec.yaml',
  'primitives/counterpoint/suspension_chain/spec.yaml',
  'primitives/guitar/README.md',
  'primitives/guitar/register_partition/spec.yaml',
  'primitives/guitar/playability_constraint/spec.yaml',
  'primitives/guitar/dyad_density_control/spec.yaml',
  'primitives/guitar/string_set_preference/spec.yaml',
  'engines/composer/wayne_shorter_engine/spec.yaml',
  'engines/composer/andrew_hill_engine/spec.yaml',
  'engines/composer/bach_counterpoint_engine/spec.yaml',
  'engines/composer/stravinsky_rhythm_engine/spec.yaml',
  'engines/guitar/jimmy_wyble_engine/spec.yaml',
];

const SECTIONAL_ORCHESTRATION_PATHS = [
  'primitives/sectional-orchestration/section_role_assignment/spec.yaml',
  'primitives/sectional-orchestration/brass_reed_contrast/spec.yaml',
  'primitives/sectional-orchestration/background_figure/spec.yaml',
  'primitives/sectional-orchestration/density_orchestration_map/spec.yaml',
];

const ELLINGTON_PATHS = [
  'engines/ellington_orchestration_engine/spec.yaml',
  'engines/composer/ellington_orchestration_engine/spec.yaml',
];

for (const p of REQUIRED_PATHS) {
  filesChecked++;
  if (!fileExists(p)) {
    fail(`Missing required path: ${p}`);
  }
}

if (fileExists('primitives/sectional-orchestration')) {
  for (const p of SECTIONAL_ORCHESTRATION_PATHS) {
    filesChecked++;
    if (!fileExists(p)) {
      fail(`Missing required path: ${p}`);
    }
  }
}

const ellingtonExists = ELLINGTON_PATHS.some((p) => fileExists(p));
if (!ellingtonExists) {
  fail('Missing required Ellington engine spec (engines/ellington_orchestration_engine or engines/composer/ellington_orchestration_engine)');
} else {
  filesChecked++;
}

// B. Spec file shape checks
const PRIMITIVE_KEYS = ['id:', 'name:', 'category:', 'version:', 'status:', 'purpose:', 'inputs:', 'parameters:', 'outputs:', 'evaluation:', 'tags:'];
const ENGINE_KEYS = ['id:', 'name:', 'category:', 'version:', 'status:', 'purpose:', 'musical_scope:', 'inputs:', 'primitives:', 'parameters:', 'style_constraints:', 'outputs:', 'evaluation:', 'tags:'];

const PRIMITIVE_SPEC_PATHS = [
  'primitives/motivic/motif_fragment/spec.yaml',
  'primitives/motivic/motif_sequence/spec.yaml',
  'primitives/phrase/phrase_asymmetry/spec.yaml',
  'primitives/harmony/delay_resolution/spec.yaml',
  'primitives/rhythm/accent_displacement/spec.yaml',
  'primitives/orchestration/register_layer/spec.yaml',
  'primitives/orchestration/section_call_response/spec.yaml',
  'primitives/orchestration/voicing_spread/spec.yaml',
  'primitives/transform/transform_fragment/spec.yaml',
  'primitives/transform/transform_transposition/spec.yaml',
  'primitives/transform/transform_rotation/spec.yaml',
  'primitives/transform/transform_interval_map/spec.yaml',
  'primitives/interaction/handoff/spec.yaml',
  'primitives/interaction/layer_priority/spec.yaml',
  'primitives/interaction/activation_window/spec.yaml',
  'primitives/interaction/conflict_resolution/spec.yaml',
  'primitives/counterpoint/voice_independence/spec.yaml',
  'primitives/counterpoint/contrary_motion/spec.yaml',
  'primitives/counterpoint/oblique_motion/spec.yaml',
  'primitives/counterpoint/parallel_avoidance/spec.yaml',
  'primitives/counterpoint/suspension_chain/spec.yaml',
  'primitives/guitar/register_partition/spec.yaml',
  'primitives/guitar/playability_constraint/spec.yaml',
  'primitives/guitar/dyad_density_control/spec.yaml',
  'primitives/guitar/string_set_preference/spec.yaml',
  'primitives/sectional-orchestration/section_role_assignment/spec.yaml',
  'primitives/sectional-orchestration/brass_reed_contrast/spec.yaml',
  'primitives/sectional-orchestration/background_figure/spec.yaml',
  'primitives/sectional-orchestration/density_orchestration_map/spec.yaml',
  'primitives/contemporary-counterpoint/line_handoff/spec.yaml',
  'primitives/contemporary-counterpoint/rhythmic_independence/spec.yaml',
  'primitives/contemporary-counterpoint/register_interlock/spec.yaml',
  'primitives/contemporary-counterpoint/dissonance_tolerance/spec.yaml',
  'primitives/contemporary-counterpoint/intervallic_cell_counterpoint/spec.yaml',
  'primitives/contemporary-counterpoint/phrase_overlap/spec.yaml',
];

const ENGINE_SPEC_PATHS = [
  'engines/composer/wayne_shorter_engine/spec.yaml',
  'engines/composer/andrew_hill_engine/spec.yaml',
  'engines/composer/bach_counterpoint_engine/spec.yaml',
  'engines/ellington_orchestration_engine/spec.yaml',
  'engines/composer/ellington_orchestration_engine/spec.yaml',
  'engines/composer/stravinsky_rhythm_engine/spec.yaml',
  'engines/guitar/jimmy_wyble_engine/spec.yaml',
  'engines/contemporary_counterpoint_engine/spec.yaml',
];

for (const p of PRIMITIVE_SPEC_PATHS) {
  specFilesChecked++;
  const content = readFile(p);
  if (!content) continue;
  for (const key of PRIMITIVE_KEYS) {
    if (!content.includes(key)) {
      fail(`Primitive spec ${p} missing required key: ${key}`);
    }
  }
}

for (const p of ENGINE_SPEC_PATHS) {
  specFilesChecked++;
  const content = readFile(p);
  if (!content) continue;
  for (const key of ENGINE_KEYS) {
    if (!content.includes(key)) {
      fail(`Engine spec ${p} missing required key: ${key}`);
    }
  }
}

// C. README / doc terminology checks
const CORE_DOCS = [
  'README.md',
  'docs/architecture/overview.md',
  'docs/architecture/conductor-engine-architecture.md',
  'docs/architecture/promotion-pipeline.md',
  'docs/engine-governance/development-philosophy.md',
];
const REQUIRED_TERMS = ['primitive', 'engine', 'conductor', 'promotion', 'validated'];
let combinedDocs = '';
for (const p of CORE_DOCS) {
  const c = readFile(p);
  if (c) combinedDocs += c + '\n';
}
for (const term of REQUIRED_TERMS) {
  if (!containsText(combinedDocs, term)) {
    fail(`Core docs missing required term: ${term}`);
  }
}

// D. Old name check
function scanForOldName(dir) {
  const entries = fs.readdirSync(path.join(ROOT, dir), { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(ROOT, dir, e.name);
    const rel = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name !== 'node_modules' && e.name !== '.git') {
        scanForOldName(rel);
      }
    } else if (e.isFile() && /\.(md|yaml|yml|json|txt)$/i.test(e.name)) {
      const content = fs.readFileSync(full, 'utf8');
      if (content.includes('-gml-composer-engines') || content.includes('mikeb55/-gml')) {
        fail(`File ${rel} contains stale repo reference (-gml-composer-engines or mikeb55/-gml)`);
      }
    }
  }
}
scanForOldName('.');

// E. Conductor identity check
const conductorSpec = readFile('conductor/conductor-engine-spec.md');
const conductorReadme = readFile('conductor/README.md');
const conductorText = (conductorSpec || '') + (conductorReadme || '');
if (!containsText(conductorText, 'not a style engine')) {
  fail('Conductor docs must state that the Conductor Engine is not a style engine');
}

// F. Examples check
const stackExamples = readFile('examples/engine-stack-examples.md');
const stackCount = (stackExamples.match(/## Stack \d+:/g) || []).length;
if (stackCount < 3) {
  fail(`examples/engine-stack-examples.md must contain at least 3 stack examples (found ${stackCount})`);
}

const beatriceContent = readFile('examples/beatrice-big-band-stack.md');
const BEATRICE_PHRASES = ['motivic', 'background', 'dialogue', 'density', 'counterline', 'rhythmic'];
for (const phrase of BEATRICE_PHRASES) {
  if (!containsText(beatriceContent, phrase)) {
    fail(`examples/beatrice-big-band-stack.md missing phrase: ${phrase}`);
  }
}

// G. Notes / tests / examples coverage
const PRIMITIVE_DIRS = [
  'primitives/motivic/motif_fragment',
  'primitives/motivic/motif_sequence',
  'primitives/phrase/phrase_asymmetry',
  'primitives/harmony/delay_resolution',
  'primitives/rhythm/accent_displacement',
  'primitives/orchestration/register_layer',
  'primitives/orchestration/section_call_response',
  'primitives/orchestration/voicing_spread',
  'primitives/transform/transform_fragment',
  'primitives/transform/transform_transposition',
  'primitives/transform/transform_rotation',
  'primitives/transform/transform_interval_map',
  'primitives/interaction/handoff',
  'primitives/interaction/layer_priority',
  'primitives/interaction/activation_window',
  'primitives/interaction/conflict_resolution',
  'primitives/counterpoint/voice_independence',
  'primitives/counterpoint/contrary_motion',
  'primitives/counterpoint/oblique_motion',
  'primitives/counterpoint/parallel_avoidance',
  'primitives/counterpoint/suspension_chain',
  'primitives/guitar/register_partition',
  'primitives/guitar/playability_constraint',
  'primitives/guitar/dyad_density_control',
  'primitives/guitar/string_set_preference',
  'primitives/sectional-orchestration/section_role_assignment',
  'primitives/sectional-orchestration/brass_reed_contrast',
  'primitives/sectional-orchestration/background_figure',
  'primitives/sectional-orchestration/density_orchestration_map',
  'primitives/contemporary-counterpoint/line_handoff',
  'primitives/contemporary-counterpoint/rhythmic_independence',
  'primitives/contemporary-counterpoint/register_interlock',
  'primitives/contemporary-counterpoint/dissonance_tolerance',
  'primitives/contemporary-counterpoint/intervallic_cell_counterpoint',
  'primitives/contemporary-counterpoint/phrase_overlap',
];

const ENGINE_DIRS = [
  'engines/composer/wayne_shorter_engine',
  'engines/composer/andrew_hill_engine',
  'engines/composer/bach_counterpoint_engine',
  'engines/ellington_orchestration_engine',
  'engines/composer/ellington_orchestration_engine',
  'engines/composer/stravinsky_rhythm_engine',
  'engines/guitar/jimmy_wyble_engine',
  'engines/contemporary_counterpoint_engine',
];

for (const dir of [...PRIMITIVE_DIRS, ...ENGINE_DIRS]) {
  if (!fileExists(path.join(dir, 'spec.yaml'))) continue;
  if (!fileExists(path.join(dir, 'notes.md'))) {
    fail(`Missing notes.md in ${dir}`);
  }
  if (!fileExists(path.join(dir, 'examples/example-01.md'))) {
    fail(`Missing examples/example-01.md in ${dir}`);
  }
  if (!fileExists(path.join(dir, 'tests/test-spec.md'))) {
    fail(`Missing tests/test-spec.md in ${dir}`);
  }
}

// Summary
console.log('GML Composer Engines — Repository Validation');
console.log('---------------------------------------------');

if (errors.length > 0) {
  console.error('\nFAILURES:\n');
  errors.forEach((e) => console.error('  ' + e));
  console.error(`\n${errors.length} error(s). Validation failed.`);
  process.exit(1);
}

console.log(`Files checked: ${filesChecked}`);
console.log(`Spec files checked: ${specFilesChecked}`);
console.log('\nAll checks passed.');
process.exit(0);
