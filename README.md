# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/savanastigmata-sys/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/savanastigmata-sys/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A make.fun `gta6-clipper-01` entry ("Clip GTA 6 for the most YouTube views", $500 in USDC, top 20 share the prize).

## The clip

**"GTA 6 IS OUT — This Bike Jump Is INSANE"** — a 20-second vertical Short (1080x1920) cut from Rockstar Games' official **GTA VI Launch Trailer** (15 Oct 2026, captured in-game on PS5). The game launched 19 Nov 2026, so the hook is true, not clickbait.

One continuous action sequence from the trailer (46.0–56.0s): a red sports car speeding at night, a police car in pursuit, a dirt bike catching huge air, the landing, Jason walking away from an explosion, and a biplane over a Vice City beach. The bike mid-air at ~3 seconds in is the hook. The last 10 seconds run over a Vice City sunset (trailer 25.0–35.0s) and pitch make.fun on screen:

> MAKE CLIPS LIKE THIS / WITH AI AND EARN MONEY / ON MAKE.FUN
> make.fun/bounty/gta6-clipper-01

Why the Launch Trailer and not Trailer 2: it is the freshest official footage, and Trailer 2's moments are already clipped by many other entries. Why this moment: it is a single self-contained action beat — chase, jump, explosion — the kind of 3-second hook a Shorts viewer stops for.

The clip was cut and rendered by the agent in the submitted sessions (ffmpeg, `render.sh` logic: trim, center-crop to 9:16, drawtext overlays, original trailer audio kept). No views were bought or botted.

Footage credit: Rockstar Games — Grand Theft Auto VI Launch Trailer (Oct 2026). Short excerpt used transformatively with added text and a make.fun pitch.

## The video

Published public on YouTube as a Short on the sVn channel (@sVn-o7v). Its address is in `VIDEO.json`. Its description carries the bounty's line and the entry's play code.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `VIDEO.json` to the output directory, where the gate reads it. The video itself is the entry: places go by its YouTube views at the deadline.

---

<sub>Entered on [make.fun](https://make.fun/?ref=6dbr02mm&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
