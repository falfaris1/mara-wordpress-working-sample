Mara: Gutenberg / Kadence working sample

Purpose: assess a fictional six-page consulting concept, not a client reference.
Stack: WordPress, Kadence Theme, Kadence Blocks, Gutenberg.
Pages: Home, About, Services, Approach, Insights, Contact.
Kadence Advanced Text headings and core Gutenberg content/buttons are editable.
Card layouts and the disabled form use clearly separated HTML blocks.
All copy is demonstration material. No testimonials, qualifications or real client work are claimed.
The contact form is intentionally disabled and collects/sends no data.
Not tested as a production deployment, accessibility certification or email delivery setup.

Reviewing the sample:
Load blueprint.json with the WordPress Playground Blueprint tools at
https://playground.wordpress.net/
Official loading guide:
https://developer.wordpress.org/playground/blueprints/tutorial/how-to-load-run/

The sample is temporary and is not a production deployment. Local verification
used WordPress Playground CLI 3.1.62 with a loopback-only test server. The exact
observed WordPress and theme versions are recorded in verification.json.

Checks completed on 7 November 2026:
- Six page routes returned HTTP 200.
- Kadence Theme and the Kadence Advanced Text block were registered.
- Home opened in the actual Gutenberg editor with recognized Kadence headings,
  paragraphs and buttons and without observed block-recovery prompts.
- A 390px preview frame had a 375px content area including scrollbar space,
  with no horizontal overflow on Home and Services.
- The mobile menu opened with the keyboard and navigated to Services.
- Contact controls were present and disabled; no data was sent.

See browser-verification.json and the desktop, editor and mobile screenshots.
To rerun the route checks against an already running local sample:
node check.mjs http://127.0.0.1:9415

Dependencies are downloaded from official WordPress and npm sources.
No paid themes/plugins, API keys or extra subscriptions are required.
