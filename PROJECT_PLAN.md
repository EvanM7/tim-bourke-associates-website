# Tim Bourke & Associates — website project plan

**Updated:** 20 November 2026  
**Project:** Replacement website prototype for Tim Bourke & Associates and Prostep  
**Prototype:** https://tim-bourke-associates-website.vercel.app/  
**Existing public domain:** https://prostep.ie (not migrated or modified)  
**Status:** Prototype ready for Tim's initial review; not approved for domain cutover.

## Goals and scope

Present Tim's agricultural, environmental and equine consultancy clearly, showcase genuine completed work, improve professional presentation and make enquiries easy. Retain Prostep as the specialist equine nutrition offering. Do not introduce unsupported testimonials or client claims. Keep the current `prostep.ie` domain and email functioning until launch is explicitly approved.

## Stages and status

| Stage | Status | Completed work / next deliverable | Owner / dependency |
| --- | --- | --- | --- |
| **1. Discovery and brief** | **Complete** | Reviewed existing pages and Tim's September 8 emails; identified core services, two client examples, photo and video requests. | Evan |
| **2. Prototype structure and content** | **Complete for review** | Built Home, About, Services, Farm Consultancy, Equine Services, Prostep, Projects, Contact and supporting pages; simplified navigation and strengthened enquiry paths. | Evan; Tim to verify accuracy |
| **3. Genuine media and branding** | **Complete for review** | Added 3 clean cattle-unit photos and Con Marnane video; confirmed photos show the Limerick unit; aligned header/footer logo with browser favicon. | Evan; Tim to confirm publication permissions |
| **4. Visual polish and technical preview** | **Complete for review / QA partly open** | Removed repetitive low-quality horse imagery, replaced generic photo sections with branded panels, used real building photo in Farm Consultancy; enabled keyboard focus, reduced motion, SEO noindex on prototype. Vercel preview build passes. | Evan; further device and form testing |
| **5. Tim's review and content sign-off** | **Not started** | Tim checks services, factual claims, Prostep positioning, examples, images, branding, contact details and desired edits. Collect approval in writing or a consolidated change list. | **Tim** |
| **6. Final assets, approvals and functionality** | **Pending Tim's reply** | Add approved Tim portrait and high-quality stud-farm images if available; add approved testimonials/client names only if supplied; check consent for client video; verify recipient and test Formspree end to end; review privacy/contact wording and mobile performance. | Tim for materials/approvals; Evan for implementation/tests |
| **7. Domain migration and launch** | **Not started** | Establish who controls `prostep.ie`, DNS, hosting and email records; prepare rollback and redirects; preserve email/MX settings; switch domain only with Tim's explicit approval, then enable indexing and submit sitemap. | Tim/domain administrator + Evan |
| **8. Handover and maintenance** | **Not started** | Provide access details, change procedure, contact-form ownership, backup/deployment instructions and agree support arrangements. | Evan + Tim |

## Information required from Tim (review questions)

1. **Content and priorities:** Which services are current, which are most commercially important, and is Tim Bourke & Associates the main brand with Prostep as the equine offering?
2. **Business profile:** A short biography, credentials and a professional photograph of Tim (only if he is comfortable publishing one).
3. **Imagery:** 2–5 good-quality original photos of a stud farm, horses, feed/forage work or farm consultation. Optional; the site no longer relies on the poor existing horse photo.
4. **Testimonials and names:** The testimonials Tim said he would collect, plus permission for any named client references or logos.
5. **Project publication:** Confirm the Limerick project and Dillon Contractors credit can appear publicly, and that Con Marnane agrees to the client video being published.
6. **Contact:** Confirm business phone, email address, preferred enquiry recipient, and who will receive Formspree notifications.
7. **Domain:** Who owns/manages the `prostep.ie` registration and DNS, and who maintains the current hosting and email?

## Launch gates

- [ ] Tim has reviewed and approved services, positioning, copy and all featured names/media.
- [ ] Form submission reaches the intended address and displays an appropriate success/failure message.
- [ ] Responsive/mobile and accessibility smoke test completed.
- [ ] Privacy and data-handling text reviewed for the enquiry form and chosen analytics (if any).
- [ ] Domain/DNS and mail records documented; migration plan and rollback agreed.
- [ ] Tim explicitly authorises replacing the website on `prostep.ie`.
- [ ] Verify production canonicals, redirects, robots and sitemap after launch.

## Scope boundaries

This plan does **not** assume an e-commerce system, blog, booking functionality, paid advertising, search-ranking guarantees or a standing maintenance contract. Any of those would require separate agreement.

## Change log

- **September 2026:** Tim sent initial recommendations and media.
- **November 2026:** Core prototype, projects, media integration, navigation, branding, content cleanup and SEO preview safeguards completed through documented GitHub commits/PRs.
- **20 November 2026:** Image quality pass: removed reused horse photo from prominent pages, introduced text-led visual panels and added authentic client project photography to farm consultancy.
