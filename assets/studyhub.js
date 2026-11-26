/* One shared shell for every subject. Course tabs above, subject modes below. */
(function () {
  'use strict';
  const SH_FONTS = new URL('fonts/storybook.css?v=f1126', document.currentScript ? document.currentScript.src : location.href).href;   // fonts on our own server (no Google)
  const palettes = {
    storybook: {"label": ["Mokka & Kiefer (Original)", "Mocha & pine (original)"], "swatches": ["#2f5a42", "#94692a"], "group": "story", "tints": ["#2f5a42", "#94692a", "#2f5a42", "#263a2e", "#e3cb93", "#6f6350"], "strength": ["14%", "16%"], "light": {"bg": "#ebe2d4", "surface": "#f5efe5", "raised": "#f8f4ea", "ink": "#2c251c", "muted": "#6d614e", "line": "#d6c8b2", "border": "#6d614e", "soft": "#e2e8da", "accent": "#2f5a42", "on-accent": "#f8f4ea", "accent-text": "#2f5a42", "accent-bright": "#2f5a42", "accent-soft": "#e2e8da", "secondary": "#815b25", "highlight": "#815b25", "on-highlight": "#f8f4ea", "highlight-soft": "#f2e6d0", "story": "#f2e6d0", "story-edge": "#815b25", "exam": "#e9e8dd", "exam-edge": "#2f5a42", "success": "#2f6b2f", "warning": "#8a5300", "danger": "#a02020", "focus": "#2f5a42", "head": "#263a2e", "glow": "rgba(150,110,50,.11)", "spark": "rgba(150,110,50,.4)", "brand": "#e3cb93"}, "dark": {"bg": "#15120f", "surface": "#1e1a15", "raised": "#1c1813", "ink": "#e6ddcd", "muted": "#a89c89", "line": "#36302a", "border": "#a89c89", "soft": "#1f2b23", "accent": "#86b394", "on-accent": "#10150f", "accent-text": "#86b394", "accent-bright": "#86b394", "accent-soft": "#1f2b23", "secondary": "#d4a961", "highlight": "#d4a961", "on-highlight": "#10150f", "highlight-soft": "#241d14", "story": "#241d14", "story-edge": "#d4a961", "exam": "#1a1d18", "exam-edge": "#86b394", "success": "#7fcf7f", "warning": "#e0a84a", "danger": "#ff8a80", "focus": "#86b394", "head": "#e0c48e", "glow": "rgba(212,169,97,.12)", "spark": "rgba(240,210,150,.75)", "brand": "#e0c48e"}},
    "sb-coffee": {"label": ["Kaffeepapier", "Coffee paper"], "swatches": ["#7a4f2a", "#95662c"], "group": "story", "tints": ["#7a4f2a", "#95662c", "#4f6b47", "#4a3321", "#e9c995", "#75644f"], "strength": ["14%", "16%"], "light": {"bg": "#ede3d3", "surface": "#f6efe4", "raised": "#fff8ee", "ink": "#2e241b", "muted": "#6c5c49", "line": "#d6c6ad", "border": "#6c5c49", "soft": "#eadcc6", "accent": "#7a4f2a", "on-accent": "#fff8ee", "accent-text": "#7a4f2a", "accent-bright": "#7a4f2a", "accent-soft": "#eadcc6", "secondary": "#7f5725", "highlight": "#7f5725", "on-highlight": "#fff8ee", "highlight-soft": "#f3e6cf", "story": "#f3e6cf", "story-edge": "#7f5725", "exam": "#ebe7dc", "exam-edge": "#4f6b47", "success": "#2f6b2f", "warning": "#8a5300", "danger": "#a02020", "focus": "#7a4f2a", "head": "#4a3321", "glow": "rgba(160,110,50,.13)", "spark": "rgba(150,100,40,.45)", "brand": "#e9c995"}, "dark": {"bg": "#17120e", "surface": "#211912", "raised": "#201812", "ink": "#e8dccb", "muted": "#ad9d88", "line": "#3d3025", "border": "#ad9d88", "soft": "#33271b", "accent": "#d9a865", "on-accent": "#1a120b", "accent-text": "#d9a865", "accent-bright": "#d9a865", "accent-soft": "#33271b", "secondary": "#d9a865", "highlight": "#d9a865", "on-highlight": "#1a120b", "highlight-soft": "#261c13", "story": "#261c13", "story-edge": "#d9a865", "exam": "#1d1a16", "exam-edge": "#a9c2a0", "success": "#7fcf7f", "warning": "#e0a84a", "danger": "#ff8a80", "focus": "#d9a865", "head": "#ecd2a6", "glow": "rgba(217,168,101,.14)", "spark": "rgba(245,205,140,.75)", "brand": "#e2c08d"}},
    "sb-taiga": {"label": ["Taigawald", "Taiga forest"], "swatches": ["#2f5a42", "#8a6d26"], "group": "story", "tints": ["#2f5a42", "#8a6d26", "#3c5b6e", "#24402f", "#dcc98f", "#5d6b62"], "strength": ["14%", "16%"], "light": {"bg": "#e8ebe3", "surface": "#f5f6f0", "raised": "#f7faf4", "ink": "#1f2722", "muted": "#59675e", "line": "#cdd5c8", "border": "#59675e", "soft": "#dde8dc", "accent": "#2f5a42", "on-accent": "#f7faf4", "accent-text": "#2f5a42", "accent-bright": "#2f5a42", "accent-soft": "#dde8dc", "secondary": "#796021", "highlight": "#796021", "on-highlight": "#f7faf4", "highlight-soft": "#eef0e3", "story": "#eef0e3", "story-edge": "#796021", "exam": "#e5ebec", "exam-edge": "#3c5b6e", "success": "#2f6b2f", "warning": "#8a5300", "danger": "#a02020", "focus": "#2f5a42", "head": "#24402f", "glow": "rgba(47,90,66,.10)", "spark": "rgba(60,100,60,.4)", "brand": "#dcc98f"}, "dark": {"bg": "#0f1513", "surface": "#17201d", "raised": "#15201c", "ink": "#dfe4dc", "muted": "#94a39a", "line": "#283530", "border": "#94a39a", "soft": "#1c2c25", "accent": "#8fbf9a", "on-accent": "#0d1411", "accent-text": "#8fbf9a", "accent-bright": "#8fbf9a", "accent-soft": "#1c2c25", "secondary": "#d6b874", "highlight": "#d6b874", "on-highlight": "#0d1411", "highlight-soft": "#1b2420", "story": "#1b2420", "story-edge": "#d6b874", "exam": "#171f22", "exam-edge": "#9db8c9", "success": "#7fcf7f", "warning": "#e0a84a", "danger": "#ff8a80", "focus": "#8fbf9a", "head": "#cfdcc4", "glow": "rgba(143,191,154,.12)", "spark": "rgba(225,245,170,.75)", "brand": "#d6c48f"}},
    "sb-misty": {"label": ["Nebeltaiga", "Misty taiga"], "swatches": ["#2b5d5a", "#85692a"], "group": "story", "tints": ["#2b5d5a", "#85692a", "#3e4f86", "#234046", "#cfdcdc", "#5a686d"], "strength": ["14%", "16%"], "light": {"bg": "#e6eaea", "surface": "#f4f6f6", "raised": "#f6fafa", "ink": "#1d2528", "muted": "#58666b", "line": "#cbd4d6", "border": "#58666b", "soft": "#dbe8e6", "accent": "#2b5d5a", "on-accent": "#f6fafa", "accent-text": "#2b5d5a", "accent-bright": "#2b5d5a", "accent-soft": "#dbe8e6", "secondary": "#796026", "highlight": "#796026", "on-highlight": "#f6fafa", "highlight-soft": "#edeee6", "story": "#edeee6", "story-edge": "#796026", "exam": "#e3e7f0", "exam-edge": "#3e4f86", "success": "#2f6b2f", "warning": "#8a5300", "danger": "#a02020", "focus": "#2b5d5a", "head": "#234046", "glow": "rgba(43,93,90,.10)", "spark": "rgba(40,80,100,.4)", "brand": "#cfdcdc"}, "dark": {"bg": "#101418", "surface": "#182027", "raised": "#172027", "ink": "#dde4e6", "muted": "#93a1a7", "line": "#29343b", "border": "#93a1a7", "soft": "#1b2c2c", "accent": "#8cc0b5", "on-accent": "#0d1415", "accent-text": "#8cc0b5", "accent-bright": "#8cc0b5", "accent-soft": "#1b2c2c", "secondary": "#c9b27a", "highlight": "#c9b27a", "on-highlight": "#0d1415", "highlight-soft": "#1a2226", "story": "#1a2226", "story-edge": "#c9b27a", "exam": "#181e27", "exam-edge": "#a4b4dd", "success": "#7fcf7f", "warning": "#e0a84a", "danger": "#ff8a80", "focus": "#8cc0b5", "head": "#d4e0dc", "glow": "rgba(140,192,181,.12)", "spark": "rgba(215,240,245,.75)", "brand": "#c9d6d8"}},
    "sb-starlit": {"label": ["Sternenindigo", "Starlit indigo"], "swatches": ["#2f45a8", "#946a12"], "group": "story", "tints": ["#2f45a8", "#946a12", "#2f45a8", "#1f2a6b", "#f0cf7d", "#595e82"], "strength": ["14%", "16%"], "light": {"bg": "#e9eaf3", "surface": "#f7f7fc", "raised": "#ffffff", "ink": "#191c33", "muted": "#595e82", "line": "#d0d3e6", "border": "#595e82", "soft": "#e0e4f8", "accent": "#2f45a8", "on-accent": "#ffffff", "accent-text": "#2f45a8", "accent-bright": "#2f45a8", "accent-soft": "#e0e4f8", "secondary": "#825d10", "highlight": "#825d10", "on-highlight": "#ffffff", "highlight-soft": "#f3eedf", "story": "#f3eedf", "story-edge": "#825d10", "exam": "#e6eaf8", "exam-edge": "#2f45a8", "success": "#2f6b2f", "warning": "#8a5300", "danger": "#a02020", "focus": "#2f45a8", "head": "#1f2a6b", "glow": "rgba(47,69,168,.10)", "spark": "rgba(40,60,140,.4)", "brand": "#f0cf7d"}, "dark": {"bg": "#0b0e1c", "surface": "#141a30", "raised": "#151a33", "ink": "#e3e5f1", "muted": "#9ca2c0", "line": "#262c4a", "border": "#9ca2c0", "soft": "#2a2a3a", "accent": "#f0c46a", "on-accent": "#0b0e1c", "accent-text": "#f0c46a", "accent-bright": "#f0c46a", "accent-soft": "#2a2a3a", "secondary": "#f0c46a", "highlight": "#f0c46a", "on-highlight": "#0b0e1c", "highlight-soft": "#1a1b2a", "story": "#1a1b2a", "story-edge": "#f0c46a", "exam": "#121a30", "exam-edge": "#8fc8ff", "success": "#7fcf7f", "warning": "#e0a84a", "danger": "#ff8a80", "focus": "#f0c46a", "head": "#f0d896", "glow": "rgba(240,196,106,.15)", "spark": "rgba(255,255,255,.8)", "brand": "#f0cf7d"}},
    skymint: { label: ['Sky & Mint', 'Sky & mint'], swatches: ['#1865f2', '#14bf96'], group: 'fun', tints: ['#1865f2', '#14bf96', '#9059ff', '#ffb100', '#ff6b5b', '#00a8d6'],
      light: { 'bg': '#f7f8fa', 'surface': '#ffffff', 'raised': '#ffffff', 'ink': '#21242c', 'muted': '#5b616e', 'line': '#e1e5ec', 'border': '#8a909c', 'soft': '#eef3fd', 'accent': '#1865f2', 'on-accent': '#ffffff', 'accent-text': '#1865f2', 'accent-bright': '#1865f2', 'accent-soft': '#e5eefe', 'secondary': '#0a7558', 'highlight': '#14bf96', 'on-highlight': '#0b2a22', 'highlight-soft': '#ddf7ef', 'story': '#fff6e0', 'story-edge': '#c98700', 'exam': '#f1ebff', 'exam-edge': '#7a4ff0', 'success': '#1a7f37', 'warning': '#9a5b00', 'danger': '#c62828', 'focus': '#4255ff' },
      dark: { 'bg': '#121826', 'surface': '#1a2234', 'raised': '#222c42', 'ink': '#eef2f8', 'muted': '#b0b8c8', 'line': '#2e3a52', 'border': '#74809a', 'soft': '#1d2740', 'accent': '#6fa2ff', 'on-accent': '#0b1a36', 'accent-text': '#6fa2ff', 'accent-bright': '#6fa2ff', 'accent-soft': '#1f3561', 'secondary': '#3ddbb4', 'highlight': '#3ddbb4', 'on-highlight': '#0b2a22', 'highlight-soft': '#143a33', 'story': '#2f2918', 'story-edge': '#ffc44d', 'exam': '#28224a', 'exam-edge': '#b39dff', 'success': '#5fd38d', 'warning': '#ffc95c', 'danger': '#ff8a80', 'focus': '#9aa6ff' } },
    periwinkle: { label: ['Periwinkle', 'Periwinkle'], swatches: ['#4255ff', '#ffcc00'], group: 'fun', tints: ['#4255ff', '#ffcc00', '#ff725b', '#18ae79', '#b14dff', '#00a8d6'],
      light: { 'bg': '#f6f7fb', 'surface': '#ffffff', 'raised': '#ffffff', 'ink': '#282d49', 'muted': '#5a6075', 'line': '#e1e3ee', 'border': '#8b90a8', 'soft': '#eef0fb', 'accent': '#4255ff', 'on-accent': '#ffffff', 'accent-text': '#4255ff', 'accent-bright': '#4255ff', 'accent-soft': '#e8ebff', 'secondary': '#8a5f00', 'highlight': '#ffcc00', 'on-highlight': '#282d49', 'highlight-soft': '#fff7d6', 'story': '#fff8eb', 'story-edge': '#d98a00', 'exam': '#e6fafa', 'exam-edge': '#14a3a3', 'success': '#1a7f37', 'warning': '#9a5b00', 'danger': '#c62828', 'focus': '#4255ff' },
      dark: { 'bg': '#161a33', 'surface': '#1e2342', 'raised': '#262c52', 'ink': '#eef0ff', 'muted': '#b3b8d6', 'line': '#343a63', 'border': '#7a80a8', 'soft': '#232849', 'accent': '#8c98ff', 'on-accent': '#121530', 'accent-text': '#8c98ff', 'accent-bright': '#8c98ff', 'accent-soft': '#2c3470', 'secondary': '#ffd84d', 'highlight': '#ffd84d', 'on-highlight': '#282d49', 'highlight-soft': '#3d3518', 'story': '#2e2a1c', 'story-edge': '#ffc14d', 'exam': '#173336', 'exam-edge': '#4fd6d6', 'success': '#5fd38d', 'warning': '#ffc95c', 'danger': '#ff8a80', 'focus': '#9aa6ff' } },
    bubblegum: { label: ['Bubblegum', 'Bubblegum'], swatches: ['#7c4dff', '#ff7eb6'], group: 'fun', tints: ['#7c4dff', '#ff7eb6', '#ffb100', '#14bf96', '#4d8dff', '#ff7a59'],
      light: { 'bg': '#faf7ff', 'surface': '#ffffff', 'raised': '#ffffff', 'ink': '#2b2240', 'muted': '#62597a', 'line': '#e9e2f5', 'border': '#9188a8', 'soft': '#f3edff', 'accent': '#6a3df0', 'on-accent': '#ffffff', 'accent-text': '#6a3df0', 'accent-bright': '#7c4dff', 'accent-soft': '#efe8ff', 'secondary': '#b02a68', 'highlight': '#ff7eb6', 'on-highlight': '#2b2240', 'highlight-soft': '#ffe6f1', 'story': '#fff4e8', 'story-edge': '#d97a1e', 'exam': '#e6f6ff', 'exam-edge': '#1f8fd1', 'success': '#1a7f37', 'warning': '#9a5b00', 'danger': '#c62828', 'focus': '#7c4dff' },
      dark: { 'bg': '#1a1530', 'surface': '#231c3e', 'raised': '#2c244d', 'ink': '#f3eeff', 'muted': '#bfb4dc', 'line': '#3a3060', 'border': '#8278a8', 'soft': '#261f44', 'accent': '#a98bff', 'on-accent': '#1a1033', 'accent-text': '#a98bff', 'accent-bright': '#a98bff', 'accent-soft': '#3a2c70', 'secondary': '#ff9cc8', 'highlight': '#ff9cc8', 'on-highlight': '#2b2240', 'highlight-soft': '#45213a', 'story': '#33261c', 'story-edge': '#ffb366', 'exam': '#152f42', 'exam-edge': '#6cc4ff', 'success': '#5fd38d', 'warning': '#ffc95c', 'danger': '#ff8a80', 'focus': '#c2adff' } },
    sunshine: { label: ['Sunshine', 'Sunshine'], swatches: ['#f26430', '#38bdf8'], group: 'fun', tints: ['#f26430', '#38bdf8', '#ffc61a', '#2bb673', '#e84d8a', '#8b5cf6'],
      light: { 'bg': '#fffaf3', 'surface': '#ffffff', 'raised': '#ffffff', 'ink': '#2d2620', 'muted': '#6b5f55', 'line': '#f0e5d8', 'border': '#9e9184', 'soft': '#fff1e3', 'accent': '#b23f0c', 'on-accent': '#ffffff', 'accent-text': '#b23f0c', 'accent-bright': '#f26430', 'accent-soft': '#ffeadf', 'secondary': '#0e6a94', 'highlight': '#38bdf8', 'on-highlight': '#0c2a3a', 'highlight-soft': '#e0f5fe', 'story': '#fff7d6', 'story-edge': '#c99400', 'exam': '#e9f9ef', 'exam-edge': '#1f9d55', 'success': '#1a7f37', 'warning': '#9a5b00', 'danger': '#c62828', 'focus': '#1f6fd1' },
      dark: { 'bg': '#1c1714', 'surface': '#26201b', 'raised': '#302822', 'ink': '#fbf3ea', 'muted': '#cdbfb2', 'line': '#40362e', 'border': '#8f8276', 'soft': '#2c241e', 'accent': '#ff9a6e', 'on-accent': '#2d1408', 'accent-text': '#ff9a6e', 'accent-bright': '#ff9a6e', 'accent-soft': '#4a2a1c', 'secondary': '#6dd0ff', 'highlight': '#6dd0ff', 'on-highlight': '#0c2a3a', 'highlight-soft': '#16323f', 'story': '#33301a', 'story-edge': '#ffd24d', 'exam': '#15332a', 'exam-edge': '#5fd38d', 'success': '#5fd38d', 'warning': '#ffc95c', 'danger': '#ff8a80', 'focus': '#8fb7ff' } },
    forest: { label: ['Wald', 'Forest'], swatches: ['#1f6f4f', '#a14d0c'], group: 'classic', tints: ['#2e8b57', '#d9822b', '#3b5fae', '#8a6bbf', '#c9a227', '#2a9d8f'],
      light: { 'bg': '#f4f6f3', 'surface': '#ffffff', 'raised': '#ffffff', 'ink': '#1c2621', 'muted': '#55625a', 'line': '#dde3de', 'border': '#8a978f', 'soft': '#e9f1ec', 'accent': '#1f6f4f', 'on-accent': '#ffffff', 'accent-text': '#1f6f4f', 'accent-bright': '#1f6f4f', 'accent-soft': '#e1f0e8', 'secondary': '#a14d0c', 'highlight': '#a14d0c', 'on-highlight': '#ffffff', 'highlight-soft': '#fdf0e1', 'story': '#fbf4e6', 'story-edge': '#b07a1f', 'exam': '#eaf0fb', 'exam-edge': '#3b5fae', 'success': '#1f7a45', 'warning': '#9a5b00', 'danger': '#b42318', 'focus': '#2f62d8' },
      dark: { 'bg': '#121815', 'surface': '#1a221e', 'raised': '#212b26', 'ink': '#e8efea', 'muted': '#a9b7ae', 'line': '#2e3a34', 'border': '#6f7f76', 'soft': '#1f2b25', 'accent': '#6fcf9f', 'on-accent': '#0b1f15', 'accent-text': '#6fcf9f', 'accent-bright': '#6fcf9f', 'accent-soft': '#1d3a2c', 'secondary': '#f2a65a', 'highlight': '#f2a65a', 'on-highlight': '#121815', 'highlight-soft': '#3a2714', 'story': '#2a2417', 'story-edge': '#d9a54a', 'exam': '#1b2436', 'exam-edge': '#7f9fe6', 'success': '#6fcf8f', 'warning': '#f0b44d', 'danger': '#f28b82', 'focus': '#8fb0ff' } },
    ocean: { label: ['Ozean', 'Ocean'], swatches: ['#1f5fcf', '#c2410c'], group: 'classic', tints: ['#1f5fcf', '#f08a4b', '#5b4fb3', '#20a39e', '#e0b420', '#d0576b'],
      light: { 'bg': '#f3f5f9', 'surface': '#ffffff', 'raised': '#ffffff', 'ink': '#1a2333', 'muted': '#525e72', 'line': '#dbe1ea', 'border': '#8792a5', 'soft': '#e8eef8', 'accent': '#1f5fcf', 'on-accent': '#ffffff', 'accent-text': '#1f5fcf', 'accent-bright': '#1f5fcf', 'accent-soft': '#e3ecfb', 'secondary': '#c2410c', 'highlight': '#c2410c', 'on-highlight': '#ffffff', 'highlight-soft': '#fdeee4', 'story': '#fbf4e6', 'story-edge': '#b07a1f', 'exam': '#eef1fb', 'exam-edge': '#5b4fb3', 'success': '#1f7a45', 'warning': '#9a5b00', 'danger': '#b42318', 'focus': '#1f5fcf' },
      dark: { 'bg': '#11151d', 'surface': '#181e29', 'raised': '#1f2633', 'ink': '#e7ecf4', 'muted': '#a7b2c4', 'line': '#2c3545', 'border': '#6c788c', 'soft': '#1c2433', 'accent': '#7fa9f5', 'on-accent': '#0c1730', 'accent-text': '#7fa9f5', 'accent-bright': '#7fa9f5', 'accent-soft': '#1c2c4a', 'secondary': '#f5a36b', 'highlight': '#f5a36b', 'on-highlight': '#11151d', 'highlight-soft': '#3a2416', 'story': '#2a2417', 'story-edge': '#d9a54a', 'exam': '#211f38', 'exam-edge': '#a99cf0', 'success': '#6fcf8f', 'warning': '#f0b44d', 'danger': '#f28b82', 'focus': '#9bbcf8' } },
    lagoon: { label: ['Lagune', 'Lagoon'], swatches: ['#0f6e7a', '#b4436c'], group: 'classic', tints: ['#0f8a96', '#e0658f', '#4d5fb0', '#f2a541', '#53a653', '#8e6cc4'],
      light: { 'bg': '#f2f6f6', 'surface': '#ffffff', 'raised': '#ffffff', 'ink': '#16272a', 'muted': '#4f6266', 'line': '#d9e3e3', 'border': '#83969a', 'soft': '#e4f1f1', 'accent': '#0f6e7a', 'on-accent': '#ffffff', 'accent-text': '#0f6e7a', 'accent-bright': '#0f6e7a', 'accent-soft': '#dcf0f1', 'secondary': '#b4436c', 'highlight': '#b4436c', 'on-highlight': '#ffffff', 'highlight-soft': '#fbe9f0', 'story': '#fbf4e6', 'story-edge': '#b07a1f', 'exam': '#eef0fb', 'exam-edge': '#4d5fb0', 'success': '#1f7a45', 'warning': '#9a5b00', 'danger': '#b42318', 'focus': '#2f62d8' },
      dark: { 'bg': '#0f1718', 'surface': '#162022', 'raised': '#1d292b', 'ink': '#e4f0f0', 'muted': '#a3b8ba', 'line': '#2a3a3c', 'border': '#6a8184', 'soft': '#1a2a2c', 'accent': '#5fc8d3', 'on-accent': '#06201f', 'accent-text': '#5fc8d3', 'accent-bright': '#5fc8d3', 'accent-soft': '#173a3e', 'secondary': '#f08fb0', 'highlight': '#f08fb0', 'on-highlight': '#0f1718', 'highlight-soft': '#3a1d29', 'story': '#2a2417', 'story-edge': '#d9a54a', 'exam': '#1e2238', 'exam-edge': '#9fa9f0', 'success': '#6fcf8f', 'warning': '#f0b44d', 'danger': '#f28b82', 'focus': '#8fb0ff' } },
    sunrise: { label: ['Morgenrot', 'Sunrise'], swatches: ['#a8461f', '#2f6f8f'], group: 'classic', tints: ['#d9603b', '#2f8fb8', '#6a55b5', '#e6a91a', '#3a9d6a', '#c74b7a'],
      light: { 'bg': '#f8f5f1', 'surface': '#ffffff', 'raised': '#ffffff', 'ink': '#2a211b', 'muted': '#665a50', 'line': '#e6ded5', 'border': '#9a8c80', 'soft': '#f6ede3', 'accent': '#a8461f', 'on-accent': '#ffffff', 'accent-text': '#a8461f', 'accent-bright': '#a8461f', 'accent-soft': '#f9e8de', 'secondary': '#2f6f8f', 'highlight': '#2f6f8f', 'on-highlight': '#ffffff', 'highlight-soft': '#e4f0f6', 'story': '#f3f1fb', 'story-edge': '#6a55b5', 'exam': '#eaf2f6', 'exam-edge': '#2f6f8f', 'success': '#1f7a45', 'warning': '#8a5a00', 'danger': '#b42318', 'focus': '#2f62d8' },
      dark: { 'bg': '#181412', 'surface': '#211b18', 'raised': '#29221e', 'ink': '#f3ebe4', 'muted': '#bfaea2', 'line': '#3a302a', 'border': '#85766b', 'soft': '#2a221d', 'accent': '#f0a07a', 'on-accent': '#2a1209', 'accent-text': '#f0a07a', 'accent-bright': '#f0a07a', 'accent-soft': '#43281c', 'secondary': '#7fc0de', 'highlight': '#7fc0de', 'on-highlight': '#181412', 'highlight-soft': '#16303c', 'story': '#25213a', 'story-edge': '#b3a3f0', 'exam': '#162b36', 'exam-edge': '#7fc0de', 'success': '#6fcf8f', 'warning': '#f0b44d', 'danger': '#f28b82', 'focus': '#8fb0ff' } },
    pastel: { label: ['Pastell', 'Pastel'], swatches: ['#b8b0f5', '#ffc8dd'], group: 'calm', iconMix: ['40%', '75%'], tints: ['#a0c4ff', '#b5ead7', '#cdb4db', '#ffd99a', '#ffadad', '#9bdcf6'], strength: ['30%', '18%'],
      light: { 'bg': '#fbf9ff', 'surface': '#ffffff', 'raised': '#ffffff', 'ink': '#2e2a3d', 'muted': '#615c72', 'line': '#ebe6f5', 'border': '#8f89a3', 'soft': '#f4f0fd', 'accent': '#6a5fcf', 'on-accent': '#ffffff', 'accent-text': '#5a4fc0', 'accent-bright': '#b8b0f5', 'accent-soft': '#eeebff', 'secondary': '#a33f6e', 'highlight': '#ffc8dd', 'on-highlight': '#2e2a3d', 'highlight-soft': '#fff0f6', 'story': '#fff7e8', 'story-edge': '#c48a28', 'exam': '#eef6ff', 'exam-edge': '#6f9fe0', 'success': '#2d7a4f', 'warning': '#8a6100', 'danger': '#b83a4b', 'focus': '#6a5fcf' },
      dark: { 'bg': '#1c1a25', 'surface': '#252331', 'raised': '#2d2a3b', 'ink': '#f2effa', 'muted': '#bdb7cf', 'line': '#3a3650', 'border': '#837d9a', 'soft': '#29263a', 'accent': '#c3bbff', 'on-accent': '#1c1a25', 'accent-text': '#c3bbff', 'accent-bright': '#c3bbff', 'accent-soft': '#373159', 'secondary': '#ffb3d1', 'highlight': '#ffb3d1', 'on-highlight': '#1c1a25', 'highlight-soft': '#40283a', 'story': '#2e2a1f', 'story-edge': '#f0c070', 'exam': '#1f2a3d', 'exam-edge': '#9cc2ff', 'success': '#8fe0b0', 'warning': '#ffd98a', 'danger': '#ff9eaa', 'focus': '#c3bbff' } },
    stone: { label: ['Schiefer (gedämpft)', 'Slate (muted)'], swatches: ['#4f6478', '#b49a6a'], group: 'calm', tints: ['#6f8aa3', '#87a08c', '#a68fa8', '#bfa77a', '#b58a84', '#7fa3a6'],
      light: { 'bg': '#f5f5f3', 'surface': '#fdfdfc', 'raised': '#ffffff', 'ink': '#2b2d2f', 'muted': '#5c6064', 'line': '#e2e2de', 'border': '#8f938f', 'soft': '#efefec', 'accent': '#4f6478', 'on-accent': '#ffffff', 'accent-text': '#4f6478', 'accent-bright': '#4f6478', 'accent-soft': '#e6ebef', 'secondary': '#735f3a', 'highlight': '#b49a6a', 'on-highlight': '#2b2d2f', 'highlight-soft': '#f4efe4', 'story': '#f6f2ea', 'story-edge': '#9c8456', 'exam': '#eef1f4', 'exam-edge': '#6f8aa3', 'success': '#3f6e4f', 'warning': '#7f6324', 'danger': '#9e4740', 'focus': '#4f6478' },
      dark: { 'bg': '#18191b', 'surface': '#202224', 'raised': '#272a2d', 'ink': '#e8e8e6', 'muted': '#b0b3b5', 'line': '#33363a', 'border': '#7a7e82', 'soft': '#24272a', 'accent': '#a3b6c9', 'on-accent': '#16191c', 'accent-text': '#a3b6c9', 'accent-bright': '#a3b6c9', 'accent-soft': '#2c3540', 'secondary': '#d6c39a', 'highlight': '#d6c39a', 'on-highlight': '#18191b', 'highlight-soft': '#36301f', 'story': '#2a2720', 'story-edge': '#c9b285', 'exam': '#22282e', 'exam-edge': '#9fb5ca', 'success': '#9cc9a8', 'warning': '#dcc58e', 'danger': '#e0a39c', 'focus': '#a3b6c9' } },
    sunset: { label: ['Abendhimmel', 'Sunset sky'], swatches: ['#ec807d', '#77a6eb'], group: 'picked', tints: ['#ec807d', '#f2ab86', '#f7ce97', '#8ec7fa', '#77a6eb', '#b9a3e3'], strength: ['16%', '16%'], iconMix: ['55%', '75%'],
      light: { 'bg': '#fffaf6', 'surface': '#ffffff', 'raised': '#ffffff', 'ink': '#2a2433', 'muted': '#625b6b', 'line': '#f1e6e0', 'border': '#958c99', 'soft': '#fff1ea', 'accent': '#3f72c4', 'on-accent': '#ffffff', 'accent-text': '#3264b0', 'accent-bright': '#77a6eb', 'accent-soft': '#e9f1fd', 'secondary': '#b4443f', 'highlight': '#ec807d', 'on-highlight': '#2a2433', 'highlight-soft': '#fdecea', 'story': '#fff4e6', 'story-edge': '#cf7d2e', 'exam': '#eef5ff', 'exam-edge': '#5d8fdc', 'success': '#1a7f37', 'warning': '#8a5a00', 'danger': '#c62828', 'focus': '#3f72c4' },
      dark: { 'bg': '#1d1a24', 'surface': '#26222f', 'raised': '#2e2a38', 'ink': '#f5f0f6', 'muted': '#c0b8c6', 'line': '#3a3446', 'border': '#857c90', 'soft': '#2b2634', 'accent': '#8ec7fa', 'on-accent': '#1d1a24', 'accent-soft': '#24344d', 'secondary': '#f7ce97', 'highlight': '#f2ab86', 'on-highlight': '#1d1a24', 'highlight-soft': '#3e2a2a', 'story': '#2f2820', 'story-edge': '#f7ce97', 'exam': '#1f2a3d', 'exam-edge': '#8ec7fa', 'success': '#5fd38d', 'warning': '#ffc95c', 'danger': '#ff8a80', 'focus': '#8ec7fa', 'accent-text': '#8ec7fa', 'accent-bright': '#8ec7fa' } },
    cinnamon: { label: ['Zimt & Traube', 'Cinnamon & grape'], swatches: ['#6b5876', '#e8a798'], group: 'picked', tints: ['#6b5876', '#9b4722', '#e8a798', '#edd59e', '#c47f5a', '#9a88a6'], strength: ['13%', '16%'],
      light: { 'bg': '#fbf7ef', 'surface': '#fffdf9', 'raised': '#ffffff', 'ink': '#2e2530', 'muted': '#665a62', 'line': '#eee3d3', 'border': '#998b84', 'soft': '#f8efe0', 'accent': '#6b5876', 'on-accent': '#ffffff', 'accent-soft': '#efe9f2', 'secondary': '#9b4722', 'highlight': '#9b4722', 'on-highlight': '#ffffff', 'highlight-soft': '#f8e8de', 'story': '#fbf1d9', 'story-edge': '#a8822a', 'exam': '#f2edf5', 'exam-edge': '#6b5876', 'success': '#1a7f37', 'warning': '#8a5a00', 'danger': '#c62828', 'focus': '#6b5876', 'accent-text': '#6b5876', 'accent-bright': '#6b5876' },
      dark: { 'bg': '#1d181c', 'surface': '#262025', 'raised': '#2e272d', 'ink': '#f6efe9', 'muted': '#c4b6b1', 'line': '#3d3339', 'border': '#8a7c80', 'soft': '#2b2329', 'accent': '#b9a3c6', 'on-accent': '#1d181c', 'accent-soft': '#3a2e42', 'secondary': '#edd59e', 'highlight': '#e8a798', 'on-highlight': '#1d181c', 'highlight-soft': '#40292a', 'story': '#2e2819', 'story-edge': '#edd59e', 'exam': '#2a2230', 'exam-edge': '#b9a3c6', 'success': '#5fd38d', 'warning': '#ffc95c', 'danger': '#ff8a80', 'focus': '#b9a3c6', 'accent-text': '#b9a3c6', 'accent-bright': '#b9a3c6' } },
    sage: { label: ['Salbei', 'Sage'], swatches: ['#4b606e', '#99a69e'], group: 'picked', tints: ['#4b606e', '#99a69e', '#c3c79f', '#7f97a6', '#22323f', '#a89f86'], strength: ['12%', '15%'],
      light: { 'bg': '#f2f2f2', 'surface': '#ffffff', 'raised': '#ffffff', 'ink': '#22323f', 'muted': '#556169', 'line': '#dfe2dc', 'border': '#8a948e', 'soft': '#eef0e6', 'accent': '#4b606e', 'on-accent': '#ffffff', 'accent-soft': '#e5eaed', 'secondary': '#4f6152', 'highlight': '#99a69e', 'on-highlight': '#22323f', 'highlight-soft': '#ebeee5', 'story': '#f6f5ea', 'story-edge': '#8f8f5e', 'exam': '#eef2f4', 'exam-edge': '#4b606e', 'success': '#1a7f37', 'warning': '#8a5a00', 'danger': '#c62828', 'focus': '#4b606e', 'accent-text': '#4b606e', 'accent-bright': '#4b606e' },
      dark: { 'bg': '#151d24', 'surface': '#1d2730', 'raised': '#24303a', 'ink': '#eef0ea', 'muted': '#b3bcb6', 'line': '#31404b', 'border': '#76858d', 'soft': '#212c35', 'accent': '#b4c2b9', 'on-accent': '#151d24', 'accent-soft': '#2c3a40', 'secondary': '#d6dbc3', 'highlight': '#d6dbc3', 'on-highlight': '#22323f', 'highlight-soft': '#2d3328', 'story': '#262a22', 'story-edge': '#d6dbc3', 'exam': '#1f2b35', 'exam-edge': '#9fb3c0', 'success': '#5fd38d', 'warning': '#ffc95c', 'danger': '#ff8a80', 'focus': '#b4c2b9', 'accent-text': '#b4c2b9', 'accent-bright': '#b4c2b9' } },
    teal: { label: ['Petrol', 'Teal'], swatches: ['#2b7a78', '#3aafa9'], group: 'picked', tints: ['#2b7a78', '#3aafa9', '#7fc8c4', '#4a8fa8', '#5f9e8a', '#17252a'],
      light: { 'bg': '#f4fafa', 'surface': '#feffff', 'raised': '#ffffff', 'ink': '#17252a', 'muted': '#4d5f63', 'line': '#d7e8e7', 'border': '#82999a', 'soft': '#def2f1', 'accent': '#2b7a78', 'on-accent': '#ffffff', 'accent-text': '#236866', 'accent-soft': '#def2f1', 'secondary': '#1f6a68', 'highlight': '#3aafa9', 'on-highlight': '#17252a', 'highlight-soft': '#e3f5f4', 'story': '#fbf6e6', 'story-edge': '#b08a2e', 'exam': '#e8f4f6', 'exam-edge': '#2b7a78', 'success': '#1a7f37', 'warning': '#8a5a00', 'danger': '#c62828', 'focus': '#2b7a78', 'accent-bright': '#2b7a78' },
      dark: { 'bg': '#17252a', 'surface': '#1e3036', 'raised': '#25393f', 'ink': '#e6f4f3', 'muted': '#a7c2c1', 'line': '#2f474d', 'border': '#6f8f92', 'soft': '#213a40', 'accent': '#3aafa9', 'on-accent': '#17252a', 'accent-soft': '#1a3b3c', 'secondary': '#7fd6d1', 'highlight': '#7fd6d1', 'on-highlight': '#17252a', 'highlight-soft': '#1d4442', 'story': '#2a2c22', 'story-edge': '#e0c070', 'exam': '#1c3640', 'exam-edge': '#7fd6d1', 'success': '#5fd38d', 'warning': '#ffc95c', 'danger': '#ff8a80', 'focus': '#3aafa9', 'accent-text': '#3aafa9', 'accent-bright': '#3aafa9' } },
    marine: { label: ['Marine & Koralle', 'Navy & coral'], swatches: ['#374785', '#f76c6c'], group: 'picked', tints: ['#374785', '#f76c6c', '#a8d0e6', '#e8c95a', '#5a6fb5', '#f2a07b'],
      light: { 'bg': '#fbf9f1', 'surface': '#ffffff', 'raised': '#ffffff', 'ink': '#24305e', 'muted': '#555c78', 'line': '#e6e4dc', 'border': '#8c90a4', 'soft': '#eef4f9', 'accent': '#374785', 'on-accent': '#ffffff', 'accent-soft': '#e6ecf6', 'secondary': '#b8363a', 'highlight': '#f76c6c', 'on-highlight': '#1c2448', 'highlight-soft': '#fde8e8', 'story': '#fcf5d6', 'story-edge': '#b0901e', 'exam': '#ebf4fa', 'exam-edge': '#374785', 'success': '#1a7f37', 'warning': '#8a5a00', 'danger': '#c62828', 'focus': '#374785', 'accent-text': '#374785', 'accent-bright': '#374785' },
      dark: { 'bg': '#1c2448', 'surface': '#24305e', 'raised': '#2c3a6e', 'ink': '#f4f2ea', 'muted': '#c0c5dc', 'line': '#3a4a85', 'border': '#7e88b4', 'soft': '#283567', 'accent': '#a8d0e6', 'on-accent': '#1c2448', 'accent-soft': '#33467a', 'secondary': '#f8e9a1', 'highlight': '#f8e9a1', 'on-highlight': '#24305e', 'highlight-soft': '#3c3f4e', 'story': '#2e3150', 'story-edge': '#f8e9a1', 'exam': '#26386a', 'exam-edge': '#a8d0e6', 'success': '#7fe0a6', 'warning': '#ffd56b', 'danger': '#ff9a94', 'focus': '#a8d0e6', 'accent-text': '#a8d0e6', 'accent-bright': '#a8d0e6' } },
    clear: { label: ['Farbsicher (Farbsehschwäche)', 'Colour-safe (colour blindness)'], swatches: ['#0072b2', '#e69f00'], group: 'access', tints: ['#0072b2', '#e69f00', '#009e73', '#cc79a7', '#56b4e9', '#d55e00'],
      light: { 'bg': '#f7f8fa', 'surface': '#ffffff', 'raised': '#ffffff', 'ink': '#1d2129', 'muted': '#565d69', 'line': '#dfe3e9', 'border': '#868e9a', 'soft': '#edf3f8', 'accent': '#0072b2', 'on-accent': '#ffffff', 'accent-text': '#0068a3', 'accent-bright': '#0072b2', 'accent-soft': '#e1eef7', 'secondary': '#9a5a00', 'highlight': '#e69f00', 'on-highlight': '#1d2129', 'highlight-soft': '#fdf1d8', 'story': '#fdf4dc', 'story-edge': '#a36b00', 'exam': '#e8f3fa', 'exam-edge': '#0072b2', 'success': '#00745a', 'warning': '#8a6400', 'danger': '#b8460c', 'focus': '#0072b2' },
      dark: { 'bg': '#121519', 'surface': '#1a1e24', 'raised': '#21262e', 'ink': '#eef1f5', 'muted': '#b2b9c4', 'line': '#2e3540', 'border': '#76808e', 'soft': '#1d2530', 'accent': '#56b4e9', 'on-accent': '#0b1a26', 'accent-text': '#56b4e9', 'accent-bright': '#56b4e9', 'accent-soft': '#163246', 'secondary': '#f0b53d', 'highlight': '#f0b53d', 'on-highlight': '#121519', 'highlight-soft': '#3a2e14', 'story': '#2c2716', 'story-edge': '#f0c25a', 'exam': '#152836', 'exam-edge': '#56b4e9', 'success': '#3fd0a6', 'warning': '#f0e442', 'danger': '#ff8a50', 'focus': '#56b4e9' } },
  };
  const appearanceKey = 'sh-appearance';
  const defaultPalette = 'skymint';
  // Palettes before Nov 2026 (green, violet, blue, orange) map to their nearest new palette.
  const legacyPalettes = { green: 'skymint', blue: 'skymint', violet: 'bubblegum', orange: 'sunshine' };
  const knownPalette = id => palettes[id] ? id : (legacyPalettes[id] || defaultPalette);
  let appearance = { theme: 'light', palette: defaultPalette };
  try { const saved = JSON.parse(localStorage.getItem(appearanceKey) || '{}'); if (['light','dark'].includes(saved.theme)) appearance.theme = saved.theme; if (saved.palette) appearance.palette = knownPalette(saved.palette); } catch (_) {}
  function applyAppearance(persist) {
    const values = palettes[appearance.palette][appearance.theme];
    Object.entries(values).forEach(([name, value]) => document.documentElement.style.setProperty('--design-' + name, value));
    palettes[appearance.palette].tints.forEach((value, i) => document.documentElement.style.setProperty('--design-tint-' + (i + 1), value));
    const strength = palettes[appearance.palette].strength, iconMix = palettes[appearance.palette].iconMix;
    document.documentElement.style.setProperty('--design-icon-mix', iconMix ? iconMix[appearance.theme === 'dark' ? 1 : 0] : '70%');
    document.documentElement.style.setProperty('--design-tint-strength', strength ? strength[appearance.theme === 'dark' ? 1 : 0] : (appearance.theme === 'dark' ? '14%' : '10%'));
    document.documentElement.style.setProperty('--design-scheme', appearance.theme);
    document.documentElement.style.setProperty('--design-shadow', appearance.theme === 'dark' ? '#00000050' : '#21242c1a');
    const dark = appearance.theme === 'dark';
    document.documentElement.style.setProperty('--design-shadow-card', dark ? '0 0 0 1px rgb(255 255 255 / .04), 0 2px 4px rgb(0 0 0 / .35), 0 8px 22px rgb(0 0 0 / .32)' : '0 1px 2px rgb(33 36 44 / .07), 0 4px 14px rgb(33 36 44 / .08)');
    document.documentElement.style.setProperty('--design-shadow-lift', dark ? '0 0 0 1px rgb(255 255 255 / .06), 0 6px 12px rgb(0 0 0 / .4), 0 16px 34px rgb(0 0 0 / .38)' : '0 2px 4px rgb(33 36 44 / .08), 0 12px 28px rgb(33 36 44 / .13)');
    document.documentElement.style.setProperty('--design-shadow-button', dark ? '0 1px 2px rgb(0 0 0 / .4)' : '0 1px 2px rgb(33 36 44 / .12), 0 4px 10px color-mix(in srgb, ' + values.accent + ' 28%, transparent)');
    document.documentElement.dataset.appearanceTheme = appearance.theme;
    document.documentElement.dataset.appearancePalette = appearance.palette;
    document.documentElement.dataset.theme = appearance.theme;
    if (typeof storyMagic === 'function') storyMagic();
    if (typeof syncPickers === 'function') syncPickers();
    try { dispatchEvent(new CustomEvent('sh-appearance', { detail: { theme: appearance.theme, palette: appearance.palette } })); } catch (_) {}
    // Remember the exact tokens so the inline script in every page <head> can apply them before the first paint (no colour flash).
    try { localStorage.setItem('sh-appearance-css', JSON.stringify({ t: appearance.theme, p: appearance.palette, css: document.documentElement.getAttribute('style') || '' })); } catch (_) {}
    if (persist) {
      try { localStorage.setItem(appearanceKey, JSON.stringify(appearance)); localStorage.setItem('sh-theme', appearance.theme); } catch (_) {}
      if (window.SHDesign) window.SHDesign.save({ ...window.SHDesign.get(), theme: appearance.theme, palette: appearance.palette, accent: values.accent, background: values.bg, text: values.ink, box: values.surface }).catch(() => {});
    }
  }
  // Storybook schemes: Garamond fonts, lantern glow and fireflies. The layer is part of the page and scrolls with it:
  // hub pages get it over the whole page height (behind the content), reading pages only inside the header.
  const hubPages = /(^|\/)(index|analysis|physics|linalg|practice|more|path|tips|help|download|account|community|credits|contribute|guest|realm|connect)\.html$|\/$/;
  function storyMagic() {
    const on = palettes[appearance.palette].group === 'story';
    const root = document.documentElement;
    const hub = hubPages.test(location.pathname);
    root.classList.toggle('sh-hub', on && hub);
    if (on && !document.getElementById('sh-sb-fonts')) {
      const l = document.createElement('link'); l.id = 'sh-sb-fonts'; l.rel = 'stylesheet';
      l.href = SH_FONTS;
      document.head.appendChild(l);
    }
    const put = () => {
      const host = hub ? document.body : document.querySelector('header.study-shell');
      let ff = document.querySelector('.sh-ff');
      if (ff && (!on || ff.parentElement !== host)) { ff.remove(); ff = null; }
      if (!on || !host) return;
      ff = document.createElement('div'); ff.className = 'sh-ff' + (hub ? '' : ' sh-ff--head'); ff.setAttribute('aria-hidden', 'true');
      // A small swarm: about ten fireflies per screen height on hubs (four or five on phones), each at a fixed spot of the page,
      // and a dozen in the header of reading pages (Mridul, 23 Nov: "very few fireflies").
      const phone = matchMedia('(max-width:600px)').matches;
      const count = hub ? Math.min(phone ? 40 : 90, Math.max(phone ? 12 : 24, Math.round(document.documentElement.scrollHeight / (phone ? 200 : 90)))) : (phone ? 6 : 12);
      for (let i = 0; i < count; i++) {
        const dot = document.createElement('i');
        dot.style.setProperty('--x', ((i * 37 + 11) % 92 + 4) + '%');
        dot.style.setProperty('--y', (hub ? Math.min(99, (i + .5 + ((i * 7) % 5 - 2) * .18) / count * 100) : ((i * 29 + 17) % 80 + 10)) + '%');
        dot.style.setProperty('--d', '-' + (i * 1.3 % 6.5).toFixed(1) + 's'); // negative delay: every firefly is already glowing when the page opens
        dot.style.setProperty('--s', (7 + i * 1.7 % 4).toFixed(1) + 's');
        // Drift: a loop of up to ~90px (smaller on phones and in the header), 11-21 s per loop, direction varies per firefly.
        const reach = (phone ? .75 : 1) * (hub ? 1 : .7);
        dot.style.setProperty('--dx', Math.round(((i * 53) % 121 - 60) * 1.5 * reach) + 'px');
        dot.style.setProperty('--dy', Math.round(((i * 71 + 23) % 101 - 50) * 1.4 * reach) + 'px');
        dot.style.setProperty('--m', (11 + (i * 2.3) % 10).toFixed(1) + 's');
        ff.append(dot);
      }
      if (hub) host.prepend(ff); else host.append(ff);
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', put, { once: true }); else put();
  }
  // Every Design picker on the page shows the current choice, at once and without a reload.
  function syncPickers() {
    document.querySelectorAll('[data-palette]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.palette === appearance.palette)));
    document.querySelectorAll('[data-theme-choice]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.themeChoice === appearance.theme)));
    document.querySelectorAll('input[name="study-design-theme"]').forEach(input => { input.checked = input.value === appearance.theme; });
  }
  // Read the saved choice again (other tab, or a page restored with the Back button).
  function reloadAppearance() {
    try {
      const next = JSON.parse(localStorage.getItem(appearanceKey) || 'null');
      if (next && ['light','dark'].includes(next.theme) && (next.theme !== appearance.theme || knownPalette(next.palette) !== appearance.palette)) {
        appearance = { theme: next.theme, palette: knownPalette(next.palette) }; applyAppearance(false);
      }
    } catch (_) {}
    syncPickers();
  }
  applyAppearance(false);
  // One place to change the design from any script (Settings, My StudyHub, the AI connector page): every picker follows at once.
  window.SHAppearance = {
    get: () => ({ ...appearance }),
    palettes: Object.keys(palettes),
    setTheme(theme) { if (!['light', 'dark'].includes(theme)) return; appearance.theme = theme; applyAppearance(true); },
    setPalette(id) { appearance.palette = knownPalette(id); applyAppearance(true); },
    reload: () => reloadAppearance()   // apply the saved choice again without saving (used when the account's design arrives)
  };
  addEventListener('storage', event => { if (event.key === appearanceKey) reloadAppearance(); });
  addEventListener('pageshow', event => { if (event.persisted) reloadAppearance(); });
  const source = document.currentScript;
  const base = new URL('../', source.src);
  const path = location.pathname.slice(base.pathname.length);
  const chemistry = path.startsWith('chemie/');
  // Rachel's flashcards app (synced from her repo). Analysis_Lerplatform/ is the Lernkarten start page (one tile per subject);
  // each subject lives in its own folder: analysis/ (also classic.html), linalg/.
  const fcAppPath = 'FlashcardsAnalysis_designspace/Analysis_Lerplatform/';
  const fcApp = path.startsWith(fcAppPath);
  const fcRel = fcApp ? path.slice(fcAppPath.length) : '';
  const fcStart = fcApp && /^(index\.html)?$/.test(fcRel);
  const fcSubject = !fcApp || fcStart ? null : /^linalg[/.]/.test(fcRel) ? 'linalg' : 'analysis';
  // The Chemie course itself is German; its header follows the language of the last StudyHub page (sh-lang).
  let lastLang = null; try { lastLang = localStorage.getItem('sh-lang'); } catch (_) {}
  const langParam = new URLSearchParams(location.search).get('lang');
  const de = chemistry ? (langParam || lastLang) === 'de' : (path.startsWith('de/') || langParam === 'de');
  if (!chemistry && !fcApp && !path.startsWith('dive/')) { try { localStorage.setItem('sh-lang', de ? 'de' : 'en'); } catch (_) {} }
  const prefix = de ? 'de/' : '';
  const file = path.split('/').pop() || 'index.html';
  const L = (german, english) => de ? german : english;
  const sharedPages = new Set(['linalg-moves.html', 'linalg-plan.html', 'linalg-script.html', 'linalg-01.html', 'linalg-02.html', 'linalg-03.html', 'linalg-04.html', 'linalg-05.html', 'linalg-06.html', 'linalg-07.html', 'linalg-08.html', 'linalg-09.html', 'linalg-10.html', 'linalg-11.html', 'linalg-12.html', 'script.html', 'phys-script.html', 'pdf.html']);
  // Informatik is English only: its pages stay the same page, only the header switches language.
  ['informatik.html', 'inf-method.html'].concat(Array.from({ length: 14 }, (_, i) => 'inf-' + String(i + 1).padStart(2, '0') + '.html')).forEach(f => sharedPages.add(f));
  const url = value => { const target = new URL(value, base); if (de && sharedPages.has(value)) target.searchParams.set('lang', 'de'); return target.href; };
  // The header follows the path picked on the home page (sh-path): Chemie only on the Interdisciplinary path.
  let studyPath = null; try { studyPath = localStorage.getItem('sh-path'); } catch (_) {}
  const subjectIds = ['analysis', 'linalg', 'physics', 'informatik', 'chemie'];
  function savedSubjects(pathChoice) {
    try {
      const value = JSON.parse(localStorage.getItem('sh-subjects') || 'null');
      if (Array.isArray(value)) {
        const clean = value.filter((id, index) => subjectIds.includes(id) && value.indexOf(id) === index);
        if (clean.length) return clean;
      }
    } catch (_) {}
    return ['analysis', 'linalg', 'physics'].concat(pathChoice === 'inter' ? ['chemie'] : ['informatik']);
  }
  const subjects = [
    { id: 'analysis', label: 'Analysis I', href: prefix + 'analysis.html' },
    { id: 'physics', label: L('Physik I', 'Physics I'), href: prefix + 'physics.html' },
    { id: 'chemie', label: 'Chemie I (PC)', href: 'chemie/' },
    { id: 'linalg', label: L('Lineare Algebra I', 'Linear Algebra I'), href: prefix + 'linalg.html' },
    { id: 'informatik', label: 'Informatik', href: 'informatik.html' }
  ];
  // flashcards.html#p1-16 is the Physics deck (StudyHub's own cards); it stays on this page.
  let returnHash = '';
  try {
    const destination = JSON.parse(sessionStorage.getItem('sh-login-return'));
    if (destination?.path === location.pathname && /access_token=|[?&]code=/.test(location.hash + location.search)) returnHash = destination.hash;
  } catch (_) {}
  const physCards = !fcApp && !de && file === 'flashcards.html' && (/^#p\d/.test(location.hash) || /^#p\d/.test(returnHash));
  const practiceFor = file === 'practice.html' ? ({ '#analysis': 'analysis', '#physics': 'physics', '#linalg': 'linalg' })[location.hash] : null;
  const subject = chemistry ? 'chemie' : practiceFor ? practiceFor : fcApp ? fcSubject : physCards ? 'physics' : /^(linalg(?:-|\.)|serie-l)/.test(file) ? 'linalg' : /^(informatik\.html|inf-)/.test(file) ? 'informatik' : /^(physics\.html|phys-|serie-p)/.test(file) ? 'physics' : /^(analysis\.html|lesson-|refresher-|serie-a|mock\.html|flashcards\.html|moves\.html|tree\.html|exam-map\.html|skipped\.html|script\.html|docs\.html)$/.test(file) || /^(lesson-|refresher-|serie-a)/.test(file) ? 'analysis' : null;
  if (!fcApp && file === 'flashcards.html' && !physCards) { location.replace(new URL(fcAppPath + 'analysis/index.html?lang=' + (de ? 'de' : 'en') + '#/proof-practice', base).href); return; }
  document.body.classList.add('studyhub-app', 'sh-unified');
  if (subject) document.body.dataset.subject = subject;
  // Course tabs: the same four everywhere (Overview | Lessons | Practice | Resources); Resources opens a small panel.
  const fcHref = fcAppPath + 'index.html?lang=' + (de ? 'de' : 'en');   // the start page
  const fcDeck = id => fcAppPath + id + '/index.html?lang=' + (de ? 'de' : 'en');   // one subject's cards
  const courseTabs = {
    analysis: { overview: prefix + 'analysis.html', lessons: prefix + 'analysis.html#lessons', practice: prefix + 'practice.html#analysis', resources: [
      [L('Mehr üben', 'Practise more'), [[L('Repetition', 'Refresher'), prefix + 'analysis.html#refresher', L('12 Einheiten, eine pro Tag', '12 units, one a day')], [L('Lernkarten', 'Flashcards'), fcDeck('analysis')], [L('Beweiskniffe', 'Proof moves'), prefix + 'moves.html'], [L('Stammbaum der Sätze', 'Theorem tree'), prefix + 'tree.html'], [L('Übungsblätter erklärt', 'Übungsblätter explained'), prefix + 'serie-a01.html'], [L('Probeprüfungen', 'Timed mocks'), prefix + 'mock.html']]],
      [L('Kursmaterial', 'Course material'), [[L('Prüfungsplan', 'Exam plan'), prefix + 'exam-map.html'], [L('Skript', 'Script'), 'script.html'], [L('Prüfungen und Formelsammlung', 'Exams and formula sheets'), prefix + 'docs.html'], [L('Ausgelassene Themen', 'Skipped topics'), prefix + 'skipped.html']]]
    ] },
    physics: { overview: prefix + 'physics.html', lessons: prefix + 'physics.html#lessons', practice: prefix + 'physics.html#tools', resources: [
      [L('Mehr üben', 'Practise more'), [...(de ? [] : [['Flashcards', 'flashcards.html#p1-16']]), [L('Serien erklärt', 'Serien explained'), prefix + 'serie-p01.html'], [L('Probeprüfungen', 'Timed mocks'), prefix + 'mock.html']]],
      [L('Kursmaterial', 'Course material'), [[L('Prüfungsplan', 'Exam plan'), prefix + 'phys-plan.html'], [L('Tafel & Skript', 'Board & script'), prefix + 'phys-board.html'], [L('Skript', 'Script'), 'phys-script.html'], [L('Prüfungen', 'Exams'), prefix + 'phys-docs.html']]]
    ] },
    linalg: { overview: prefix + 'linalg.html', lessons: prefix + 'linalg.html#lessons', practice: prefix + 'practice.html#linalg', resources: [
      [L('Mehr üben', 'Practise more'), [[L('Lernkarten', 'Flashcards'), fcDeck('linalg'), L('123 Karten zum Skript', '123 cards on the script')], [L('Beweistechnik', 'Proof techniques'), 'linalg-moves.html'], [L('Serien erklärt', 'Serien explained'), 'serie-l00.html'], [L('Rezepte', 'Recipes'), 'linalg-recipes.html', L('16 Rechnungen Schritt für Schritt', '16 calculations step by step')], [L('Probeprüfungen', 'Timed mocks'), prefix + 'mock.html']]],
      [L('Kursmaterial', 'Course material'), [[L('Plan und Prüfungslandkarte', 'Plan and exam map'), 'linalg-plan.html'], [L('Prüfungen', 'Exams'), 'linalg-exams.html'], [L('Tafel & Skript', 'Board & script'), 'linalg-board.html'], [L('Skript', 'Script'), 'linalg-script.html'], [L('Ausgelassene Themen', 'Skipped topics'), 'skipped.html#linalg']]]
    ] },
    informatik: { overview: 'informatik.html', lessons: 'informatik.html#lessons', practice: 'inf-method.html', resources: [
      [L('Mehr üben', 'Practise more'), [[L('Aufgabenmethode', 'Task method'), 'inf-method.html']]],
      [L('Kursmaterial', 'Course material'), [[L('Ausgelassene Themen', 'Skipped topics'), 'skipped.html#informatik']]]
    ] },
    chemie: { lessons: 'chemie/#home', practice: 'chemie/#exams', resources: [
      ['', [[L('Wiederholen', 'Refresher'), 'chemie/#review'], [L('Materialien', 'Library'), 'chemie/#library']]]
    ] }
  };
  function activeMode() {
    if (subject === 'chemie') {
      const route = location.hash.slice(1).split('/')[0];
      return ({ review: 'resources', library: 'resources', sources: 'resources', exams: 'practice', training: 'practice' })[route] || 'lessons';
    }
    const hub = { analysis: 'analysis.html', physics: 'physics.html', linalg: 'linalg.html', informatik: 'informatik.html' }[subject];
    if (file === hub) return location.hash === '#lessons' ? 'lessons' : location.hash === '#tools' ? 'practice' : location.hash === '#refresher' ? 'resources' : 'overview';
    if (/^(lesson|phys|linalg|inf)-\d+\.html$/.test(file)) return 'lessons';
    if (/script\.html$|docs\.html$|plan\.html$|board\.html$|exam-map\.html$|skipped\.html$/.test(file)) return 'resources';
    return 'practice';
  }
  function link(text, href, className) {
    const a = document.createElement('a');
    a.textContent = text; a.href = url(href); if (className) a.className = className;
    return a;
  }
  const shell = document.createElement('header'); shell.className = 'study-shell';
  const upper = document.createElement('div'); upper.className = 'study-upper';
  const brand = link('StudyHub', prefix + 'index.html', 'study-brand');
  const star = document.createElement('span'); star.textContent = ' ✦'; star.setAttribute('aria-hidden', 'true'); brand.append(star);
  upper.append(brand);
  // Header (Nov 2026 redesign): StudyHub | Subjects ▾ | Practice | About ▾ on the left; search, language, account and Design on the right.
  // Phones: the same three entries sit in a second row under StudyHub | search | account, so nothing hides behind a ☰.
  const icon = paths => '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + paths + '</svg>';
  const ICONS = {
    search: icon('<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>'),
    chevron: icon('<path d="m7 10 5 5 5-5"/>'),
    palette: icon('<path d="M12 3.5a8.5 8.5 0 1 0 0 17c1.2 0 1.8-.8 1.8-1.7 0-1.3-1.1-1.6-1.1-2.8 0-1 .8-1.8 1.9-1.8h2.1a3.8 3.8 0 0 0 3.8-3.8C20.5 6.6 16.7 3.5 12 3.5Z"/><circle cx="7.6" cy="11" r="1.1"/><circle cx="10.4" cy="7.4" r="1.1"/><circle cx="14.8" cy="7.6" r="1.1"/>')
  };
  const nav = document.createElement('nav'); nav.className = 'study-nav'; nav.setAttribute('aria-label', L('Hauptmenü', 'Main'));
  const pops = [];
  function popover(id, label, current) {
    const wrap = document.createElement('div'); wrap.className = 'study-pop';
    const button = document.createElement('button'); button.type = 'button'; button.className = 'study-nav-item study-pop-button';
    button.id = 'study-' + id + '-button'; button.setAttribute('aria-expanded', 'false'); button.setAttribute('aria-controls', 'study-' + id + '-panel');
    button.innerHTML = '<span></span>' + ICONS.chevron; button.firstChild.textContent = label;
    if (current) button.setAttribute('aria-current', 'true');
    const panelEl = document.createElement('div'); panelEl.className = 'study-pop-panel'; panelEl.id = 'study-' + id + '-panel'; panelEl.hidden = true;
    panelEl.setAttribute('role', 'region'); panelEl.setAttribute('aria-labelledby', button.id);
    wrap.append(button, panelEl);
    const set = open => { button.setAttribute('aria-expanded', String(open)); panelEl.hidden = !open; wrap.classList.toggle('study-pop-open', open); };
    button.addEventListener('click', () => { const open = button.getAttribute('aria-expanded') !== 'true'; pops.forEach(p => p.set(false)); if (design.open) design.open = false; set(open); if (open) panelEl.querySelector('a')?.focus({ preventScroll: true }); });
    pops.push({ wrap, button, panel: panelEl, set });
    return { wrap, panel: panelEl };
  }
  function group(title, items) {
    const box = document.createElement('div'); box.className = 'study-pop-group';
    if (title) { const h = document.createElement('p'); h.className = 'study-pop-label'; h.textContent = title; box.append(h); }
    const ul = document.createElement('ul');
    items.forEach(item => { const li = document.createElement('li'); li.append(item); ul.append(li); });
    box.append(ul); return box;
  }
  function richLink(text, href, note, extra) {
    const a = link(text, href); if (extra) Object.entries(extra).forEach(([k, v]) => a.setAttribute(k, v));
    if (note) { const s = document.createElement('span'); s.className = 'study-pop-note'; s.textContent = note; a.append(s); }
    return a;
  }
  // Subjects: the learner's own subjects first (from the path picked on the home page), then everything else.
  const subjectNotes = { analysis: L('22 Lektionen', '22 lessons'), linalg: L('21 Lektionen', '21 lessons'), physics: L('16 Lektionen', '16 lessons'), chemie: L('27 Lektionen, auf Deutsch', '27 lessons, in German'), informatik: L('14 Lektionen, auf Englisch', '14 lessons') };
  const subjectsPop = popover('subjects', L('Fächer', 'Subjects'), !!subject);
  function renderSubjects(p) {
    const mine = savedSubjects(p);
    const others = subjects.filter(s => !mine.includes(s.id));
    const item = s => { const a = richLink(s.label, s.href, subjectNotes[s.id]); if (subject === s.id) a.setAttribute('aria-current', 'page'); if (s.id === 'chemie') a.dataset.subj = 'chemie'; return a; };
    const ordered = mine.map(id => subjects.find(s => s.id === id));
    subjectsPop.panel.replaceChildren(
      group(p ? L('Deine Fächer', 'Your subjects') : L('Fächer im ersten Jahr', 'First-year subjects'), ordered.map(item)),
      group(L('Alle Fächer entdecken', 'Explore all subjects'), others.map(item).concat([
        richLink(L('Deinen Weg wählen', 'Choose your path'), prefix + 'index.html#' + (p || 'math'), L('Mathematik, Physik oder Interdisziplinär', 'Mathematics, Physics or Interdisciplinary'))
      ])),
      group(L('Auch', 'Also'), [
        richLink(L('Mein StudyHub', 'My StudyHub'), prefix + 'account.html', L('Dein Fortschritt und deine Notizen', 'Your progress and notes')),
        richLink('Exam Dive', 'dive/', L('Das Prüfungsspiel', 'The exam game'))
      ])
    );
  }
  renderSubjects(studyPath);
  nav.append(subjectsPop.wrap);
  // Flashcards for all subjects: one entry next to the subjects, opening the Lernkarten start page.
  const cardsLink = link(L('Lernkarten', 'Flashcards'), fcHref, 'study-nav-item');
  if (fcApp) cardsLink.setAttribute('aria-current', 'page');
  nav.append(cardsLink);
  const practiceLink = link(L('Üben', 'Practice'), prefix + 'practice.html', 'study-nav-item');
  if (file === 'practice.html' || file === 'mock.html') practiceLink.setAttribute('aria-current', 'page');
  nav.append(practiceLink);
  const aboutPop = popover('about', L('Über', 'About'), false);
  aboutPop.panel.append(
    group(L('Über StudyHub', 'About StudyHub'), [
      richLink(L('Über diesen Hub', 'About this hub'), prefix + 'about.html'),
      richLink(L('Team und Dank', 'Team and credits'), 'credits.html'),
      richLink(L('Datenschutz', 'Privacy'), 'privacy.html')
    ]),
    group(L('Hilfe und Mitmachen', 'Help and joining in'), [
      richLink(L('Brauchst du Hilfe?', 'Need help?'), prefix + 'help.html'),
      richLink('Community', prefix + 'community.html'),
      richLink(L('Unterlagen beitragen', 'Contribute notes'), 'contribute.html'),
      richLink(L('Mit deiner KI lernen', 'Study with your AI'), prefix + 'connect.html')
    ]),
    group('', [richLink(L('Alle Seiten', 'All pages'), prefix + 'more.html')])
  );
  nav.append(aboutPop.wrap);
  upper.append(nav);
  // Picking a path on the home page updates the Subjects panel at once (no reload needed); also follows other open tabs.
  const pathChanged = p => { studyPath = p; renderSubjects(p); };
  addEventListener('sh-path', e => pathChanged(e.detail));
  addEventListener('storage', e => { if (e.key === 'sh-path') pathChanged(e.newValue); });
  addEventListener('sh-study-setup', e => { studyPath = e.detail?.degree || studyPath; renderSubjects(studyPath); });
  addEventListener('storage', e => { if (e.key === 'sh-subjects') renderSubjects(studyPath); });
  document.addEventListener('pointerdown', event => { pops.forEach(p => { if (!p.wrap.contains(event.target)) p.set(false); }); });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    pops.forEach(p => { if (p.button.getAttribute('aria-expanded') === 'true') { p.set(false); p.button.focus(); } });
  });

  const utilities = document.createElement('div'); utilities.className = 'study-utilities';
  const searchButton = document.createElement('button'); searchButton.type = 'button'; searchButton.className = 'study-icon-button study-search-button';
  searchButton.setAttribute('aria-label', L('Suchen', 'Search')); searchButton.setAttribute('aria-haspopup', 'dialog');
  searchButton.title = L('Suchen (Strg+K)', 'Search (Ctrl+K)');
  searchButton.innerHTML = ICONS.search;
  utilities.append(searchButton);
  const activityHash = /access_token=|error_description=/.test(location.hash) ? returnHash : location.hash;
  const language = de ? 'en' : 'de';
  const currentApp = file + '?lang=' + language + activityHash;
  const languageTarget = chemistry ? 'chemie/?lang=' + language + activityHash : physCards ? 'de/index.html' : fcApp ? fcAppPath + fcRel.replace(/[^/]*$/, '') + currentApp : sharedPages.has(file) ? currentApp : (de ? file : 'de/' + file);
  const languageLink = link(de ? 'EN' : 'DE', languageTarget, 'study-guest-language');
  languageLink.lang = de ? 'en' : 'de';
  languageLink.setAttribute('aria-label', de ? 'English' : 'Deutsch');
  utilities.append(languageLink);
  const login = link('', prefix + 'account.html', 'study-login');
  login.innerHTML = icon('<circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c.8-3.6 3.6-5.5 7-5.5s6.2 1.9 7 5.5"/>') + '<span class="study-login-word"></span>';
  login.lastChild.textContent = L('Anmelden', 'Log in'); login.setAttribute('aria-label', L('Anmelden', 'Log in'));
  utilities.append(login);
  const design = document.createElement('details'); design.className = 'study-design';
  design.hidden = true;
  const toggle = document.createElement('summary');
  toggle.className = 'study-design-toggle';
  toggle.setAttribute('aria-label', 'Design');
  toggle.innerHTML = ICONS.palette + '<span class="study-design-word">Design</span>';
  design.append(toggle);
  const panel = document.createElement('div'); panel.className = 'study-design-panel';
  const heading = document.createElement('h2'); heading.textContent = 'Design'; panel.append(heading);
  const profileSummary = document.createElement('p'); profileSummary.className = 'study-profile-summary'; panel.append(profileSummary);
  const choices = document.createElement('div');
  choices.className = 'study-profile-links';
  const switchLanguage = link(L('Sprache: English', 'Language: Deutsch'), languageTarget);
  switchLanguage.lang = de ? 'en' : 'de';
  choices.append(switchLanguage);
  panel.append(choices);
  const guestOptions = document.createElement('div'); guestOptions.className = 'study-guest-options';
  const guestSignIn = link(L('Mit ETH-Konto anmelden', 'Sign in with your ETH account'), prefix + 'account.html', 'study-login');
  const guestDesignHint = document.createElement('p'); guestDesignHint.textContent = L('Melde dich mit deinem ETH-Konto an, um das Design zu ändern.', 'Sign in with your ETH account to change the design.');
  guestOptions.append(guestSignIn, guestDesignHint); panel.append(guestOptions);
  // The Design chooser is always open (no dropdown inside the panel): two theme tiles, then one tile per palette.
  const chooser = document.createElement('section'); chooser.className = 'design-chooser'; chooser.setAttribute('aria-label', 'Design');
  const themeTitle = document.createElement('p'); themeTitle.className = 'design-group'; themeTitle.textContent = L('Hell oder dunkel', 'Light or dark');
  const themeOptions = document.createElement('div'); themeOptions.className = 'design-theme-options';
  [['light', L('Hell', 'Light')], ['dark', L('Dunkel', 'Dark')]].forEach(([value, text]) => {
    const b = document.createElement('button'); b.type = 'button'; b.className = 'design-theme-tile'; b.dataset.themeChoice = value;
    b.innerHTML = '<span class="design-theme-dot" aria-hidden="true"></span><span></span>'; b.lastChild.textContent = text;
    b.addEventListener('click', () => window.SHAppearance.setTheme(value));
    themeOptions.append(b);
  });
  chooser.append(themeTitle, themeOptions);
  const colourOptions = document.createElement('div'); colourOptions.className = 'design-colours';
  const groups = { story: L('Märchenbuch', 'Storybook'), fun: L('Bunt', 'Bright'), classic: L('Klassisch', 'Classic'), calm: L('Ruhig', 'Calm'), picked: L('Deine Auswahl', 'Your picks'), access: L('Barrierearm', 'Accessible') };
  let lastGroup = '';
  Object.entries(palettes).forEach(([id, value]) => {
    if (value.group !== lastGroup) { lastGroup = value.group; const h = document.createElement('p'); h.className = 'design-group'; h.textContent = groups[value.group] || ''; colourOptions.append(h); }
    const button = document.createElement('button'); button.type = 'button'; button.className = 'design-tile'; button.dataset.palette = id;
    const swatch = document.createElement('span'); swatch.className = 'design-swatch'; swatch.setAttribute('aria-hidden', 'true');
    swatch.style.setProperty('--sw-bg', value.light.bg); swatch.style.setProperty('--sw-a', value.swatches[0]); swatch.style.setProperty('--sw-b', value.swatches[1]);
    const name = document.createElement('span'); name.className = 'design-tile-name'; name.textContent = value.label[de ? 0 : 1];
    button.append(swatch, name); button.addEventListener('click', () => window.SHAppearance.setPalette(id)); colourOptions.append(button);
  });
  chooser.append(colourOptions);
  const hint = document.createElement('p'); hint.className = 'design-save-hint'; hint.textContent = L('Wird für alle Fächer in diesem Browser gespeichert.', 'Saved for all subjects in this browser.'); chooser.append(hint);
  const appearanceDetails = document.createElement('details'); appearanceDetails.className = 'study-profile-appearance';
  const appearanceSummary = document.createElement('summary'); appearanceSummary.innerHTML = '<strong>' + L('Farbgebung', 'Appearance') + '</strong><span>' + L('Hell, dunkel und Farben', 'Light, dark and colours') + '</span>';
  appearanceDetails.append(appearanceSummary, chooser); panel.append(appearanceDetails);
  const profileActions = document.createElement('div'); profileActions.className = 'study-profile-actions';
  const editStudySetup = document.createElement('button'); editStudySetup.type = 'button'; editStudySetup.className = 'study-profile-action';
  editStudySetup.innerHTML = '<strong>' + L('Nutzer', 'User') + '</strong><span>' + L('Fächer und Lernzeit ändern', 'Change subjects and study time') + '</span>';
  const progressLink = richLink(L('Fortschritt · Mein StudyHub', 'Progress · My StudyHub'), prefix + 'account.html', L('Lektionen, Notizen und Resultate', 'Lessons, notes and results'));
  progressLink.classList.add('study-profile-progress');
  profileActions.append(editStudySetup, progressLink);
  panel.append(profileActions);
  design.append(panel); utilities.append(design);
  // Every picker on the page (header panel, settings, My StudyHub) shows the same choice at once, without a reload.
  function updateDesignPanel() { syncPickers(); }
  updateDesignPanel();
  function positionDesignPanel() {
    if (!design.open || innerWidth > 600) return;
    const top = Math.max(16, Math.min(toggle.getBoundingClientRect().bottom + 8, innerHeight - 160));
    design.style.setProperty('--study-design-top', top + 'px');
  }
  design.addEventListener('toggle', () => { if (design.open) pops.forEach(p => p.set(false)); positionDesignPanel(); });
  addEventListener('resize', positionDesignPanel);
  document.addEventListener('pointerdown', event => { if (!design.contains(event.target)) design.open = false; });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && design.open) { design.open = false; toggle.focus(); } });
  const setupDialog = document.createElement('dialog'); setupDialog.className = 'study-setup-dialog';
  setupDialog.innerHTML = '<form method="dialog" class="study-setup-form"><div class="study-setup-head"><p class="eyebrow">StudyHub</p><h2></h2><p class="study-setup-lead"></p></div>' +
    '<fieldset class="study-setup-degree"><legend>' + L('Was studierst du?', 'What do you study?') + '</legend>' +
    [['math', L('Mathematik', 'Mathematics')], ['physics', L('Physik', 'Physics')], ['inter', L('Interdisziplinäre Naturwissenschaften', 'Interdisciplinary Sciences')], ['other', L('Anderes oder noch offen', 'Something else or undecided')]].map(([value, label]) => '<label><input type="radio" name="degree" value="' + value + '"><span>' + label + '</span></label>').join('') + '</fieldset>' +
    '<fieldset class="study-setup-subjects"><legend>' + L('Deine Fächer', 'Your subjects') + '</legend><p>' + L('Die empfohlenen Fächer sind vorausgewählt. Füge weitere hinzu oder entferne einzelne.', 'Recommended subjects are preselected. Add extras or remove individual subjects.') + '</p>' +
    [['analysis', 'Analysis I'], ['linalg', L('Lineare Algebra I', 'Linear Algebra I')], ['physics', L('Physik I', 'Physics I')], ['informatik', 'Informatik'], ['chemie', L('Allgemeine Chemie I (PC)', 'General Chemistry I (PC)')]].map(([value, label]) => '<label><input type="checkbox" name="subjects" value="' + value + '"><span>' + label + '</span></label>').join('') + '</fieldset>' +
    '<label class="study-setup-time"><span>' + L('Wie viel Zeit möchtest du pro Woche einplanen?', 'How much time would you like to plan each week?') + '</span><select name="weeklyHours">' +
    [2, 4, 6, 8, 10, 12, 15].map(hours => '<option value="' + hours + '">' + hours + ' ' + L('Stunden', 'hours') + '</option>').join('') + '</select></label>' +
    '<p class="study-setup-status" role="status"></p><div class="study-setup-buttons"><button type="button" class="study-button-secondary study-setup-cancel">' + L('Abbrechen', 'Cancel') + '</button><button type="submit" class="study-setup-save">' + L('Speichern', 'Save') + '</button></div></form>';
  document.body.append(setupDialog);
  const setupForm = setupDialog.querySelector('form');
  const setupTitle = setupDialog.querySelector('.study-setup-head h2');
  const setupLead = setupDialog.querySelector('.study-setup-lead');
  const setupCancel = setupDialog.querySelector('.study-setup-cancel');
  const setupSave = setupDialog.querySelector('.study-setup-save');
  const setupStatus = setupDialog.querySelector('.study-setup-status');
  const degreeDefaults = {
    math: ['analysis', 'linalg', 'physics', 'informatik'],
    physics: ['analysis', 'linalg', 'physics', 'informatik'],
    inter: ['analysis', 'linalg', 'physics', 'chemie'],
    other: []
  };
  let setupRequired = false;
  function selectSetupSubjects(ids) {
    setupForm.querySelectorAll('input[name="subjects"]').forEach(input => { input.checked = ids.includes(input.value); });
  }
  setupForm.querySelectorAll('input[name="degree"]').forEach(input => input.addEventListener('change', () => selectSetupSubjects(degreeDefaults[input.value])));
  function openStudySetup(required) {
    const current = window.SH?.studySetup?.read();
    let fallbackDegree = studyPath || 'math';
    if (!degreeDefaults[fallbackDegree]) fallbackDegree = 'other';
    const degree = current?.degree || fallbackDegree;
    const chosen = current?.subjects || savedSubjects(degree);
    let storedHours = 0; try { storedHours = Number(localStorage.getItem('sh-weekly-hours')); } catch (_) {}
    const hours = current?.weeklyHours || storedHours || 6;
    setupForm.elements.degree.value = degree;
    selectSetupSubjects(chosen);
    setupForm.elements.weeklyHours.value = String(hours);
    setupRequired = !!required;
    setupCancel.hidden = false;
    setupCancel.textContent = setupRequired ? L('Später einrichten', 'Set up later') : L('Abbrechen', 'Cancel');
    setupTitle.textContent = setupRequired ? L('Richte dein StudyHub ein', 'Set up your StudyHub') : L('Deine Lern-Einstellungen', 'Your study settings');
    setupLead.textContent = setupRequired ? L('Wähle deinen Studiengang, deine Fächer und eine realistische Lernzeit. Du kannst alles später im Profil ändern.', 'Choose your degree programme, subjects and a realistic study time. You can change everything later from your profile.') : L('Ändere Fächer und Lernzeit einzeln. Dein Fortschritt bleibt erhalten.', 'Change subjects and study time individually. Your progress stays intact.');
    setupSave.textContent = setupRequired ? L('Weiter zu StudyHub', 'Continue to StudyHub') : L('Änderungen speichern', 'Save changes');
    setupStatus.textContent = '';
    design.open = false;
    if (typeof setupDialog.showModal === 'function') setupDialog.showModal(); else setupDialog.setAttribute('open', '');
  }
  setupCancel.addEventListener('click', async () => {
    if (setupRequired) await window.SH?.studySetup?.skip?.();
    if (setupDialog.close) setupDialog.close(); else setupDialog.removeAttribute('open');
    if (setupRequired && file !== 'index.html') location.href = new URL(prefix + 'index.html', base).href;
    setupRequired = false;
  });
  setupDialog.addEventListener('cancel', event => { if (setupRequired) event.preventDefault(); });
  setupForm.addEventListener('submit', async event => {
    event.preventDefault();
    const subjects = Array.from(setupForm.querySelectorAll('input[name="subjects"]:checked')).map(input => input.value);
    setupSave.disabled = true; setupStatus.textContent = '';
    try {
      const saved = await window.SH.studySetup.save({ degree: setupForm.elements.degree.value, subjects, weeklyHours: Number(setupForm.elements.weeklyHours.value), completedAt: Date.now() });
      studyPath = saved.degree;
      renderSubjects(studyPath);
      if (setupDialog.close) setupDialog.close(); else setupDialog.removeAttribute('open');
      if (setupRequired && file !== 'index.html') location.href = new URL(prefix + 'index.html', base).href;
      else if (setupRequired) { history.replaceState(null, '', location.pathname + location.search); scrollTo({ top: 0, behavior: 'smooth' }); }
      setupRequired = false;
    } catch (error) { setupStatus.textContent = error.message; }
    finally { setupSave.disabled = false; }
  });
  editStudySetup.addEventListener('click', () => openStudySetup(false));
  window.SHStudySetup = { open: () => openStudySetup(false) };
  upper.append(utilities); shell.append(upper);
  if (subject) {
    const lower = document.createElement('nav'); lower.className = 'study-modes'; lower.setAttribute('aria-label', L('Bereiche im Fach', 'Subject modes'));
    const t = courseTabs[subject];
    [['overview', L('Übersicht', 'Overview')], ['lessons', L('Lektionen', 'Lessons')], ['practice', L('Üben', 'Practice')]].forEach(([id, label]) => {
      if (!t[id]) return; const a = link(label, t[id]); a.dataset.mode = id; lower.append(a);
    });
    const res = popover('resources-' + subject, L('Materialien', 'Resources'), false);
    res.wrap.classList.add('study-mode-pop'); res.wrap.querySelector('button').className = 'study-mode-button study-pop-button'; res.wrap.querySelector('button').dataset.mode = 'resources';
    t.resources.forEach(([title, items]) => res.panel.append(group(title, items.map(([label, href, note]) => richLink(label, href, note)))));
    lower.append(res.wrap);
    shell.append(lower);
  }
  // Generated pages already contain this header (make_github.py writes the same markup); swap in the live one without a layout jump.
  const prebuilt = document.querySelector('header.study-shell');
  if (prebuilt) prebuilt.replaceWith(shell); else document.body.prepend(shell);
  shell.querySelectorAll('.study-pop-panel a').forEach(a => a.addEventListener('click', () => pops.forEach(p => p.set(false))));
  // Storybook fireflies on reading pages live inside the header, so they scroll away with it.
  if (typeof storyMagic === 'function') storyMagic();

  // Search: the magnifier (or Ctrl/Cmd+K, or "/") opens a search box over the page. Results come from the Toolbox index, grouped by type.
  let searchDialog = null;
  function openSearch() {
    if (!searchDialog) searchDialog = buildSearch();
    pops.forEach(p => p.set(false)); design.open = false;
    if (typeof searchDialog.showModal === 'function') searchDialog.showModal(); else searchDialog.setAttribute('open', '');
    document.documentElement.classList.add('study-search-on');
    const input = searchDialog.querySelector('input'); input.focus(); input.select();
  }
  searchButton.addEventListener('click', openSearch);
  document.addEventListener('keydown', event => {
    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(event.target.tagName) || event.target.isContentEditable;
    if ((event.key === 'k' || event.key === 'K') && (event.metaKey || event.ctrlKey) && !event.altKey) { event.preventDefault(); openSearch(); }
    else if (event.key === '/' && !typing && !event.metaKey && !event.ctrlKey && !event.altKey && !document.querySelector('dialog[open]')) { event.preventDefault(); openSearch(); }
  });
  function buildSearch() {
    const dialog = document.createElement('dialog'); dialog.className = 'study-search-dialog'; dialog.setAttribute('aria-label', L('Suche', 'Search'));
    dialog.innerHTML = '<form method="dialog" class="study-search-form" role="search"><label class="study-search-field"><span class="study-visually-hidden"></span>' + ICONS.search +
      '<input type="search" autocomplete="off" spellcheck="false" enterkeyhint="search"></label><button type="submit" class="study-search-close"></button></form>' +
      '<p class="study-search-status" role="status" aria-live="polite"></p><div class="study-search-results"></div>';
    const input = dialog.querySelector('input'); const status = dialog.querySelector('.study-search-status'); const results = dialog.querySelector('.study-search-results');
    dialog.querySelector('.study-visually-hidden').textContent = L('Suchbegriff', 'Search for');
    input.placeholder = L('Lektion, Satz, Aufgabe, Seite …', 'Lesson, theorem, exercise, page …');
    const close = dialog.querySelector('.study-search-close'); close.textContent = L('Schliessen', 'Close'); close.setAttribute('aria-label', L('Suche schliessen', 'Close search'));
    dialog.addEventListener('close', () => { document.documentElement.classList.remove('study-search-on'); searchButton.focus({ preventScroll: true }); });
    dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
    const pageBase = new URL(prefix, base);
    const quick = [
      [L('Üben', 'Practice'), prefix + 'practice.html'], [L('Probeprüfungen', 'Mock exams'), prefix + 'mock.html'],
      [L('Lernkarten', 'Flashcards'), fcAppPath + 'index.html?lang=' + (de ? 'de' : 'en')], ['Exam Dive', 'dive/'],
      [L('Weltkarte', 'Realm map'), prefix + 'realm.html'], [L('Stammbaum der Sätze', 'Theorem tree'), prefix + 'tree.html'],
      [L('Werkzeugkasten', 'Toolbox'), prefix + 'toolbox.html'], [L('Mein StudyHub', 'My StudyHub'), prefix + 'account.html']
    ];
    const GROUPS = [
      ['lessons', L('Lektionen', 'Lessons'), ['sec']],
      ['exercises', L('Aufgaben und Beweise', 'Exercises and proofs'), ['ex', 'proof']],
      ['practice', L('Üben: Definitionen, Sätze, Kniffe', 'Practice: definitions, theorems, moves'), ['def', 'thm', 'move', 'recipe', 'word']],
      ['pages', L('Seiten', 'Pages'), ['page']]
    ];
    const SUBJ = { a: 'Analysis I', p: L('Physik I', 'Physics I'), g: 'StudyHub' };
    const fold = s => String(s).toLowerCase().replace(/ß/g, 'ss').normalize('NFKD').replace(/[̀-ͯ]/g, '');
    const TEX = { alpha: 'α', beta: 'β', gamma: 'γ', delta: 'δ', varepsilon: 'ε', epsilon: 'ε', lambda: 'λ', mu: 'μ', pi: 'π', sigma: 'σ', omega: 'ω', infty: '∞', forall: '∀', exists: '∃', in: '∈', subseteq: '⊆', to: '→', le: '≤', leq: '≤', ge: '≥', geq: '≥', neq: '≠', cdot: '·', sum: 'Σ', int: '∫', sqrt: '√', mathbb: '', mathrm: '', operatorname: '', emptyset: '∅', times: '×', partial: '∂', nabla: '∇', vec: '', frac: '', dot: '', ddot: '', bar: '', hat: '', left: '', right: '', quad: ' ', qquad: ' ', iff: '⇔', implies: '⇒', approx: '≈' };
    const plain = s => String(s).replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, '’')
      .replace(/\$+([^$]*)\$+/g, (m, tex) => tex.replace(/\\([a-zA-Z]+)/g, (x, n) => n in TEX ? TEX[n] : n).replace(/\\[,;:! ]/g, ' ').replace(/[{}]/g, '').replace(/\\\\/g, ' ').replace(/\^/g, '^').replace(/_/g, '')).replace(/\s+/g, ' ').trim();
    let index = null, loading = null;
    function load() {
      if (loading) return loading;
      status.textContent = L('Suche wird geladen …', 'Loading the search …');
      const src = new URL('assets/search-' + (de ? 'de' : 'en') + '.json', base);
      loading = fetch(src).then(r => { if (!r.ok) throw new Error(r.status); return r.json(); }).then(data => {
        index = data.map(e => { const title = plain(e[2]); return { e, title, where: plain(e[3]), t: fold(title), w: ' ' + fold(e[6] || '') + ' ' }; });
        status.textContent = ''; run();
      }).catch(() => { status.textContent = L('Die Suche konnte nicht geladen werden. Versuch es im Werkzeugkasten.', 'The search could not be loaded. Try the Toolbox instead.'); loading = null; });
      return loading;
    }
    function score(x, words, phrase) {
      let s = 0;
      for (const w of words) {
        if (x.t.includes(w)) s += (' ' + x.t).includes(' ' + w) ? 6 : 4;
        else if (x.w.includes(' ' + w)) s += 2;
        else return 0;
      }
      if (words.length > 1 && x.t.includes(phrase)) s += 6;
      return s + ({ page: 3, def: 2, thm: 2, sec: 1 }[x.e[0]] || 0);
    }
    function entry(text, href, meta) {
      const a = document.createElement('a'); a.className = 'study-search-hit'; a.href = href;
      const t = document.createElement('span'); t.className = 'study-search-title'; t.textContent = text; a.append(t);
      if (meta) { const m = document.createElement('span'); m.className = 'study-search-meta'; m.textContent = meta; a.append(m); }
      return a;
    }
    function section(title, nodes) {
      const s = document.createElement('section'); s.className = 'study-search-group';
      const h = document.createElement('h3'); h.textContent = title; s.append(h);
      const ul = document.createElement('ul'); nodes.forEach(n => { const li = document.createElement('li'); li.append(n); ul.append(li); }); s.append(ul);
      return s;
    }
    function run() {
      const raw = input.value.trim(); const phrase = fold(raw); const words = phrase.split(/[^a-z0-9]+/).filter(w => w.length > 1 || /\d/.test(w));
      if (!words.length) {
        status.textContent = '';
        results.replaceChildren(section(L('Direkt zu', 'Go straight to'), quick.map(([t, h]) => entry(t, url(h)))));
        return;
      }
      if (!index) { load(); return; }
      const hits = index.map(x => ({ x, s: score(x, words, phrase) })).filter(h => h.s).sort((a, b) => b.s - a.s);
      const groupsOut = GROUPS.map(([id, title, kinds]) => {
        const list = hits.filter(h => kinds.includes(h.x.e[0])).slice(0, 6);
        return list.length ? section(title, list.map(h => entry(h.x.title, new URL(h.x.e[4], pageBase).href, [SUBJ[h.x.e[1]], h.x.where].filter(Boolean).join(' · ')))) : null;
      }).filter(Boolean);
      const all = entry(L('Alle Treffer im Werkzeugkasten', 'All results in the Toolbox'), url(prefix + 'toolbox.html') + '?q=' + encodeURIComponent(raw) + '#search');
      all.classList.add('study-search-all');
      status.textContent = hits.length ? (hits.length === 1 ? L('1 Treffer', '1 result') : hits.length + L(' Treffer', ' results')) : L('Nichts gefunden. Versuch weniger Wörter oder den Wortanfang.', 'Nothing found. Try fewer words or the start of a word.');
      results.replaceChildren(...groupsOut, all);
    }
    let timer; input.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(run, 120); });
    input.addEventListener('focus', () => { if (input.value.trim()) load(); }, { once: true });
    dialog.addEventListener('keydown', event => {
      if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
      const links = Array.from(results.querySelectorAll('a')); if (!links.length) return;
      event.preventDefault();
      const at = links.indexOf(document.activeElement);
      const next = event.key === 'ArrowDown' ? (at < 0 ? 0 : Math.min(at + 1, links.length - 1)) : (at <= 0 ? -1 : at - 1);
      if (next < 0) input.focus(); else links[next].focus();
    });
    input.addEventListener('keydown', event => { if (event.key === 'Enter') { const first = results.querySelector('a'); if (first && input.value.trim()) { event.preventDefault(); location.href = first.href; } } });
    document.body.append(dialog);
    run();
    return dialog;
  }
  function updateMode() { shell.querySelectorAll('[data-mode]').forEach(a => { if (a.dataset.mode === activeMode()) a.setAttribute('aria-current', a.tagName === 'A' ? 'page' : 'true'); else a.removeAttribute('aria-current'); }); }
  updateMode(); addEventListener('hashchange', updateMode);
  const main = document.querySelector('main');
  const lessonMatch = /^(lesson|phys|refresher|linalg|serie|inf)-[ap]?\d+\.html$/.test(file);
  const publicLearningPage = fcApp || lessonMatch || /^(flashcards|practice|mock|moves|linalg-moves|tree|toolbox|skipped)\.html$/.test(file);
  const gate = document.createElement('section');
  gate.className = 'study-login-prompt';
  gate.hidden = true;
  gate.innerHTML = '<h2></h2><p></p><div class="study-sync-actions"><button type="button" class="study-action"></button><button type="button" class="study-sync-dismiss"></button></div><p role="status"></p>';
  const gateTitle = gate.querySelector('h2');
  const gateText = gate.querySelector('p');
  const gateButton = gate.querySelector('button');
  const gateStatus = gate.querySelector('[role="status"]');
  gateButton.textContent = L('Mit Google anmelden', 'Log in with Google');
  if (main && (publicLearningPage || chemistry)) main.before(gate);

  const gateDismiss = gate.querySelector('.study-sync-dismiss');
  gateDismiss.textContent = L('Nicht jetzt', 'Not now');
  let syncHintDismissed = false;
  try { syncHintDismissed = localStorage.getItem('sh-sync-hint-dismissed') === '1'; } catch (_) {}
  gateDismiss.addEventListener('click', () => {
    syncHintDismissed = true;
    try { localStorage.setItem('sh-sync-hint-dismissed', '1'); } catch (_) {}
    updateGate();
  });

  function startLogin(button, status) {
    button.setAttribute('aria-disabled', 'true');
    if (status) status.textContent = '';
    window.SH.signIn().catch(() => {
      button.removeAttribute('aria-disabled');
      if (status) status.textContent = L('Anmeldung fehlgeschlagen. Bitte versuche es erneut.', 'Could not log in. Please try again.');
      else location.href = login.href;
    });
  }
  login.addEventListener('click', event => {
    if (!window.SH || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
    event.preventDefault();
    if (!login.hasAttribute('aria-disabled')) startLogin(login);
  });
  gateButton.addEventListener('click', () => {
    if (window.SH && !gateButton.hasAttribute('aria-disabled')) startLogin(gateButton, gateStatus);
  });
  function updateGate() {
    // Only the already-protected Chemie activities require authentication.
    // Public lessons and practice must remain usable even while auth is pending.
    const protectedActivity = chemistry && /^#(?:lesson|review|training|exams)(?:\/|$)/.test(location.hash);
    if (!main || (!publicLearningPage && !chemistry)) return;
    const pending = !window.SH || window.SH.authPending;
    const signedIn = !!window.SH?.user;
    const locked = protectedActivity && !signedIn;
    main.classList.toggle('study-locked', locked);
    gate.classList.toggle('study-sync-hint', !protectedActivity);
    gate.hidden = protectedActivity ? !locked : pending || signedIn || syncHintDismissed;
    gateTitle.textContent = protectedActivity
      ? pending ? L('Anmeldung wird geprüft', 'Checking sign-in') : L('Bitte melde dich an', 'Please log in')
      : L('Deinen Lernstand synchronisieren', 'Sync your progress');
    gateText.textContent = protectedActivity
      ? pending ? '' : L('Melde dich an, um diese geschützte Aktivität zu öffnen.', 'Log in to open this protected activity.')
      : L('Alles funktioniert auch ohne Konto. Melde dich optional an, um deinen Lernstand auf deinen Geräten zu synchronisieren.', 'Everything works without an account. Optionally log in to save your place and sync across your devices.');
    gateButton.hidden = pending;
    gateDismiss.hidden = protectedActivity;
  }

  const lessonKind = lessonMatch && subject ? subject + '-lesson' : '';
  let lessonOwner;
  function rememberLesson() {
    if (!lessonKind || !window.SH?.user) return;
    const section = Array.from(main.querySelectorAll('h2[id], h3[id]')).filter(h => h.getBoundingClientRect().top < 130 && h.getClientRects().length).pop();
    const target = new URL(location.href);
    const requestedSection = document.getElementById(target.hash.slice(1));
    const previous = window.SH.resume?.read(lessonKind);
    // Returning to the navigation bar shouldn't erase the reading position.
    if (!section && !requestedSection && previous?.href && new URL(previous.href, base).pathname === target.pathname) return;
    target.hash = section?.id || (requestedSection?.closest('main') === main ? requestedSection.id : '');
    window.SH.resume?.write(lessonKind, { href: target.pathname + target.search + target.hash, title: main.querySelector('h1')?.textContent.trim() });
  }
  if (lessonKind && main) {
    let scrollTimer;
    addEventListener('scroll', () => { clearTimeout(scrollTimer); scrollTimer = setTimeout(rememberLesson, 250); }, { passive: true });
    addEventListener('pagehide', rememberLesson);
    addEventListener('hashchange', () => requestAnimationFrame(rememberLesson));
  }

  const continueKinds = ['analysis-lesson', 'physics-lesson', 'linalg-lesson', 'informatik-lesson', 'chemie-lesson', 'analysis-cards', 'physics-cards', 'chemie-cards', 'dive'];
  const continueLabels = {
    'analysis-lesson': 'Analysis I', 'physics-lesson': L('Physik I', 'Physics I'),
    'linalg-lesson': L('Lineare Algebra I', 'Linear Algebra I'), 'informatik-lesson': 'Informatik', 'chemie-lesson': 'Chemie I (PC)',
    'analysis-cards': L('Analysis-Lernkarten', 'Analysis flashcards'), 'physics-cards': L('Physik-Lernkarten', 'Physics flashcards'),
    'chemie-cards': L('Chemie-Lernkarten', 'Chemistry flashcards'), dive: 'Exam Dive'
  };
  const continueSection = document.createElement('section');
  continueSection.className = 'study-continue';
  continueSection.hidden = true;
  const continueHeading = document.createElement('h2');
  continueHeading.textContent = L('Hier hast du aufgehört', 'Pick up where you left off');
  const continueList = document.createElement('div');
  continueSection.append(continueHeading, continueList);
  if (main?.classList.contains('study-home')) main.querySelector('.home-hero')?.after(continueSection);
  function analysisFlashcardResume() {
    const user = window.SH?.user;
    if (!user) return null;
    try {
      const deck = JSON.parse(localStorage.getItem('studyhub-analysis-flashcards-v1'));
      const value = deck?.users?.[user.id]?.lastSession;
      if (!value?.hash?.startsWith('#/')) return null;
      return { href: new URL(fcDeck('analysis') + value.hash, base).href, at: value.at };
    } catch (_) { return null; }
  }
  function renderContinue() {
    if (!continueSection.isConnected) return;
    const available = continueKinds.map(kind => ({ kind, entry: window.SH?.resume?.read(kind) || (kind === 'analysis-cards' ? analysisFlashcardResume() : null) })).filter(item => item.entry?.href);
    available.sort((a, b) => b.entry.at - a.entry.at);
    continueList.replaceChildren();
    available.forEach(({ kind, entry }) => {
      const target = new URL(entry.href, base);
      if (target.origin !== base.origin || !target.pathname.startsWith(base.pathname)) return;
      const item = document.createElement('a');
      item.href = target.href;
      const label = document.createElement('strong');
      label.textContent = continueLabels[kind];
      const title = document.createElement('span');
      title.textContent = entry.title || L('Fortsetzen', 'Resume');
      item.append(label, title);
      continueList.append(item);
    });
    continueSection.hidden = !continueList.childElementCount;
  }

  function updateAccountUI() {
    const account = window.SH;
    const signedIn = !!account?.user;
    design.hidden = false;
    profileSummary.hidden = !signedIn;
    choices.hidden = false;
    guestOptions.hidden = signedIn;
    guestOptions.style.cssText = 'display:grid;gap:12px';
    guestDesignHint.style.margin = '0';
    choices.style.marginTop = '0';
    heading.style.marginBottom = signedIn ? '' : '12px';
    appearanceDetails.hidden = !signedIn;
    profileActions.hidden = !signedIn;
    appearanceDetails.classList.toggle('study-profile-appearance-guest', !signedIn);
    appearanceDetails.open = false;
    heading.textContent = signedIn ? L('Profil', 'Profile') : L('Anmelden', 'Sign in');
    toggle.classList.toggle('study-profile-toggle', signedIn);
    toggle.style.cssText = signedIn ? '' : 'min-width:88px!important;width:auto!important;padding-inline:12px!important';
    toggle.setAttribute('aria-label', signedIn ? L('Nutzerprofil öffnen', 'Open user profile') : L('Anmelden und Sprache', 'Sign in and language'));
    toggle.innerHTML = signedIn ? '<span class="study-profile-icon" aria-hidden="true"></span>' : '<span>' + L('Anmelden', 'Sign in') + '</span>';
    login.hidden = true;
    languageLink.hidden = true;
    if (signedIn) profileSummary.textContent = account?.profile?.nickname || account?.user?.email || L('Angemeldet', 'Signed in');

    if (signedIn && new URLSearchParams(location.search).get('settings') === '1') {
      design.open = true;
      const settingsUrl = new URL(location.href);
      settingsUrl.searchParams.delete('settings');
      history.replaceState(null, '', settingsUrl);
    }
    editStudySetup.disabled = !!account?.accountDataPending;
    if (signedIn && !account?.accountDataPending && !account?.studySetup?.read() && !account?.studySetup?.skipped?.() && !setupDialog.open) {
      openStudySetup(true);
    }
    updateGate();
    if (lessonKind && main && signedIn && lessonOwner !== account.user.id) { lessonOwner = account.user.id; rememberLesson(); }
    if (!signedIn) lessonOwner = null;
    renderContinue();
  }
  document.addEventListener('sh-auth', updateAccountUI);
  addEventListener('hashchange', updateGate);
  addEventListener('pageshow', renderContinue);
  addEventListener('storage', event => { if (event.key?.startsWith('sh-resume:')) renderContinue(); });
  updateAccountUI();

  const courseArt = {
    analysis: L('Eine Funktion und ihre Tangente', 'A function and its tangent'),
    physics: L('Wurfparabeln mit gleicher Anfangsgeschwindigkeit', 'Projectile paths at the same launch speed'),
    linalg: L('Wie eine lineare Abbildung ein Gitter verändert', 'How a linear map transforms a grid'),
    informatik: L('Ein Aufrufbaum: jeder Aufruf teilt sich in zwei kleinere', 'A call tree: each call splits into two smaller ones')
  };

  function drawCourseGraphic(canvas) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const theme = getComputedStyle(document.documentElement);
    const accent = theme.getPropertyValue('--design-accent');
    const muted = theme.getPropertyValue('--design-muted');
    const secondary = theme.getPropertyValue('--design-secondary');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save(); ctx.scale(2, 2);
    function trace(points, colour, width = 1) {
      ctx.beginPath(); ctx.strokeStyle = colour; ctx.lineWidth = width; ctx.lineCap = 'round';
      points.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
      ctx.stroke();
    }
    ctx.globalAlpha = .22;
    for (let x = 26; x <= 386; x += 20) trace([[x, 16], [x, 216]], muted);
    for (let y = 16; y <= 216; y += 20) trace([[26, y], [386, y]], muted);
    ctx.globalAlpha = 1;
    const axisX = subject === 'physics' ? 46 : 206;
    const axisY = subject === 'physics' ? 196 : 116;
    if (subject !== 'informatik') {
      trace([[26, axisY], [386, axisY]], muted);
      trace([[axisX, 16], [axisX, 216]], muted);
    }
    if (subject === 'informatik') {
      // a binary call tree, three levels deep, with the path of one call highlighted
      const node = (x, y, on) => { ctx.beginPath(); ctx.arc(x, y, on ? 7 : 5.5, 0, 2 * Math.PI); ctx.fillStyle = on ? accent : secondary; ctx.fill(); };
      const grow = (x, y, dx, depth, on) => {
        if (depth === 3) return node(x, y, on);
        [-1, 1].forEach(s => { const lit = on && s < 0; trace([[x, y], [x + s * dx, y + 52]], lit ? accent : secondary, lit ? 3 : 1.5); grow(x + s * dx, y + 52, dx / 2, depth + 1, lit); });
        node(x, y, on);
      };
      grow(206, 40, 88, 0, true);
    } else if (subject === 'analysis') {
      const f = x => 126 - 40 * Math.tanh((x - 200) / 60) - .0007 * (x - 200) ** 2;
      trace(Array.from({ length: 71 }, (_, i) => [36 + 5 * i, f(36 + 5 * i)]), accent, 3);
      const x = 204, y = f(x), slope = (f(x + .01) - f(x - .01)) / .02;
      ctx.setLineDash([5, 5]); trace([[138, y - 66 * slope], [294, y + 90 * slope]], secondary, 2); ctx.setLineDash([]);
      ctx.fillStyle = accent; ctx.beginPath(); ctx.arc(x, y, 5, 0, 2 * Math.PI); ctx.fill();
    } else if (subject === 'physics') {
      [27, 44, 64].forEach((angle, i) => {
        const radians = angle * Math.PI / 180, speed = 18, gravity = 1.9;
        const duration = 2 * speed * Math.sin(radians) / gravity;
        trace(Array.from({ length: 51 }, (_, j) => {
          const t = duration * j / 50;
          return [46 + speed * Math.cos(radians) * t * 1.9, 196 - (speed * Math.sin(radians) * t - gravity * t * t / 2) * 1.7];
        }), i === 1 ? accent : secondary, i === 1 ? 3 : 1.5);
      });
    } else {
      const transform = (x, y) => [206 + 37 * x + 21 * y, 116 - 23 * y + 8 * x];
      for (let i = -2; i <= 2; i++) {
        trace([transform(i, -2), transform(i, 2)], accent, i === 0 ? 3 : 1.25);
        trace([transform(-2, i), transform(2, i)], secondary, i === 0 ? 3 : 1.25);
      }
    }
    ctx.restore();
  }

  function makeCourseOverview() {
    if (!main || !courseArt[subject] || file !== ({ analysis: 'analysis.html', physics: 'physics.html', linalg: 'linalg.html', informatik: 'informatik.html' })[subject]) return;
    const intro = main.querySelector(':scope > header');
    const lessonName = { analysis: 'lesson', physics: 'phys', linalg: 'linalg', informatik: 'inf' }[subject];
    const lessonPath = new RegExp('/' + lessonName + '-\\d+\\.html$');
    const lessons = Array.from(main.querySelectorAll('.lessons > .lcard > a[href]')).filter(a => lessonPath.test(new URL(a.href).pathname));
    if (!intro || !lessons.length) return;
    const hero = document.createElement('section'); hero.className = 'study-course-intro';
    const actions = document.createElement('div'); actions.className = 'study-course-actions';
    const primary = document.createElement('a'); primary.className = 'study-action';
    const browse = document.createElement('a'); browse.href = '#lessons'; browse.textContent = L('Alle Lektionen', 'All lessons');
    const stat = document.createElement('p'); stat.className = 'study-course-count';
    actions.append(primary, browse);
    intro.append(actions, stat);
    const graphic = document.createElement('figure'); graphic.className = 'study-course-graphic';
    const canvas = document.createElement('canvas'); canvas.width = 824; canvas.height = 464; canvas.setAttribute('aria-hidden', 'true');
    const caption = document.createElement('figcaption'); caption.textContent = courseArt[subject];
    graphic.append(canvas, caption);
    intro.before(hero); hero.append(intro, graphic);
    drawCourseGraphic(canvas);
    toggle.addEventListener('click', () => requestAnimationFrame(() => drawCourseGraphic(canvas)));
    addEventListener('sh-appearance', () => drawCourseGraphic(canvas));

    function renderProgress() {
      const signedIn = !!window.SH?.user;
      const record = signedIn && window.SH.resume?.read(subject + '-lesson');
      const progress = window.SH?.courseProgress?.() || {};
      const finished = a => progress[new URL(a.href).pathname.split('/').pop()]?.done;
      const next = lessons.find(a => !finished(a));
      const resume = record && lessons.some(a => new URL(a.href).pathname === new URL(record.href, base).pathname && !finished(a));
      primary.href = resume ? record.href : (next || lessons[0]).href;
      primary.textContent = resume ? L('Lektion fortsetzen', 'Resume lesson') : L('Lektion öffnen', 'Open lesson');
      const count = lessons.filter(finished).length;
      stat.textContent = signedIn ? L(count + ' / ' + lessons.length + ' Lektionen abgeschlossen', count + ' / ' + lessons.length + ' lessons completed') : L(lessons.length + ' Lektionen', lessons.length + ' lessons');
    }
    document.addEventListener('sh-auth', renderProgress);
    addEventListener('pageshow', renderProgress);
    renderProgress();
  }
  makeCourseOverview();

  function showChemistryProgress() {
    const progress = window.SH?.user ? window.SH.courseProgress() : null;
    const done = progress && Object.keys(progress).filter(key => /^chemie-\d+\.html$/.test(key) && progress[key].done).length;
    document.querySelectorAll('[data-chemie-progress]').forEach(el => {
      el.textContent = progress ? done + ' / 27 ' + L('Lektionen abgeschlossen', 'lessons completed') : L('27 Lektionen', '27 lessons');
    });
  }
  document.addEventListener('sh-auth', showChemistryProgress);
  showChemistryProgress();
})();

/* Links that can point at something not there yet: the other language's page (not every page is translated) and the
   ready-made PDF (not built for every page). Check first; if it is missing, go to that language's home page, or open the
   print dialog ("Save as PDF") instead of a 404. */
document.addEventListener('click', e => {
  const a = e.target.closest?.('a.sh-pdf, a.study-guest-language, .study-profile-links a[lang]');
  if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  let url; try { url = new URL(a.href); } catch (err) { return; }
  if (url.origin !== location.origin) return;
  e.preventDefault();
  const pdf = a.classList.contains('sh-pdf');
  fetch(url.href, { method: 'HEAD', cache: 'no-store' }).then(r => r.ok, () => true).then(ok => {
    if (ok && pdf) { const t = document.createElement('a'); t.href = url.href; t.download = a.getAttribute('download') || ''; document.body.append(t); t.click(); t.remove(); }
    else if (ok) location.href = url.href;
    else if (pdf) window.print();
    else location.href = new URL('index.html', url).href;
  });
});
