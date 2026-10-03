# Flex Academy redesign

Applies design-taste-frontend v2 from /Users/andresaad/.agents/skills/design-taste-frontend/SKILL.md.

## Audit
Existing IA: /operator/, /build-your-way-out/, /business-school/. Our story, Programmes, The approach anchor navigation. Launch registration, Scale qualification/calendar and checklist download are frontend previews. Preserve all slugs, anchors, wordmark, primary nav labels, field names/order, sample disclosure.
Existing tokens: DM Sans + Georgia, sage #344536, taupe #675345, school #3d4438, backgrounds near-white/warm neutral, buttons pill except school square, imagery radius from 4 to 110px. Existing read: variance 5, motion 2, density 3.
Retire: repeated three-column layouts and shared section rhythm; four-line Operator headline; italic endings on every headline; labels above nearly every heading; image metadata overlays; decorative bottom strips; 850px fixed hero; inconsistent CTA labels; inverted School method section.
Preserve: clear two-audience strategy, actual The Flex/Base360 story, warm hospitality imagery from references, understandable preview disclosures, focus states and modal flows.
SEO: title and description currently shared by all routes, no structured data/social image. Keep existing content purpose, add specific per-concept titles.

## Direction and tokens
Native semantic HTML/CSS, retained static architecture. No framework migration needed for this redesign.
Operator: variance 7 / motion 4 / density 4. Sans display, restrained green, wide photographic panorama, uneven programme columns, operational case rows.
Build Your Way Out: variance 7 / motion 4 / density 3. Sans display, warm reference palette, immersive left-aligned hero, milestone rail, launch-led narrative.
STR Business School: variance 6 / motion 3 / density 2. EB Garamond justified by the explicit business-publication/executive-education brief, wide editorial grid, oversized pathway labels, flat syllabus rows.
Radius policy: pill buttons + 16px panels + 8px fields on Operator and Journey; 2px buttons/panels/fields on School. Images are flat or 16px as specified by their section; no ornamental asymmetric corners.
Theme: semantic variable system, system preference with manual theme toggle for preview testing. One theme across the complete page, no inverted content sections. Photograph overlays serve legibility only.
Layers: document 0, header 10, browser-native dialog top layer.
Motion: motivated entry/reveal hierarchy and tactile button feedback; opacity/transform only, IntersectionObserver and CSS, disabled under reduced motion. School gets hover feedback only.
Imagery: generated apartment scene as illustrative concept asset, existing real editorial sources retained for secondary visual variety, no claim that pictures are The Flex properties. Fonts served locally.

## Verification
- All three route files and local assets verified; JavaScript syntax passes.
- Desktop hero compositions inspected at 1440px. Mobile inspected at 390px; no horizontal overflow on any route.
- Light and dark theme hierarchy inspected; shared form controls keep semantic token contrast.
- Webinar form completed to confirmation; qualification form completed through time selection to booking preview confirmation.
- Checklist submitted to its ready/download confirmation; browser automation download-event tracking did not resolve, so the downloaded file itself was not independently inspected.
- Lighthouse on Operator (mobile simulation): performance 95, accessibility 100, CLS 0, total blocking time 0ms. LCP 2.7s locally; production timing depends on hosting/cache conditions. No claim of a measured production CWV pass.
- Headline/eyebrow restraint: 3 eyebrows in 8 Operator sections / 9 Journey and School sections. Navigation, pathway labels and dialog state labels are functional text, not decorative section eyebrows.
- Theme, palette, radii and CTA labels remain consistent on each concept. Reduced motion disables transitions and reveals.
- Existing source synchronized to the exact previously published commit before pushing the redesign.

## Generated asset
Built-in image_gen tool. Prompt: editorial photograph of a sunlit furnished European apartment, pale oak, linen sofa, olive chair, stone coffee table, notebook and keys, natural textures, no people/text/logos. One image generated and inspected. Workspace asset: dist/assets/academy-apartment.webp, with a smaller responsive derivative. Concept imagery only.


## Option 02 — Minimalist UI redesign

Applied the user-selected minimalist-ui skill to Build Your Way Out only. A warm bone canvas, charcoal controls, editorial EB Garamond headings and Helvetica Neue body establish a quiet document-like direction. The hero is a split text/photo composition; the ecosystem uses an asymmetric flat bento with an understated green Academy panel. Programme sections use fine dividers, small semantic tags and generous spacing. Photographs are desaturated and controls use 6px corners. Motion uses opacity and 12px translation with reduced-motion support.

Validation: JavaScript syntax check passed. Desktop 1440px and mobile 390px layouts have no horizontal overflow. Reviewed light and dark mode, the ecosystem bento and mobile webinar dialog. Existing conversion handlers and both other concepts are preserved.
