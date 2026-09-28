# FinFM · AAAI 2027

Website for **Foundation Models and Generative AI for Finance**.

A responsive, build-free static website using HTML, CSS, and a small JavaScript navigation enhancement. Fonts and images are served locally; no analytics, tracking, external UI libraries, or server-side services are required.

## Preview locally

Open `index.html` directly, or run `python -m http.server 4173` in this directory and visit `http://localhost:4173`.

## Publish with GitHub Pages

An owner or administrator of `finhorizons/AAAI_2027_Workshop_FinFM` must enable Pages:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Select **main** and **/ (root)**, then save.
4. Wait for the Pages deployment to finish and use the URL shown by GitHub.

The expected project URL is `https://finhorizons.github.io/AAAI_2027_Workshop_FinFM/`. This is an expected URL, not confirmation that publishing is enabled. Relative asset paths support this project subdirectory.

The repository is private. If GitHub reports that the owner's plan does not support Pages for a private repository, the owner must choose an eligible plan or another hosting arrangement. Do not change repository visibility without the owner's explicit approval.

## Editing content

- `index.html`: all workshop copy, dates, contacts, organizer profiles, and submission information.
- `styles.css`: color palette, fonts, layout, responsive styles, and reduced-motion support.
- `script.js`: mobile navigation and active section highlighting.
- `assets/`: locally hosted images, fonts, licenses, and source credits.

## Editorial status

- The attached FinFM proposal is the source for the workshop scope and organizing committee.
- **Date, session times, keynote speakers, invited speakers, and panelists are unconfirmed.** No proposed speaker names or detailed timetable are published.
- **Program Committee names are intentionally omitted**, following the organizer's instruction. The dedicated section links to the PC interest form and explains that membership will be confirmed separately.
- October 2, November 20, and December 2, 2026 are **tentative proposal dates**, visibly labeled as such. Deadline time and time zone remain unannounced.
- Full papers are described as up to seven pages plus references in AAAI format. Benchmark-track details, OpenReview URL, proceedings arrangements, and awards remain subject to final announcement.
- No submission button points to a placeholder or unrelated OpenReview venue.
- Yichen Li has an intentional initials treatment until a verified portrait is supplied.
- Organizer affiliations are labeled as affiliations, not sponsors or institutional endorsements.

Before publication, the organizers should confirm the final workshop status and any updates to the proposal. The proposal PDF and its unconfirmed invitee lists are not included in the website.

## Program Committee recruitment

The **Join PC** button in the sticky header, the **Join the Program Committee** link in the hero, and the button in `#committee` all open the [Google Forms interest form](https://docs.google.com/forms/d/e/1FAIpQLSdWEmFMBN3IYrSvQPDWwwyc_pkfj-sQS8U26I1dKXxN2pD4YQ/viewform?usp=header). The header button remains visible on mobile without opening the navigation menu.

The form has five required questions: full name, email address, institutional affiliation, top-conference paper count (1 / 2 / 3 or more), and paper-bidding capacity (1 / 2 / 3 / 4 or more). Submission expresses interest; it does not confirm a PC appointment. Responses are managed privately in Google Forms, and response summaries are not shared with applicants.

## Accessibility and behavior

Semantic landmarks, a skip link, visible keyboard focus, native disclosure controls, descriptive profile links, mobile navigation with Escape handling, responsive layouts, and reduced-motion support are included. Workshop content remains in the HTML and readable without JavaScript.

See `assets/README.md` for image provenance and font licenses.
