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
test('guest menu offers language and sign-in while hiding design controls', () => {
  const body = source.slice(source.indexOf('  function updateAccountUI() {'), source.indexOf("  document.addEventListener('sh-auth', updateAccountUI)"));
  const element = () => ({ style: {}, hidden: null, value: '', checked: false, disabled: false, classList: { toggle() {} }, setAttribute() {} });
  const design = element(), profileSummary = element(), profileActions = element(), languageLink = element(), choices = element(), appearanceDetails = element();
  appearanceDetails.open = false;
  const context = { window: { SH: { user: null } }, design, profileSummary, profileActions, choices, appearanceDetails, guestOptions: element(), heading: {}, toggle: element(), ICONS: { palette: '' }, login: element(), languageLink,
    editStudySetup: element(), setupDialog: { open: false }, L: (de, en) => en, updateGate() {}, renderContinue() {}, lessonKind: '', main: {}, lessonOwner: null };
  vm.runInNewContext(body + '\nupdateAccountUI();', context);
  assert.equal(design.hidden, false);
  assert.equal(languageLink.hidden, true);
  assert.equal(profileSummary.hidden, true);
  assert.equal(profileActions.hidden, true);
  assert.equal(choices.hidden, false);
  assert.equal(appearanceDetails.open, false); assert.equal(appearanceDetails.hidden, true);
});
test('signed-in learners without setup are sent through first-run setup', () => {
  const body = source.slice(source.indexOf('  function updateAccountUI() {'), source.indexOf("  document.addEventListener('sh-auth', updateAccountUI)"));
  const element = () => ({ style: {}, hidden: null, disabled: false, open: false, textContent: '', classList: { toggle() {} }, setAttribute() {} });
  let required = null;
  const account = { user: { id: 'student', email: 'student@example.test' }, profile: null, accountDataPending: false, studySetup: { read() { return null; } } };
  const context = { window: { SH: account }, design: element(), profileSummary: element(), profileActions: element(), choices: element(), appearanceDetails: element(), guestOptions: element(), heading: {}, toggle: element(), ICONS: { palette: '' }, login: element(), languageLink: element(),
    editStudySetup: element(), setupDialog: { open: false }, openStudySetup(value) { required = value; }, URLSearchParams, location: { search: '' }, L: (de, en) => en, updateGate() {}, renderContinue() {}, lessonKind: '', main: {}, lessonOwner: null };
  vm.runInNewContext(body + '\nupdateAccountUI();', context);
  assert.equal(required, true);
  assert.equal(context.profileSummary.hidden, false);
  assert.equal(context.profileActions.hidden, false);
  assert.equal(context.appearanceDetails.open, false);
});
test('signed-in learners can postpone first-run setup', () => {
  const body = source.slice(source.indexOf('  function updateAccountUI() {'), source.indexOf("  document.addEventListener('sh-auth', updateAccountUI)"));
  const element = () => ({ style: {}, hidden: null, disabled: false, open: false, textContent: '', classList: { toggle() {} }, setAttribute() {} });
  let opened = false;
  const account = { user: { id: 'student', email: 'student@example.test' }, profile: null, accountDataPending: false, studySetup: { read() { return null; }, skipped() { return true; } } };
  const context = { window: { SH: account }, design: element(), profileSummary: element(), profileActions: element(), choices: element(), appearanceDetails: element(), guestOptions: element(), heading: {}, toggle: element(), ICONS: { palette: '' }, login: element(), languageLink: element(),
    editStudySetup: element(), setupDialog: { open: false }, openStudySetup() { opened = true; }, URLSearchParams, location: { search: '' }, L: (de, en) => en, updateGate() {}, renderContinue() {}, lessonKind: '', main: {}, lessonOwner: null };
  vm.runInNewContext(body + '\nupdateAccountUI();', context);
  assert.equal(opened, false);
  assert.equal(context.profileSummary.hidden, false);
});
