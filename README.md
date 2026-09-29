# FinFM · AAAI 2027

Website for **Foundation Models and Generative AI for Finance**.

A responsive, build-free static website using HTML, CSS, and a small JavaScript navigation enhancement. Fonts and images are served locally; no analytics, tracking, external UI libraries, or server-side services are required.

## Preview locally

Open `index.html` directly, or run `python -m http.server 4173` in this directory and visit `http://localhost:4173`.

## Live website and deployment

**[Visit the FinFM 2027 website](https://finfm.finhorizons.org/)**

The repository is public, and the GitHub Pages deployment was verified on September 29, 2026 (KST). Pages publishes the static site from `main` at the repository root. The owner's `CNAME` points to `finfm.finhorizons.org`; preserve it when updating the site. Relative asset paths also support the project subdirectory.

To update the live site, commit the revised files to `main`, then check **Actions → pages build and deployment** for a successful run. Pages settings are managed by the repository owner under **Settings → Pages**.

## Editing content

- `index.html`: all workshop copy, dates, contacts, organizer profiles, and submission information.
- `styles.css`: color palette, fonts, layout, responsive styles, and reduced-motion support.
- `script.js`: mobile navigation and active section highlighting.
- `assets/`: locally hosted images, fonts, licenses, and source credits.

## Editorial status

- The attached FinFM proposal is the source for the workshop scope and organizing committee.
- The **tentative 09:00–17:00 program** follows `FinFM_AAAI27_Schedule.docx`, supplied on September 29, 2026. The workshop will take place on **February 22 or 23, 2027**, at Palais des congrès de Montréal; the final day remains unconfirmed. Times are displayed as local to Montréal.
- **Keynote speakers, invited speakers, and panelists are unconfirmed.** Their names, affiliations, and proposed keynote titles are omitted. The source documents containing these candidates are not published.
- **Program Committee names are intentionally omitted**, following the organizer's instruction. Researchers can express interest through the linked form; the organizers assess the quality and relevance of applicants' publications before confirming PC appointments.
- The organizer approved submission opening on **October 2, 2026 at 00:00 AoE (UTC−12)** and closing on **November 20, 2026 at 23:59 AoE**. Author notifications are planned for December 2, 2026. The workshop day remains tentative.
- Full papers are described as up to seven pages plus references in AAAI format. Benchmark-track details, OpenReview URL, proceedings arrangements, and awards remain subject to final announcement.
- No submission button points to a placeholder or unrelated OpenReview venue.
- Yichen Li has an intentional initials treatment until a verified portrait is supplied.
- Organizer affiliations are labeled as affiliations, not sponsors or institutional endorsements.

The organizers should update the site as workshop details are confirmed. The proposal PDF and its unconfirmed invitee lists are not included in the website.

## Program Committee recruitment

The **Join PC** button in the sticky header, the **Join the Program Committee** link in the hero, and the button in `#committee` link to the [PC interest form](https://docs.google.com/forms/d/e/1FAIpQLSdWEmFMBN3IYrSvQPDWwwyc_pkfj-sQS8U26I1dKXxN2pD4YQ/viewform?usp=header). The header button is visible on mobile without opening the navigation menu.

Applicants are evaluated on publication quality and relevance before appointments are confirmed. Submitting the form does not guarantee PC membership. Confirmed members and affiliations will be announced later.

## Accessibility and behavior

Semantic landmarks, a skip link, visible keyboard focus, native disclosure controls, descriptive profile links, mobile navigation with Escape handling, responsive layouts, and reduced-motion support are included. Workshop content remains in the HTML and readable without JavaScript.

See `assets/README.md` for image provenance and font licenses.
