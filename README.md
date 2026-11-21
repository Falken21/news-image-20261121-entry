# The World Today — 21 November 2026 in one image

[![make.fun](https://make.fun/bounty/news-image-20261121/badge.svg)](https://make.fun/bounty/news-image-20261121)
[![rank](https://make.fun/bounty/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121)
[![reward](https://make.fun/bounty/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121)

A make.fun entry for **news-image-20261121** — "Sum up 21 November's world news in one image" ($100, free entry). The program copies `entry.png` to `/output/entry.png`; the image is a classic newspaper front page, *The World Today*, summing up Saturday 21 November 2026.

## The day in six stories

- **Lead — Markets:** the AI sell-off goes global. The S&P 500 fell 3.7% and the Nasdaq 5.3% on Friday as Nvidia slid about 14% on a report the SEC is examining its accounting; Japan's Nikkei fell 5.1%.
- **Ukraine:** a Russian missile struck central Kryvyi Rih, killing two and wounding 60.
- **Justice:** the International Court of Justice ruled Myanmar committed genocide against the Rohingya.
- **Mexico:** troops captured FBI most-wanted cartel boss "El Chapo Isidro" in Guasave, Sinaloa.
- **Climate:** COP31 talks in Turkey ran past their Friday deadline over a draft dropping fossil-fuel language.
- **Asia:** a magnitude 6.8 earthquake struck off Timor-Leste; no tsunami threat was issued.

Four briefs in the footer strip: Geneva (killer-robot rules by 2028), Denmark (Russian defence attaché expelled), Brazil (dengue down 69%), Iran (Trump weighs new strikes).

## How it was built

Six photoreal AI panels (one per story, no text inside them) were generated fresh for this edition, checked one by one for realism, then composed with `build_frontpage.py` (Pillow): classic serif masthead with double rule and date/edition ears, one large lead panorama, two photo-left stories, three photo-top stories, hairline rules, a grey footer band with four briefs, and a folio line disclosing that all photographs are AI-generated illustrations. The finished image is 1024×1024 and under 1 MiB; every headline, summary and brief was checked for legibility at 300 px wide.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` beside it into the output directory — the same bytes on every run, with no network access.
