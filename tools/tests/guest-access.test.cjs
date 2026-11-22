// Regression tests for #116: public content is never hidden by optional sign-in.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const source = fs.readFileSync(path.join(__dirname, '../../assets/studyhub.js'), 'utf8');
const start = source.indexOf('  function updateGate() {');
const end = source.indexOf('\n  const lessonKind', start);
assert.ok(start >= 0 && end > start);
const functionSource = source.slice(start, end);
function render({ chemistry = false, hash = '', user = null, pending = false, unavailable = false, dismissed = false } = {}) {
  const classes = new Set();
  const main = { classList: { toggle(name, enabled) { if (enabled) classes.add(name); else classes.delete(name); } } };
  const gate = { classList: { toggle() {} }, hidden: false };
  const state = { chemistry, location: { hash }, main, publicLearningPage: !chemistry,
    window: { SH: unavailable ? undefined : { user, authPending: pending } },
    syncHintDismissed: dismissed, gate, gateTitle: {}, gateText: {}, gateButton: {}, gateDismiss: {}, L: (de, en) => en };
  vm.runInNewContext(functionSource + '\nupdateGate();', state);
  return { ...state, locked: classes.has('study-locked') };
}
test('public learning stays visible for guests, pending auth and failed auth loading', () => {
  for (const state of [{}, { pending: true }, { unavailable: true }, { dismissed: true }]) assert.equal(render(state).locked, false);
});
test('sync hint is optional and can be dismissed', () => {
  assert.equal(render().gate.hidden, false);
  assert.equal(render({ dismissed: true }).gate.hidden, true);
  assert.equal(render({ user: { id: 'student' } }).gate.hidden, true);
  assert.equal(render().gateDismiss.hidden, false);
});
test('protected Chemie activities still require sign-in and cannot be dismissed', () => {
  for (const hash of ['#lesson/1', '#review', '#training/1', '#exams']) {
    for (const state of [{}, { pending: true }, { unavailable: true }, { dismissed: true }]) {
      const view = render({ chemistry: true, hash, ...state });
      assert.equal(view.locked, true, hash);
      assert.equal(view.gate.hidden, false, hash);
      assert.equal(view.gateDismiss.hidden, true, hash);
    }
    assert.equal(render({ chemistry: true, hash, user: { id: 'student' } }).locked, false);
  }
});
test('public Chemie overview and library remain open', () => {
  for (const hash of ['', '#home', '#library', '#sources']) assert.equal(render({ chemistry: true, hash }).locked, false);
});
test('guest UI keeps Design and language available without exposing private profile form', () => {
  const body = source.slice(source.indexOf('  function updateAccountUI() {'), source.indexOf("  document.addEventListener('sh-auth', updateAccountUI)"));
  const element = () => ({ hidden: null, value: '', checked: false, disabled: false, classList: { toggle() {} }, setAttribute() {} });
  const design = element(), profileForm = element(), languageLink = element(), choices = element();
  const submit = element(); profileForm.querySelector = () => submit;
  const context = { window: { SH: { user: null } }, design, profileForm, choices, heading: {}, toggle: element(), appearanceDisclosure: {}, login: element(), languageLink,
    profileName: element(), profileOptIn: element(), L: (de, en) => en, updateGate() {}, renderContinue() {}, lessonKind: '', main: {}, lessonOwner: null };
  vm.runInNewContext(body + '\nupdateAccountUI();', context);
  assert.equal(design.hidden, false);
  assert.equal(languageLink.hidden, false);
  assert.equal(profileForm.hidden, true);
  assert.equal(choices.hidden, true);
});
