// Exam Dive: all game constants in one place.
// Depth zones drive scoring (metres per correct answer), question difficulty,
// colours of the sea, which creatures live there and the depth-marker captions.

export const ZONES = [
  {
    id: 'sunlight', from: 0, to: 200, step: 100,
    weights: { 1: 1 },
    name: { de: 'Sonnenlichtzone', en: 'Sunlight zone' },
    caption: null,
    color: [52, 120, 168],
    creatures: ['bubble', 'shoal', 'seahorse'],
  },
  {
    id: 'twilight', from: 200, to: 1000, step: 200,
    weights: { 1: 0.4, 2: 0.6 },
    name: { de: 'Dämmerungszone', en: 'Twilight zone' },
    caption: { de: 'ε-δ-Schelf', en: 'ε-δ shelf' },
    color: [28, 66, 112],
    creatures: ['eel', 'jelly', 'bubble'],
  },
  {
    id: 'midnight', from: 1000, to: 4000, step: 500,
    weights: { 2: 0.5, 3: 0.5 },
    name: { de: 'Mitternachtszone', en: 'Midnight zone' },
    caption: { de: 'Konvergenzradius', en: 'radius of convergence' },
    color: [15, 30, 62],
    creatures: ['crab', 'manta', 'jelly'],
  },
  {
    id: 'abyssal', from: 4000, to: 6000, step: 500,
    weights: { 3: 0.5, 4: 0.5 },
    name: { de: 'Abyssal', en: 'Abyssal zone' },
    caption: { de: 'hier wohnen Gegenbeispiele', en: 'here be counterexamples' },
    color: [9, 17, 40],
    creatures: ['snake', 'angler', 'squid'],
  },
  {
    id: 'hadal', from: 6000, to: 11000, step: 625,
    weights: { 4: 0.5, 5: 0.5 },
    name: { de: 'Hadal', en: 'Hadal zone' },
    caption: { de: 'o. B. d. A. nur Monster', en: 'wlog only monsters' },
    color: [5, 9, 24],
    creatures: ['plankton', 'angler', 'squid'],
  },
];

export const MAX_DEPTH = 11000;
export const FLOOR = {
  name: { de: 'Grabensohle', en: 'Trench floor' },
  caption: { de: 'Grabensohle · q.e.d.', en: 'trench floor · q.e.d.' },
  color: [2, 3, 10],
};

// Seconds per question; 0 = "aus" (practice, no highscore).
export const TIMERS = [30, 60, 120, 180, 300, 0];
export const DEFAULT_TIMER = 120;
export const TIMER_WARN_SECONDS = 10;

export const SUBJECT_CHOICES = ['analysis', 'physics', 'mixed'];
export const SUBJECTS = ['analysis', 'physics'];

export const STORAGE_KEY = 'studyhub.dive.v1';
export const MAX_HISTORY = 100;
export const RECENT_DIVES = 5;

export const REPORT_REPO = 'mrisrijgd1/ETH-StudyHub';

export const MATHJAX_URL = 'https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-svg-full.js';

// Sea renderer
export const FPS = 30;
export const STEP_PX = 30; // world pixels per correct answer
