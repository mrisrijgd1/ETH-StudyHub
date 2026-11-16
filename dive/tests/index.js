// Lets `node --test dive/tests/` work: Node 22 resolves a directory argument to its index.js,
// so this file loads every *.test.mjs in this folder. `node --test 'dive/tests/*.test.mjs'` also works.
const { readdirSync } = require('node:fs');
const { join } = require('node:path');
const { pathToFileURL } = require('node:url');

for (const f of readdirSync(__dirname).filter(n => n.endsWith('.test.mjs')).sort()) {
  import(pathToFileURL(join(__dirname, f)).href);
}
