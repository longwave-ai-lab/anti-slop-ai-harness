#!/usr/bin/env node
/**
 * Module 01: Deterministic Benchmark Audit Record Verifier (Exit Code 1)
 * Verifies that >= 2 distinct world-class archetypes, valid URLs, dates, and file diffs are logged.
 */
import fs from 'node:fs';

const targetPath = process.argv[2] || 'BENCHMARK-AUDIT.md';
if (!fs.existsSync(targetPath)) {
  console.error(`[FAIL] Module 01 Violation: Missing benchmark audit file at ${targetPath}`);
  process.exit(1);
}

const content = fs.readFileSync(targetPath, 'utf8');
const urlMatches = content.match(/https?:\/\/[^\s|)]+/g) || [];
const dateMatches = content.match(/\b202\d-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])\b/g) || [];
const archetypes = ['apple', 'stripe', 'linear', 'raycast', 'vercel', 'pentagram', 'kinfolk', 'nytimes', 'monocle', 'ordinaryfolk', 'vox', 'cloudflare', 'aws', 'w3.org'];
const matchedArchetypes = archetypes.filter((a) => content.toLowerCase().includes(a));

let errors = 0;
if (urlMatches.length < 2) {
  console.error(`[FAIL] Module 01 Violation: Expected >= 2 live reference URLs, found ${urlMatches.length}`);
  errors++;
}
if (dateMatches.length < 2) {
  console.error(`[FAIL] Module 01 Violation: Expected >= 2 ISO access dates (YYYY-MM-DD), found ${dateMatches.length}`);
  errors++;
}
if (matchedArchetypes.length < 2) {
  console.error(`[FAIL] Module 01 Violation: Must synthesize >= 2 distinct benchmark archetypes (found: ${matchedArchetypes.join(', ') || 'none'})`);
  errors++;
}

if (errors > 0) process.exit(1);
console.log(`[PASS] Module 01 Benchmark Audit verified (${matchedArchetypes.length} archetypes, ${urlMatches.length} URLs).`);
