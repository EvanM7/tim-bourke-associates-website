# Tim Bourke & Associates — website improvement and launch notes

This Next.js website is the **replacement prototype**, not yet the live website at `prostep.ie`.

## November 2026 improvements

- Added a **Selected Projects** page and a homepage feature linking to it.
- Added the **County Limerick cattle unit** example: planning by Tim Bourke, construction by Dillon Contractors (Tim's email, 8 September 2026).
- Added **specialist livestock mineral advice** and uploaded the Con Marnane video to the prototype's Projects page. Client publication approval still needs confirming.
- Removed unfinished client placeholder logos and the quote formatted as a testimonial.
- Simplified the primary navigation and expanded footer access to Projects.
- Removed internal draft/editor language and updated legacy scheme terminology.
- Softened approval and racing performance claims that require confirmation.
- Added the new route to the sitemap and disabled indexing until deliberate launch.

## Media requests from Tim (8 September 2026)

Tim emailed three JPEG photos: `IMG_5730.JPG`, `IMG_5728.JPG`, `IMG_5721.JPG`.
He asked that text at the bottom of **the last two pictures he sent** be removed. Completed:
1. Tim's three photos were confirmed to depict the Limerick cattle unit.
2. Clean JPEG versions were uploaded with the lower text overlays cropped out.
3. Responsive imagery and descriptive alt text were added to the Projects page.
Still required: confirm publication rights and the client/contractor credit with Tim.

Tim also sent `VIDEO-2026-08-19-07-41-50.mp4` showing client Con Marnane with specialist mineral licks.
The video is embedded in the prototype. Confirm Con Marnane's public-release permission before wider publication or domain launch.

Tim said he would send testimonials. **No testimonials should be invented or published without approval.**

## Prelaunch checklist

- [ ] Confirm current services, product claims and licensing/approvals with Tim.
- [ ] Confirm any named clients/logos, photo and video publication permission.
- [x] Add Tim's three cattle-unit photos and Con Marnane video to the prototype.
- [ ] Add testimonials only once Tim supplies approved quotations.
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

## November 20 visual-image pass and plan

- Removed the repeated low-quality horse image from the homepage hero, homepage equine section and Equine Services introduction.
- Created an editorial gradient hero, service-process panel, and text-led Equine Services introduction in place of generic photography.
- Replaced stock imagery in About with a heritage/experience panel; used Tim's confirmed Limerick cattle-unit photo on Farm Consultancy.
- The actual horse JPG remains stored as an unused asset; it no longer appears on these prominent pages.
- Added [PROJECT_PLAN.md](./PROJECT_PLAN.md) recording the eight work stages, owners, remaining dependencies, approvals and launch gates.
- Site is a **client-review prototype**; contact-form delivery, photo/video public permissions, content sign-off and domain migration remain pending.
