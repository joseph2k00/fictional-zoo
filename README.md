# Amuay Wildlife Park

A responsive, multi-page website for a fictional wildlife park in Falcón State, Venezuela, built as part of the MSc in Information Systems Management programme at the University of Galway.

The project focuses on front-end fundamentals — semantic HTML, custom CSS layouts, and vanilla/jQuery interactivity — without relying on a framework or build tooling.

## Live Features

- **Home** — hero video banner, animal "spotlight" cards, conservation section, and a newsletter sign-up modal with client-side form validation.
- **Wildlife** — categorised (Animals / Birds / Plants & Trees) image carousels with custom prev/next card-rotation logic.
- **Book Tickets** — an interactive date picker (rolling 6-day view with scroll/navigate controls, plus a native calendar fallback) and a live ticket calculator that recomputes the total as visitors adjust adult/child/student quantities.
- **Volunteer** — an application form for prospective volunteers.
- **About Us** — park history, mission, and awards.
- **Contact Us** — contact details and enquiry form.
- Responsive layout with a slide-out mobile navigation menu (hamburger toggle).

## Tech Stack

- HTML5 / CSS3 (hand-written, one stylesheet per page plus shared `common.css`)
- JavaScript (ES6) and jQuery for DOM interaction and event handling
- No build step, bundler, or external dependencies beyond the vendored `jquery.js` and `Montserrat` webfont — the site runs directly in the browser

## Project Structure

```
.
├── index.html              # Home page
├── pages/                   # Secondary pages
│   ├── wildlife.html
│   ├── book.html
│   ├── volunteer.html
│   ├── about.html
│   └── contact.html
├── css/                     # One stylesheet per page + shared common.css
├── javascript/               # common.js, book.js, wildlife.js, jquery.js
├── assets/
│   ├── common/               # Shared icons/graphics
│   ├── logo/
│   └── pages/                # Page-specific images and video
└── fonts/Montserrat/          # Self-hosted webfont
```

## Running Locally

No build step is required. Either open `index.html` directly in a browser, or serve the folder to avoid any relative-path/CORS quirks:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Academic Context

Developed as a coursework project for the MSc Information Systems Management programme at the University of Galway. "Amuay Wildlife Park" and its contents are fictional and created solely for demonstration purposes.
