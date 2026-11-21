// A working news-image-daily entry (Node 22, standard library only): its image is the entry.png beside this file, and
// the program copies it to /output/entry.png. The image is "The World Today" — a newspaper front page
// summing up Saturday 21 November 2026 in one image: one lead story (the global AI sell-off) plus five
// supporting stories and four footer briefs, all drawn from that day's world news.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

// The copy is deterministic: the same bytes land in /output on every run,
// because the image is resolved next to this file, never from the working
// directory, and no network or randomness is involved.
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
