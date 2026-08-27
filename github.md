repo: bmorrow919-jpg/Redekop-Website
branch: main

## Last sync
date: 2026-08-27T20:29:44Z

### Updated in this project
- Read repo state to diagnose a flattened upload (loose .jsx/.css at root vs stale `components/`, `styles/`).
- Confirmed root-level files held the current KAS calculator code; folder copies were outdated.
- No files imported from GitHub — read-only inspection.

## Screen map
| Screen | Built from |
| --- | --- |
| index.html | components/Header.jsx, Hero.jsx, Products.jsx, Voice.jsx, WorldMap.jsx, Dealer.jsx, Footer.jsx |
| kas.html | components/kas/KASPage.jsx, styles/kas.css |
| kas-catalogue.html | self-contained (inline styles + script) |
| scu.html | components/scu/SCUPage.jsx, styles/scu.css, components/hubspot.js |
| contact.html | components/contact/ContactPage.jsx, styles/contact.css, components/hubspot.js |
| seeding.html | components/seeding/SeedingPage.jsx, styles/seeding.css |
| careers.html | components/careers/CareersPage.jsx, styles/careers.css |
| careers-v2.html | components/careers2/*.jsx, styles/careers2.css |
