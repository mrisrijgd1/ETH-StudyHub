/* One shared shell for every subject. Course tabs above, subject modes below. */
(function () {
  'use strict';
  const palettes = {
    storybook: {"label": ["Mokka & Kiefer (Original)", "Mocha & pine (original)"], "swatches": ["#2f5a42", "#94692a"], "group": "story", "tints": ["#2f5a42", "#94692a", "#2f5a42", "#263a2e", "#e3cb93", "#6f6350"], "strength": ["14%", "16%"], "light": {"bg": "#ebe2d4", "surface": "#f5efe5", "raised": "#f8f4ea", "ink": "#2c251c", "muted": "#6f6350", "line": "#d6c8b2", "border": "#6f6350", "soft": "#e2e8da", "accent": "#2f5a42", "on-accent": "#f8f4ea", "accent-text": "#2f5a42", "accent-bright": "#2f5a42", "accent-soft": "#e2e8da", "secondary": "#94692a", "highlight": "#94692a", "on-highlight": "#f8f4ea", "highlight-soft": "#f2e6d0", "story": "#f2e6d0", "story-edge": "#94692a", "exam": "#e9e8dd", "exam-edge": "#2f5a42", "success": "#2f6b2f", "warning": "#8a5300", "danger": "#a02020", "focus": "#2f5a42", "head": "#263a2e", "glow": "rgba(150,110,50,.11)", "spark": "rgba(150,110,50,.4)", "brand": "#e3cb93"}, "dark": {"bg": "#15120f", "surface": "#1e1a15", "raised": "#1c1813", "ink": "#e6ddcd", "muted": "#a89c89", "line": "#36302a", "border": "#a89c89", "soft": "#1f2b23", "accent": "#86b394", "on-accent": "#10150f", "accent-text": "#86b394", "accent-bright": "#86b394", "accent-soft": "#1f2b23", "secondary": "#d4a961", "highlight": "#d4a961", "on-highlight": "#10150f", "highlight-soft": "#241d14", "story": "#241d14", "story-edge": "#d4a961", "exam": "#1a1d18", "exam-edge": "#86b394", "success": "#7fcf7f", "warning": "#e0a84a", "danger": "#ff8a80", "focus": "#86b394", "head": "#e0c48e", "glow": "rgba(212,169,97,.12)", "spark": "rgba(240,210,150,.75)", "brand": "#e0c48e"}},
    "sb-coffee": {"label": ["Kaffeepapier", "Coffee paper"], "swatches": ["#7a4f2a", "#95662c"], "group": "story", "tints": ["#7a4f2a", "#95662c", "#4f6b47", "#4a3321", "#e9c995", "#75644f"], "strength": ["14%", "16%"], "light": {"bg": "#ede3d3", "surface": "#f6efe4", "raised": "#fff8ee", "ink": "#2e241b", "muted": "#75644f", "line": "#d6c6ad", "border": "#75644f", "soft": "#eadcc6", "accent": "#7a4f2a", "on-accent": "#fff8ee", "accent-text": "#7a4f2a", "accent-bright": "#7a4f2a", "accent-soft": "#eadcc6", "secondary": "#95662c", "highlight": "#95662c", "on-highlight": "#fff8ee", "highlight-soft": "#f3e6cf", "story": "#f3e6cf", "story-edge": "#95662c", "exam": "#ebe7dc", "exam-edge": "#4f6b47", "success": "#2f6b2f", "warning": "#8a5300", "danger": "#a02020", "focus": "#7a4f2a", "head": "#4a3321", "glow": "rgba(160,110,50,.13)", "spark": "rgba(150,100,40,.45)", "brand": "#e9c995"}, "dark": {"bg": "#17120e", "surface": "#211912", "raised": "#201812", "ink": "#e8dccb", "muted": "#ad9d88", "line": "#3d3025", "border": "#ad9d88", "soft": "#33271b", "accent": "#d9a865", "on-accent": "#1a120b", "accent-text": "#d9a865", "accent-bright": "#d9a865", "accent-soft": "#33271b", "secondary": "#d9a865", "highlight": "#d9a865", "on-highlight": "#1a120b", "highlight-soft": "#261c13", "story": "#261c13", "story-edge": "#d9a865", "exam": "#1d1a16", "exam-edge": "#a9c2a0", "success": "#7fcf7f", "warning": "#e0a84a", "danger": "#ff8a80", "focus": "#d9a865", "head": "#ecd2a6", "glow": "rgba(217,168,101,.14)", "spark": "rgba(245,205,140,.75)", "brand": "#e2c08d"}},
    "sb-taiga": {"label": ["Taigawald", "Taiga forest"], "swatches": ["#2f5a42", "#8a6d26"], "group": "story", "tints": ["#2f5a42", "#8a6d26", "#3c5b6e", "#24402f", "#dcc98f", "#5d6b62"], "strength": ["14%", "16%"], "light": {"bg": "#e8ebe3", "surface": "#f5f6f0", "raised": "#f7faf4", "ink": "#1f2722", "muted": "#5d6b62", "line": "#cdd5c8", "border": "#5d6b62", "soft": "#dde8dc", "accent": "#2f5a42", "on-accent": "#f7faf4", "accent-text": "#2f5a42", "accent-bright": "#2f5a42", "accent-soft": "#dde8dc", "secondary": "#8a6d26", "highlight": "#8a6d26", "on-highlight": "#f7faf4", "highlight-soft": "#eef0e3", "story": "#eef0e3", "story-edge": "#8a6d26", "exam": "#e5ebec", "exam-edge": "#3c5b6e", "success": "#2f6b2f", "warning": "#8a5300", "danger": "#a02020", "focus": "#2f5a42", "head": "#24402f", "glow": "rgba(47,90,66,.10)", "spark": "rgba(60,100,60,.4)", "brand": "#dcc98f"}, "dark": {"bg": "#0f1513", "surface": "#17201d", "raised": "#15201c", "ink": "#dfe4dc", "muted": "#94a39a", "line": "#283530", "border": "#94a39a", "soft": "#1c2c25", "accent": "#8fbf9a", "on-accent": "#0d1411", "accent-text": "#8fbf9a", "accent-bright": "#8fbf9a", "accent-soft": "#1c2c25", "secondary": "#d6b874", "highlight": "#d6b874", "on-highlight": "#0d1411", "highlight-soft": "#1b2420", "story": "#1b2420", "story-edge": "#d6b874", "exam": "#171f22", "exam-edge": "#9db8c9", "success": "#7fcf7f", "warning": "#e0a84a", "danger": "#ff8a80", "focus": "#8fbf9a", "head": "#cfdcc4", "glow": "rgba(143,191,154,.12)", "spark": "rgba(225,245,170,.75)", "brand": "#d6c48f"}},
    "sb-misty": {"label": ["Nebeltaiga", "Misty taiga"], "swatches": ["#2b5d5a", "#85692a"], "group": "story", "tints": ["#2b5d5a", "#85692a", "#3e4f86", "#234046", "#cfdcdc", "#5a686d"], "strength": ["14%", "16%"], "light": {"bg": "#e6eaea", "surface": "#f4f6f6", "raised": "#f6fafa", "ink": "#1d2528", "muted": "#5a686d", "line": "#cbd4d6", "border": "#5a686d", "soft": "#dbe8e6", "accent": "#2b5d5a", "on-accent": "#f6fafa", "accent-text": "#2b5d5a", "accent-bright": "#2b5d5a", "accent-soft": "#dbe8e6", "secondary": "#85692a", "highlight": "#85692a", "on-highlight": "#f6fafa", "highlight-soft": "#edeee6", "story": "#edeee6", "story-edge": "#85692a", "exam": "#e3e7f0", "exam-edge": "#3e4f86", "success": "#2f6b2f", "warning": "#8a5300", "danger": "#a02020", "focus": "#2b5d5a", "head": "#234046", "glow": "rgba(43,93,90,.10)", "spark": "rgba(40,80,100,.4)", "brand": "#cfdcdc"}, "dark": {"bg": "#101418", "surface": "#182027", "raised": "#172027", "ink": "#dde4e6", "muted": "#93a1a7", "line": "#29343b", "border": "#93a1a7", "soft": "#1b2c2c", "accent": "#8cc0b5", "on-accent": "#0d1415", "accent-text": "#8cc0b5", "accent-bright": "#8cc0b5", "accent-soft": "#1b2c2c", "secondary": "#c9b27a", "highlight": "#c9b27a", "on-highlight": "#0d1415", "highlight-soft": "#1a2226", "story": "#1a2226", "story-edge": "#c9b27a", "exam": "#181e27", "exam-edge": "#a4b4dd", "success": "#7fcf7f", "warning": "#e0a84a", "danger": "#ff8a80", "focus": "#8cc0b5", "head": "#d4e0dc", "glow": "rgba(140,192,181,.12)", "spark": "rgba(215,240,245,.75)", "brand": "#c9d6d8"}},
    "sb-starlit": {"label": ["Sternenindigo", "Starlit indigo"], "swatches": ["#2f45a8", "#946a12"], "group": "story", "tints": ["#2f45a8", "#946a12", "#2f45a8", "#1f2a6b", "#f0cf7d", "#595e82"], "strength": ["14%", "16%"], "light": {"bg": "#e9eaf3", "surface": "#f7f7fc", "raised": "#ffffff", "ink": "#191c33", "muted": "#595e82", "line": "#d0d3e6", "border": "#595e82", "soft": "#e0e4f8", "accent": "#2f45a8", "on-accent": "#ffffff", "accent-text": "#2f45a8", "accent-bright": "#2f45a8", "accent-soft": "#e0e4f8", "secondary": "#946a12", "highlight": "#946a12", "on-highlight": "#ffffff", "highlight-soft": "#f3eedf", "story": "#f3eedf", "story-edge": "#946a12", "exam": "#e6eaf8", "exam-edge": "#2f45a8", "success": "#2f6b2f", "warning": "#8a5300", "danger": "#a02020", "focus": "#2f45a8", "head": "#1f2a6b", "glow": "rgba(47,69,168,.10)", "spark": "rgba(40,60,140,.4)", "brand": "#f0cf7d"}, "dark": {"bg": "#0b0e1c", "surface": "#141a30", "raised": "#151a33", "ink": "#e3e5f1", "muted": "#9ca2c0", "line": "#262c4a", "border": "#9ca2c0", "soft": "#2a2a3a", "accent": "#f0c46a", "on-accent": "#0b0e1c", "accent-text": "#f0c46a", "accent-bright": "#f0c46a", "accent-soft": "#2a2a3a", "secondary": "#f0c46a", "highlight": "#f0c46a", "on-highlight": "#0b0e1c", "highlight-soft": "#1a1b2a", "story": "#1a1b2a", "story-edge": "#f0c46a", "exam": "#121a30", "exam-edge": "#8fc8ff", "success": "#7fcf7f", "warning": "#e0a84a", "danger": "#ff8a80", "focus": "#f0c46a", "head": "#f0d896", "glow": "rgba(240,196,106,.15)", "spark": "rgba(255,255,255,.8)", "brand": "#f0cf7d"}},
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
    // Remember the exact tokens so the inline script in every page <head> can apply them before the first paint (no colour flash).
    try { localStorage.setItem('sh-appearance-css', JSON.stringify({ t: appearance.theme, p: appearance.palette, css: document.documentElement.getAttribute('style') || '' })); } catch (_) {}
    if (persist) {
      try { localStorage.setItem(appearanceKey, JSON.stringify(appearance)); localStorage.setItem('sh-theme', appearance.theme); } catch (_) {}
      if (window.SHDesign) window.SHDesign.save({ ...window.SHDesign.get(), theme: appearance.theme, accent: values.accent, background: values.bg, text: values.ink, box: values.surface }).catch(() => {});
    }
  }
  // Storybook schemes: Garamond fonts, lantern glow and fireflies (hub pages: whole screen; reading pages: only the top).
  const hubPages = /(^|\/)(index|analysis|physics|linalg|practice|more|path|tips|help|download|account|community|credits|contribute|guest|realm|connect)\.html$|\/$/;
  function storyMagic() {
    const on = palettes[appearance.palette].group === 'story';
    const root = document.documentElement;
    root.classList.toggle('sh-hub', on && hubPages.test(location.pathname));
    if (on && !document.getElementById('sh-sb-fonts')) {
      const l = document.createElement('link'); l.id = 'sh-sb-fonts'; l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=EB+Garamond:ital,wght@0,400;0,600;1,400&display=swap';
      document.head.appendChild(l);
    }
    const put = () => {
      let ff = document.querySelector('.sh-ff');
      if (on && !ff && document.body) { ff = document.createElement('div'); ff.className = 'sh-ff'; ff.setAttribute('aria-hidden', 'true'); ff.innerHTML = '<i></i>'.repeat(12); document.body.prepend(ff); }
      if (!on && ff) ff.remove();
    };
    if (document.body) put(); else document.addEventListener('DOMContentLoaded', put, { once: true });
  }
  applyAppearance(false);
  addEventListener('storage', event => { if (event.key === appearanceKey) { try { const next = JSON.parse(event.newValue); if (next && ['light','dark'].includes(next.theme)) { appearance = { theme: next.theme, palette: knownPalette(next.palette) }; applyAppearance(false); updateDesignPanel(); } } catch (_) {} } });
  const source = document.currentScript;
  const base = new URL('../', source.src);
  const path = location.pathname.slice(base.pathname.length);
  const chemistry = path.startsWith('chemie/');
  // Rachel's flashcards app (synced from her repo). The Analysis "Flashcards" tab opens it.
  const fcAppPath = 'FlashcardsAnalysis_designspace/Analysis_Lerplatform/';
  const fcApp = path.startsWith(fcAppPath);
  // The Chemie course itself is German; its header follows the language of the last StudyHub page (sh-lang).
  let lastLang = null; try { lastLang = localStorage.getItem('sh-lang'); } catch (_) {}
  const de = chemistry ? lastLang === 'de' : (path.startsWith('de/') || new URLSearchParams(location.search).get('lang') === 'de');
  if (!chemistry && !fcApp && !path.startsWith('dive/')) { try { localStorage.setItem('sh-lang', de ? 'de' : 'en'); } catch (_) {} }
  const prefix = de ? 'de/' : '';
  const file = path.split('/').pop() || 'index.html';
  const L = (german, english) => de ? german : english;
  const sharedPages = new Set(['linalg-moves.html', 'linalg-plan.html', 'linalg-script.html', 'linalg-01.html', 'linalg-02.html', 'linalg-03.html', 'linalg-04.html', 'linalg-05.html', 'linalg-06.html', 'linalg-07.html', 'linalg-08.html', 'linalg-09.html', 'linalg-10.html', 'linalg-11.html', 'linalg-12.html', 'script.html', 'phys-script.html', 'pdf.html']);
  const url = value => { const target = new URL(value, base); if (de && sharedPages.has(value)) target.searchParams.set('lang', 'de'); return target.href; };
  // The header follows the path picked on the home page (sh-path): Chemie only on the Interdisciplinary path.
  let studyPath = null; try { studyPath = localStorage.getItem('sh-path'); } catch (_) {}
  const subjects = [
    { id: 'analysis', label: 'Analysis I', href: prefix + 'analysis.html' },
    { id: 'physics', label: L('Physik I', 'Physics I'), href: prefix + 'physics.html' },
    { id: 'chemie', label: 'Chemie I (PC)', href: 'chemie/' },
    { id: 'linalg', label: L('Lineare Algebra I', 'Linear Algebra I'), href: prefix + 'linalg.html' }
  ].filter(item => item.id !== 'chemie' || studyPath === 'inter' || chemistry);
  // flashcards.html#p1-16 is the Physics deck (StudyHub's own cards); it stays on this page.
  const physCards = !fcApp && !de && file === 'flashcards.html' && /^#p\d/.test(location.hash);
  const practiceFor = file === 'practice.html' ? ({ '#physics': 'physics', '#linalg': 'linalg' })[location.hash] : null;
  const subject = chemistry ? 'chemie' : practiceFor ? practiceFor : fcApp ? 'analysis' : physCards ? 'physics' : /^linalg(?:-|\.)/.test(file) ? 'linalg' : /^(physics\.html|phys-|serie-p)/.test(file) ? 'physics' : /^(analysis\.html|lesson-|refresher-|serie-a|practice\.html|mock\.html|flashcards\.html|moves\.html|tree\.html|exam-map\.html|skipped\.html|script\.html|docs\.html)$/.test(file) || /^(lesson-|refresher-|serie-a)/.test(file) ? 'analysis' : null;
  if (!fcApp && file === 'flashcards.html' && !physCards) { location.replace(new URL(fcAppPath + 'index.html' + (de ? '?lang=de' : '') + '#/proof-practice', base).href); return; }
  document.body.classList.add('studyhub-app', 'sh-unified');
  if (subject) document.body.dataset.subject = subject;
  const modes = {
    analysis: [
      ['lessons', L('Lektionen', 'Lessons'), prefix + 'analysis.html#lessons'],
      ['revision', L('Repetition', 'Refresher'), prefix + 'analysis.html#refresher'],
      ['practice', L('Üben', 'Practice'), prefix + 'practice.html#analysis'],
      ['cards', L('Lernkarten', 'Flashcards'), fcAppPath + 'index.html' + (de ? '?lang=de' : '')],
      ['plan', L('Prüfungsplan', 'Exam plan'), prefix + 'exam-map.html'],
      ['script', L('Skript', 'Script'), 'script.html'],
      ['exams', L('Prüfungen', 'Exams'), prefix + 'docs.html']
    ],
    physics: [
      ['lessons', L('Lektionen', 'Lessons'), prefix + 'physics.html#lessons'],
      ['practice', L('Üben', 'Practice'), prefix + 'physics.html#tools'],
      // the Physics deck exists in English only so far
      ...(de ? [] : [['cards', 'Flashcards', 'flashcards.html#p1-16']]),
      ['plan', L('Prüfungsplan', 'Exam plan'), prefix + 'phys-plan.html'],
      ['script', L('Skript', 'Script'), 'phys-script.html'],
      ['board', L('Tafel & Skript', 'Board & script'), prefix + 'phys-board.html'],
      ['exams', L('Prüfungen', 'Exams'), prefix + 'phys-docs.html']
    ],
    linalg: [
      ['lessons', L('Lektionen', 'Lessons'), prefix + 'linalg.html#lessons'],
      ['practice', L('Üben', 'Practice'), 'practice.html#linalg'],
      ['moves', L('Beweistechnik', 'Proof techniques'), 'linalg-moves.html'],
      ['plan', L('Prüfungsplan', 'Exam plan'), 'linalg-plan.html'],
      ['script', L('Skript', 'Script'), 'linalg-script.html']
    ],
    chemie: [
      ['lessons', L('Lektionen', 'Lessons'), 'chemie/#home'],
      ['review', L('Wiederholen', 'Refresher'), 'chemie/#review'],
      ['exams', L('Üben & Prüfungen', 'Practice'), 'chemie/#exams'],
      ['library', L('Materialien', 'Library'), 'chemie/#library']
    ]
  };
  function activeMode() {
    if (subject === 'chemie') {
      const route = location.hash.slice(1).split('/')[0];
      return ({ review: 'review', exams: 'exams', training: 'exams', library: 'library', sources: 'library' })[route] || 'lessons';
    }
    if (location.hash === '#tools' && subject === 'physics') return 'practice';
    if (file === 'linalg-moves.html') return 'moves';
    if (location.hash === '#refresher' || /^refresher-/.test(file)) return 'revision';
    if (/script\.html$/.test(file)) return 'script';
    if (/docs\.html$/.test(file)) return 'exams';
    if (/plan\.html$|exam-map\.html$/.test(file)) return 'plan';
    if (/board\.html$/.test(file)) return 'board';
    if (fcApp || /flashcards\.html$/.test(file)) return 'cards';
    if (/practice\.html$|mock\.html$|moves\.html$|tree\.html$|^serie-/.test(file)) return 'practice';
    return 'lessons';
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
  const courses = document.createElement('nav'); courses.className = 'study-subjects'; courses.setAttribute('aria-label', L('Fächer', 'Subjects'));
  subjects.forEach(item => { const a = link(item.label, item.href); if (subject === item.id) a.setAttribute('aria-current', 'page'); courses.append(a); });
  // Exam Dive (Rachel's game, dive/): a game, not a course, so it gets its own marker
  const dive = link('Exam Dive', 'dive/', 'study-game'); const diveIcon = document.createElement('span'); diveIcon.textContent = '🎮 '; diveIcon.setAttribute('aria-hidden', 'true'); dive.prepend(diveIcon); if (path.startsWith('dive/')) dive.setAttribute('aria-current', 'page'); const brk = document.createElement('span'); brk.className = 'study-break'; brk.setAttribute('aria-hidden', 'true'); courses.append(brk);
  courses.append(dive);
  // Phones: 'More' sits in the subject bar next to Exam Dive (the utility row keeps My StudyHub, language and Design)
  courses.append(link(L('Mehr', 'More'), prefix + 'more.html', 'study-more-sub'));
  upper.append(courses);
  const utilities = document.createElement('nav'); utilities.className = 'study-utilities'; utilities.setAttribute('aria-label', L('Persönlicher Bereich', 'Personal area'));
  utilities.append(link(L('Fortschritt', 'My StudyHub'), prefix + 'account.html', 'study-progress'));
  utilities.append(link(L('Mehr', 'More'), prefix + 'more.html'));
  const appLangTarget = (() => { const u = new URL(location.href); u.searchParams.set('lang', de ? 'en' : 'de'); return u.pathname.split('/').pop() + u.search + u.hash; })();
  const languageTarget = chemistry ? null : fcApp ? appLangTarget : sharedPages.has(file) ? file + (de ? '?lang=en' : '?lang=de') : (de ? file : 'de/' + file);
  if (languageTarget) utilities.append(link(de ? 'EN' : 'DE', languageTarget));
  const design = document.createElement('details'); design.className = 'study-design';
  const toggle = document.createElement('summary'); toggle.textContent = 'Design'; design.append(toggle);
  const panel = document.createElement('div'); panel.className = 'study-design-panel';
  const heading = document.createElement('h2'); heading.textContent = L('Dein Design', 'Your design'); panel.append(heading);
  const themes = document.createElement('fieldset');
  const themeLegend = document.createElement('legend'); themeLegend.textContent = L('Darstellung', 'Appearance'); themes.append(themeLegend);
  const themeOptions = document.createElement('div'); themeOptions.className = 'design-theme-options';
  [['light', L('Hell', 'Light')], ['dark', L('Dunkel', 'Dark')]].forEach(([value, text]) => {
    const label = document.createElement('label'); const input = document.createElement('input'); input.type = 'radio'; input.name = 'study-design-theme'; input.value = value;
    input.addEventListener('change', () => { appearance.theme = value; applyAppearance(true); updateDesignPanel(); }); label.append(input, document.createTextNode(text)); themeOptions.append(label);
  }); themes.append(themeOptions); panel.append(themes);
  const colours = document.createElement('fieldset'); const colourLegend = document.createElement('legend'); colourLegend.textContent = L('Farbwelt', 'Colour palette'); colours.append(colourLegend);
  const colourOptions = document.createElement('div'); colourOptions.className = 'design-colours';
  const groups = { story: L('Märchenbuch', 'Storybook'), fun: L('Bunt', 'Bright'), classic: L('Klassisch', 'Classic'), calm: L('Ruhig', 'Calm'), picked: L('Deine Auswahl', 'Your picks'), access: L('Barrierearm', 'Accessible') };
  let lastGroup = '';
  Object.entries(palettes).forEach(([id, value]) => {
    if (value.group !== lastGroup) { lastGroup = value.group; const h = document.createElement('p'); h.className = 'design-group'; h.textContent = groups[value.group] || ''; colourOptions.append(h); }
    const button = document.createElement('button'); button.type = 'button'; button.dataset.palette = id;
    const swatch = document.createElement('span'); swatch.className = 'design-swatch'; swatch.setAttribute('aria-hidden', 'true'); swatch.style.background = 'linear-gradient(135deg,' + value.swatches[0] + ' 50%,' + value.swatches[1] + ' 50%)';
    button.append(swatch, document.createTextNode(value.label[de ? 0 : 1])); button.addEventListener('click', () => { appearance.palette = id; applyAppearance(true); updateDesignPanel(); }); colourOptions.append(button);
  }); colours.append(colourOptions); panel.append(colours);
  const hint = document.createElement('p'); hint.className = 'design-save-hint'; hint.textContent = L('Wird für alle Fächer in diesem Browser gespeichert.', 'Saved for all subjects in this browser.'); panel.append(hint);
  design.append(panel); utilities.append(design);
  function updateDesignPanel() {
    design.querySelectorAll('input[name="study-design-theme"]').forEach(input => { input.checked = input.value === appearance.theme; });
    design.querySelectorAll('[data-palette]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.palette === appearance.palette)));
  }
  updateDesignPanel();
  document.addEventListener('pointerdown', event => { if (!design.contains(event.target)) design.open = false; });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && design.open) { design.open = false; toggle.focus(); } });
  upper.append(utilities); shell.append(upper);
  if (subject) {
    const lower = document.createElement('nav'); lower.className = 'study-modes'; lower.setAttribute('aria-label', L('Bereiche im Fach', 'Subject modes'));
    modes[subject].forEach(([id, label, href]) => { const a = link(label, href); a.dataset.mode = id; lower.append(a); });
    shell.append(lower);
  }
  // Generated pages already contain this header (make_github.py writes the same markup); swap in the live one without a layout jump.
  const prebuilt = document.querySelector('header.study-shell');
  if (prebuilt) prebuilt.replaceWith(shell); else document.body.prepend(shell);
  function updateMode() { shell.querySelectorAll('[data-mode]').forEach(a => { if (a.dataset.mode === activeMode()) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); }); }
  updateMode(); addEventListener('hashchange', updateMode);
  // The header link keeps one fixed name ("Progress") whether or not you are signed in.
  let progress = {}; try { progress = JSON.parse(localStorage.getItem('studyhub-chemie-v1') || '{}'); } catch (_) {}
  document.querySelectorAll('[data-chemie-progress]').forEach(el => { el.textContent = (progress.done || []).length + ' / 27 ' + L('Lektionen abgeschlossen', 'lessons completed'); });
})();
