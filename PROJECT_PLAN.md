# Tim Bourke & Associates — Website Redesign Project Plan

**Updated:** 20 November 2026  
**Project lead / developer:** Evan Madden (Constructlyco)  
**Client reviewer / business owner:** Tim Bourke  
**Prototype:** https://tim-bourke-associates-website.vercel.app/  
**Current website / domain to preserve until approved cutover:** https://prostep.ie/

## Purpose and scope

Refresh the existing business website so farm and equine clients can understand Tim Bourke & Associates' services, see relevant project examples, learn about Prostep and send an enquiry. The new site is a **prototype under client review**, not yet a replacement for the existing `prostep.ie` website.

### Status at a glance

| Stage | Status | Owner | Deliverable / exit criteria |
|---|---|---|---|
| 1. Discovery and requirements | **Completed** | Evan / Tim | Reviewed business offering and 8 September 2026 emails requesting project photos, client video and testimonials. |
| 2. Website structure and first prototype | **Completed** | Evan | Responsive Next.js prototype with Home, About, Services, Farm Consultancy, Equine Services, Prostep, Projects, Contact and supporting pages. |
| 3. Client-requested content and media | **Partially completed** | Evan / Tim | Limerick cattle-unit photos and Con Marnane mineral-lick video uploaded; captions/projects written. Testimonials and formal client/media approval remain outstanding. |
| 4. Visual and usability polish | **Completed for initial review** | Evan | Replaced repeatedly used low-quality horse photography, improved header branding, copy, navigation, mobile presentation, selected projects and enquiries UI. |
| 5. Client review and content approval | **Next — awaiting Tim** | Tim, coordinated by Evan | One consolidated set of corrections; confirm services, projects, Prostep statements, contact details and imagery permissions. |
| 6. Final QA and compliance | **Pending** | Evan / Tim | Test real Formspree submission and destination inbox; cross-device navigation/media playback, accessibility and privacy wording; apply approved final content. |
| 7. Domain cutover and SEO | **Pending; gated by approval** | Evan / domain owner | Identify existing host/registrar, preserve mail records, plan redirects and backups, switch site only with Tim's permission, enable indexing, verify launch. |
| 8. Handover and ongoing maintenance | **Pending** | Evan / Tim | Admin access, ownership, documentation, support terms and future update responsibility agreed. |

## Stage 5 — Tim's information and decisions

Send the prototype and ask Tim to respond to the following in one reply:

1. **Content:** Which services are currently offered? What is missing, outdated or overemphasised?
2. **Branding:** Is **Tim Bourke & Associates** the primary consultancy and **Prostep** its equine nutrition/supplement offering?
3. **About / imagery:** Can he supply a good-resolution professional portrait, three to five genuine farm/stud/equine photographs, and any additional project pictures? Photos should have publication permission.
4. **Testimonials / references:** Can he supply two or three approved testimonials, names/client logos he has permission to show, and another relevant project example?
5. **Client media:** Is publication of the Limerick unit photographs and Con Marnane video (with relevant names) approved? Construction is credited to Dillon Contractors.
6. **Prostep claims:** Confirm the exact nutrition/product wording, product approval/compliance details, and any racing or client-performance claims before reinstating those statements.
7. **Contact:** Confirm the published mobile, office phone and `tim@prostep.ie` address; specify who should receive form submissions.
8. **Operations:** Who controls `prostep.ie`, DNS, current hosting, and mail? What are the preferred review/launch expectations?

**Exit criteria:** Tim signs off on the content and media; no unverified promises or regulatory claims remain.

## Stage 6 — Final test checklist

- [ ] Complete one **real** contact-form test and verify its arrival at Tim's desired inbox (never assume Vercel Formspree environment variable alone proves delivery).
- [ ] Check homepage, About, Services, Farm Consultancy, Equine Services, Prostep, Projects and Contact on desktop and mobile.
- [ ] Verify video playback with sound and controls; verify image cropping and compression.
- [ ] Check all navigation links, phone and mailto links.
- [ ] Review keyboard focus, text contrast, reduced-motion and alt text.
- [ ] Confirm publication rights and privacy wording; add any required legal/privacy information.
- [ ] Obtain final client approval for public domain migration.

## Stage 7 — Launch safeguards

- Do **not** make DNS/registrar/MX-record changes without Tim's direct approval and understanding of hosting/email arrangements.
- Back up the current website and record existing DNS, MX, SPF, DKIM and DMARC settings before any domain change.
- Maintain existing mail service and provide rollback instructions.
- Prepare necessary redirects from previous URLs.
- The prototype is intentionally non-indexed. Set `NEXT_PUBLIC_SITE_LIVE=true` only when approved and deployed on the real domain; then verify canonical URLs and sitemap.
- Check HTTPS, mobile performance and contact submissions after cutover.

## Stage 8 — Handover

- Document GitHub / Vercel / Formspree ownership, who pays hosting, and who can update content.
- Agree whether Constructlyco provides an ongoing maintenance arrangement or a fixed-scope handover.
- Provide clear written guide for requesting future changes and backing up the site.

## Change tracking

All technical changes are tracked in GitHub commits and pull requests. See `PROJECT_HANDOVER.md` for detailed notes and prior revisions.

**Current recommended next action:** Send Tim the revised prototype and request one consolidated round of content, media and launch-related feedback. Do not delay initial review solely for future photos/testimonials.
