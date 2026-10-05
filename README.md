# FinFM · AAAI 2027 Workshop

Website for **FinFM: Foundation Models and Generative AI for Finance**, a workshop at AAAI-27 in Montréal, Canada.

- **Website:** https://finfm.finhorizons.org/
- **Submit a paper:** [FinFM on OpenReview](https://openreview.net/group?id=AAAI.org/2027/Workshop/FinFM)
- **Join the Program Committee:** [interest form](https://docs.google.com/forms/d/e/1FAIpQLSdWEmFMBN3IYrSvQPDWwwyc_pkfj-sQS8U26I1dKXxN2pD4YQ/viewform?usp=header)

## About this repository

The site is plain HTML, CSS and a little JavaScript, with no build step.

| File | Contents |
| --- | --- |
| `index.html` | All workshop content: overview, topics, call for papers, program, speakers, organizers, program committee and sponsors |
| `styles.css` | Colors, fonts, layout and responsive styles |
| `script.js` | Mobile navigation and highlighting of the current section |
| `assets/` | Fonts, images and their licenses |

## Run locally

```sh
python3 -m http.server 4173
```

Then open http://localhost:4173.

## Publishing

GitHub Pages serves the `main` branch at the custom domain in `CNAME`. Changes pushed to `main` go live within a few minutes. Keep the `CNAME` file when updating the site.

## Credits

Fonts are from Google Fonts under the SIL Open Font License 1.1. See [`assets/README.md`](assets/README.md) for details. Organizer photos belong to the people pictured.
