# Tim Bourke & Associates — website improvement and launch notes

This Next.js website is the **replacement prototype**, not yet the live website at `prostep.ie`.

## November 2026 improvements

- Added a **Selected Projects** page and a homepage feature linking to it.
- Added the **County Limerick cattle unit** example: planning by Tim Bourke, construction by Dillon Contractors (Tim's email, 8 September 2026).
- Added a description of **specialist livestock mineral advice**. Tim's Con Marnane client video and three edited cattle-unit photographs have been added to the prototype.
- Removed unfinished client placeholder logos and the quote formatted as a testimonial.
- Simplified the primary navigation and expanded footer access to Projects.
- Removed internal draft/editor language and updated legacy scheme terminology.
- Softened approval and racing performance claims that require confirmation.
- Added the new route to the sitemap and disabled indexing until deliberate launch.

## Media requests from Tim (8 September 2026)

Tim emailed three JPEG photos: `IMG_5730.JPG`, `IMG_5728.JPG`, `IMG_5721.JPG`.
He asked that text at the bottom of **the last two pictures he sent** be removed. Before publishing:
1. Confirm the photos relate to the Limerick cattle unit.
2. Make clean copies, without altering or misrepresenting the structure shown.
3. Confirm image publication rights and the client/contractor credit.
4. Add accessible descriptions and responsive image sizes to the Projects page.

Tim also sent `VIDEO-2026-08-19-07-41-50.mp4` showing client Con Marnane with specialist mineral licks.
Confirm client permission and suitability for public release before embedding it.

Tim said he would send testimonials. **No testimonials should be invented or published without approval.**

## Prelaunch checklist

- [ ] Confirm current services, product claims and licensing/approvals with Tim.
- [ ] Confirm any named clients/logos, photo and video publication permission.
- [x] Add the three supplied cattle-unit photographs and Con Marnane video to the prototype.
- [ ] Add client-approved testimonials, when available.
- [ ] Test the contact form end to end: `NEXT_PUBLIC_FORMSPREE_FORM_ID` must be configured and the recipient must be correct.
- [ ] Check desktop/mobile layout, keyboard use, accessibility and performance.
- [ ] Confirm DNS registrar, current host, domain ownership and email MX records.
- [ ] Set `NEXT_PUBLIC_SITE_LIVE=true` **only after** migration to `prostep.ie`, to enable search indexing.
- [ ] Review redirects from the existing site and submit the sitemap after launch.
- [ ] Confirm client ownership and content-maintenance arrangement.

## Development

```bash
npm ci
npm run lint
npm run build
```

Vercel previews are automatically created from GitHub branch pushes. Merge only after review; production deployment remains linked to the main branch.

## Pre-review cleanup (November 2026)

- Replaced customer-visible draft text on Equine Services.
- Replaced repeated generic service imagery with numbered, service-specific panels.
- Removed the internal photo verification note from the Projects page; the image source is now credited simply to Tim.
- Simplified desktop/mobile navigation and improved menu controls.
- Replaced potentially unsupported racing claims in highlighted homepage/about copy.
- Added a user-facing contact-form fallback and general error display, plus an enquiry-data disclosure.
- Added visible focus states and reduced-motion support.

**Still to verify before launching on prostep.ie:** live Formspree delivery and recipient, Tim's approval of services/claims, client video permission, and domain/email migration.

## Image quality pass (20 November 2026)

- Removed the repeatedly used low-resolution horse photo from the homepage hero, homepage equine section, and Equine Services introduction.
- Replaced the homepage hero with a clean emerald gradient and understated graphic accents.
- Replaced two other horse-image placements with service-specific, text-led panels.
- Used Tim's real Limerick project photograph in the homepage About section and Farm Consultancy introduction.
- Replaced the generic About page photograph with an established-1996 graphic pending a real headshot of Tim.
- Removed the stock-image backdrop from the homepage final call to action.
- Added a plain-language title immediately above the Con Marnane video.

**Request from Tim:** ideally one good headshot, 3–5 original high-resolution equine/stud farm photographs, approved testimonials and permission to publish named client projects. None of these are required to give Tim the prototype for review.

## 22 November 2026 content and accessibility audit

- Removed racing performance / client prestige claims from homepage copy pending specific client approval.
- Removed internal SEO-page writing language from the Equine Services Tipperary page and tightened local service copy.
- Updated older `Cross Compliance` terminology on location-focused farm pages to `Farm Compliance & Records`.
- Improved mobile navigation semantics and current-page indicators.
- Maintained prototype noindex safeguards; no DNS, mail or domain changes.
- Still pending: Tim's approval of specific client/media references, real enquiry delivery test, mobile browser smoke test, and domain handover arrangements.
