// gta6-clipper-01 entry (Node 22, standard library only).
//
// The video itself is the entry: a 20-second vertical GTA 6 Short, published
// public on YouTube, whose address lives in VIDEO.json at this repo's root.
// All this program does is hand that address to the gate: it reads VIDEO.json
// next to itself and writes the exact same bytes to /output/VIDEO.json,
// where the gate reads the video's views from the YouTube Data API.
// Nothing this program writes about the video is scored.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

let videoJson;
try {
  videoJson = readFileSync(join(BOT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Refuse a malformed address instead of handing the gate a bad one:
// VIDEO.json must parse as JSON and name the video with an https URL.
let video;
try {
  video = JSON.parse(videoJson.toString('utf8'));
} catch (err) {
  console.error(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof video?.url !== 'string' || !video.url.startsWith('https://')) {
  console.error('VIDEO.json must name a video with an https url.');
  process.exit(1);
}

writeFileSync(join(OUTPUT_DIR, 'VIDEO.json'), videoJson);
