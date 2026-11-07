import assert from 'node:assert/strict';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
const base = process.argv[2] ?? 'http://127.0.0.1:9415';
if (!/^http:\/\/(?:127\.0\.0\.1|localhost):\d+$/.test(base)) throw new Error('Checks are limited to the local demonstration server.');
const configuration = await (await fetch(`${base}/mara-demo-verification.json`)).json();
assert.equal(configuration.theme, 'kadence');
assert.equal(configuration.kadenceBlockRegistered, true);
assert.equal(configuration.publishedDemoPages, 6);
const routes = ['/', '/about/', '/services/', '/approach/', '/insights/', '/contact/'];
for (const route of routes) {
  const response = await fetch(base + route);
  const html = await response.text();
  assert.equal(response.status, 200, route);
  assert(html.includes('not a client reference'), route);
  assert(html.includes('wp-block-kadence-advancedheading'), route);
  assert(!html.includes('Fatal error'), route);
}
const contact = await (await fetch(`${base}/contact/`)).text();
for (const name of ['name', 'email', 'message']) {
  const tag = contact.match(new RegExp(`<(?:input|textarea)\\b[^>]*\\bname="${name}"[^>]*>`, 'i'))?.[0];
  assert(tag, `Control ${name} exists`);
  assert(/\bdisabled(?:\s|=|>)/i.test(tag), `Control ${name} is disabled`);
}
const report = { status:'passed', checkedAt:new Date().toISOString(), configuration, routes, formDataSubmissionEnabled:false, productionDeploymentVerified:false, separateBrowserChecks:'browser-verification.json; not performed by this command' };
fs.writeFileSync(new URL('./verification.json', import.meta.url), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({ status:report.status, routes:routes.length, wordpressVersion:configuration.wordpressVersion, theme:configuration.theme, formDataSubmissionEnabled:false }));
