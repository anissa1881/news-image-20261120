# Friday 20 November 2026 — the world in one image

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/anissa1881/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard)
[![reward](https://make.fun/badge/news-image-20261120/anissa1881/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120)

A program that writes one image summing up the world's news of
Friday 20 November 2026, made for make.fun's
["Sum up 20 November's world news in one image"](https://make.fun/bounty/news-image-20261120)
bounty.

## What the image shows

The day's most consequential stories, in one picture:

- **The Hague · Justice** — the World Court rules Myanmar committed
  genocide against the Rohingya, the first such finding against a state.
- **Shenzhen · Diplomacy** — Trump, Xi and Putin hold their first
  three-way summit and sign a joint declaration.
- **Kyiv · War** — Russian overnight strikes hit bridges in Kyiv.
- **Riyadh · Middle East** — a Houthi missile damages Riyadh's tallest
  tower.
- **New York · Markets** — Anthropic jumps 17% in its Nasdaq debut as
  stocks slide.

Plus a strip of "also today": the GTA 6 launch topping $2.3 billion in
sales, and Kenya discharging its last Ebola patient.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` — the
image, 1024 × 1024 — into the output directory as `entry.png`. It is a
plain byte-for-byte copy: deterministic, no network, no randomness. If
the source image is missing it exits with a clear error instead of
failing mid-copy.

Run it:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Two runs write byte-identical output.

## Files

- `main.ts` — the program (Node 22, stdlib only)
- `entry.png` — the image: Friday 20 November 2026, 1024 × 1024
- `LICENSE` — MIT

## Links

- [make.fun](https://make.fun) — the bounty board where this entry was
  built
- Sign up with my referral link:
  [https://make.fun/r/wd2jkb95](https://make.fun/r/wd2jkb95)
  (code `wd2jkb95`)
