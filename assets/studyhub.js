/* One shared shell for every subject. Course tabs above, subject modes below. */
(function () {
  'use strict';
  const palettes = {
    storybook: { label: ['Märchenbuch', 'Storybook'], swatches: ['#7a2e1d', '#c98700'], group: 'story', tints: ['#7a2e1d', '#2f5d50', '#b8860b', '#4b3a7a', '#a3432b', '#3b6a8a'], strength: ['16%', '16%'],
      light: { 'bg': '#f4ead5', 'surface': '#fbf5e6', 'raised': '#fffaf0', 'ink': '#3a2a1a', 'muted': '#6a553f', 'line': '#dcc9a6', 'border': '#9a8460', 'soft': '#efe2c4', 'accent': '#7a2e1d', 'on-accent': '#fff8ea', 'accent-text': '#7a2e1d', 'accent-bright': '#a3432b', 'accent-soft': '#f0dccb', 'secondary': '#2f5d50', 'highlight': '#c98700', 'on-highlight': '#2b1c00', 'highlight-soft': '#f6e6b8', 'story': '#fff1cf', 'story-edge': '#b8860b', 'exam': '#efe3f2', 'exam-edge': '#6b3f7a', 'success': '#2f6b2f', 'warning': '#8a5300', 'danger': '#a02020', 'focus': '#7a2e1d' },
      dark: { 'bg': '#1d1710', 'surface': '#262015', 'raised': '#30291b', 'ink': '#f0e3c8', 'muted': '#c4b08f', 'line': '#43392a', 'border': '#8a7757', 'soft': '#2a2316', 'accent': '#e39a80', 'on-accent': '#2a1208', 'accent-text': '#e39a80', 'accent-bright': '#e39a80', 'accent-soft': '#4a2a1e', 'secondary': '#8fc9b4', 'highlight': '#e0b550', 'on-highlight': '#2b1c00', 'highlight-soft': '#4a3a14', 'story': '#3a2f14', 'story-edge': '#d9a93a', 'exam': '#31263a', 'exam-edge': '#b894c8', 'success': '#7fcf7f', 'warning': '#e0a84a', 'danger': '#ff8a80', 'focus': '#e39a80' } },
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
    // Remember the exact tokens so the inline script in every page <head> can apply them before the first paint (no colour flash).
    try { localStorage.setItem('sh-appearance-css', JSON.stringify({ t: appearance.theme, p: appearance.palette, css: document.documentElement.getAttribute('style') || '' })); } catch (_) {}
    if (persist) {
      try { localStorage.setItem(appearanceKey, JSON.stringify(appearance)); localStorage.setItem('sh-theme', appearance.theme); } catch (_) {}
      if (window.SHDesign) window.SHDesign.save({ ...window.SHDesign.get(), theme: appearance.theme, accent: values.accent, background: values.bg, text: values.ink, box: values.surface }).catch(() => {});
    }
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
  const de = chemistry || path.startsWith('de/') || new URLSearchParams(location.search).get('lang') === 'de' || (fcApp && document.documentElement.lang === 'de' && !new URLSearchParams(location.search).has('lang'));
  const prefix = de ? 'de/' : '';
  const file = path.split('/').pop() || 'index.html';
  const L = (german, english) => de ? german : english;
  const sharedPages = new Set(['linalg-moves.html', 'linalg-plan.html', 'linalg-script.html', 'linalg-01.html', 'linalg-02.html', 'linalg-03.html', 'linalg-04.html', 'linalg-05.html', 'linalg-06.html', 'linalg-07.html', 'linalg-08.html', 'linalg-09.html', 'linalg-10.html', 'linalg-11.html', 'linalg-12.html', 'script.html', 'phys-script.html', 'pdf.html']);
  const url = value => { const target = new URL(value, base); if (de && sharedPages.has(value)) target.searchParams.set('lang', 'de'); return target.href; };
  const subjects = [
    { id: 'analysis', label: 'Analysis I', href: prefix + 'analysis.html' },
    { id: 'physics', label: L('Physik I', 'Physics I'), href: prefix + 'physics.html' },
    { id: 'chemie', label: 'Chemie I (PC)', href: 'chemie/' },
    { id: 'linalg', label: L('Lineare Algebra I', 'Linear Algebra I'), href: prefix + 'linalg.html' }
  ];
  // flashcards.html#p1-16 is the Physics deck (StudyHub's own cards); it stays on this page.
  let returnHash = '';
  try {
    const destination = JSON.parse(sessionStorage.getItem('sh-login-return'));
    if (destination?.path === location.pathname && /access_token=|[?&]code=/.test(location.hash + location.search)) returnHash = destination.hash;
  } catch (_) {}
  const physCards = !fcApp && !de && file === 'flashcards.html' && (/^#p\d/.test(location.hash) || /^#p\d/.test(returnHash));
  const subject = chemistry ? 'chemie' : fcApp ? 'analysis' : physCards ? 'physics' : /^linalg(?:-|\.)/.test(file) ? 'linalg' : /^(physics\.html|phys-|serie-p)/.test(file) ? 'physics' : /^(analysis\.html|lesson-|refresher-|serie-a|practice\.html|mock\.html|flashcards\.html|moves\.html|tree\.html|exam-map\.html|skipped\.html|script\.html|docs\.html)$/.test(file) || /^(lesson-|refresher-|serie-a)/.test(file) ? 'analysis' : null;
  if (!fcApp && file === 'flashcards.html' && !physCards) { location.replace(new URL(fcAppPath + 'index.html?lang=' + (de ? 'de' : 'en') + '#/proof-practice', base).href); return; }
  document.body.classList.add('studyhub-app', 'sh-unified');
  if (subject) document.body.dataset.subject = subject;
  const modes = {
    analysis: [
      ['lessons', L('Lektionen', 'Lessons'), prefix + 'analysis.html#lessons'],
      ['revision', L('Repetition', 'Revision'), prefix + 'analysis.html#refresher'],
      ['practice', L('Üben', 'Practice'), prefix + 'practice.html'],
      ['cards', L('Lernkarten', 'Flashcards'), fcAppPath + 'index.html?lang=' + (de ? 'de' : 'en')],
      ['plan', L('Prüfungsplan', 'Exam plan'), prefix + 'exam-map.html'],
      ['script', L('Skript', 'Script'), 'script.html'],
      ['exams', L('Prüfungen', 'Exams'), prefix + 'docs.html']
    ],
    physics: [
      ['lessons', L('Lektionen', 'Lessons'), prefix + 'physics.html#lessons'],
      ['practice', L('Üben & Werkzeuge', 'Practice & tools'), prefix + 'physics.html#tools'],
      // the Physics deck exists in English only so far
      ...(de ? [] : [['cards', 'Flashcards', 'flashcards.html#p1-16']]),
      ['plan', L('Prüfungsplan', 'Exam plan'), prefix + 'phys-plan.html'],
      ['script', L('Skript', 'Script'), 'phys-script.html'],
      ['board', L('Tafel & Skript', 'Board & script'), prefix + 'phys-board.html'],
      ['exams', L('Prüfungen', 'Exams'), prefix + 'phys-docs.html']
    ],
    linalg: [
      ['lessons', L('Lektionen', 'Lessons'), prefix + 'linalg.html#lessons'],
      ['practice', L('Beweistechnik', 'Proof techniques'), 'linalg-moves.html'],
      ['plan', L('Prüfungsplan', 'Exam plan'), 'linalg-plan.html'],
      ['script', L('Skript', 'Script'), 'linalg-script.html']
    ],
    chemie: [
      ['lessons', 'Lektionen', 'chemie/#home'],
      ['review', 'Wiederholen', 'chemie/#review'],
      ['exams', 'Üben & Prüfungen', 'chemie/#exams'],
      ['library', 'Materialien', 'chemie/#library']
    ]
  };
  function activeMode() {
    if (subject === 'chemie') {
      const route = location.hash.slice(1).split('/')[0];
      return ({ review: 'review', exams: 'exams', training: 'exams', library: 'library', sources: 'library' })[route] || 'lessons';
    }
    if (location.hash === '#tools' && subject === 'physics') return 'practice';
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
  const dive = link('Exam Dive', 'dive/?lang=' + (de ? 'de' : 'en'), 'study-game'); const diveIcon = document.createElement('span'); diveIcon.textContent = '🎮 '; diveIcon.setAttribute('aria-hidden', 'true'); dive.prepend(diveIcon); if (path.startsWith('dive/')) dive.setAttribute('aria-current', 'page'); courses.append(dive);
  upper.append(courses);
  const utilities = document.createElement('nav'); utilities.className = 'study-utilities'; utilities.setAttribute('aria-label', L('Persönlicher Bereich', 'Personal area'));
  utilities.append(link(L('Fortschritt', 'Progress'), prefix + 'account.html'));
  utilities.append(link(L('Mehr', 'More'), prefix + 'more.html'));
  const activityHash = /access_token=|error_description=/.test(location.hash) ? returnHash : location.hash;
  const language = de ? 'en' : 'de';
  const currentApp = file + '?lang=' + language + activityHash;
  const languageTarget = chemistry || physCards ? (de ? 'index.html' : 'de/index.html') : fcApp ? fcAppPath + currentApp : sharedPages.has(file) ? currentApp : (de ? file : 'de/' + file);
  const languageLink = link(de ? 'EN' : 'DE', languageTarget, 'study-guest-language');
  languageLink.lang = de ? 'en' : 'de';
  languageLink.setAttribute('aria-label', de ? 'English' : 'Deutsch');
  utilities.append(languageLink);
  const login = link(L('Anmelden', 'Log in'), prefix + 'account.html', 'study-login');
  utilities.append(login);
  const design = document.createElement('details'); design.className = 'study-design';
  design.hidden = true;
  const toggle = document.createElement('summary');
  toggle.className = 'study-profile-toggle';
  toggle.setAttribute('aria-label', L('Kontoeinstellungen', 'Account settings'));
  toggle.innerHTML = '<span class="study-profile-icon" aria-hidden="true"></span>';
  design.append(toggle);
  const panel = document.createElement('div'); panel.className = 'study-design-panel';
  const heading = document.createElement('h2'); heading.textContent = L('Einstellungen', 'Settings'); panel.append(heading);
  const profileForm = document.createElement('form');
  profileForm.className = 'study-profile-form';
  profileForm.innerHTML = '<label>' + L('Benutzername für die Bestenliste', 'Leaderboard username') + '<input name="nickname" type="text" maxlength="30" autocomplete="nickname"></label>' +
    '<label class="study-profile-optin"><input name="leaderboard" type="checkbox">' + L('In der Bestenliste anzeigen', 'Show me on the leaderboard') + '</label>' +
    '<button type="submit">' + L('Speichern', 'Save') + '</button><p role="status"></p>';
  const profileName = profileForm.elements.nickname;
  const profileOptIn = profileForm.elements.leaderboard;
  const profileMessage = profileForm.querySelector('[role="status"]');
  profileForm.addEventListener('submit', async event => {
    event.preventDefault();
    const button = profileForm.querySelector('button');
    button.disabled = true;
    try {
      await window.SH.updateProfile(profileName.value, profileOptIn.checked);
      profileMessage.textContent = L('Gespeichert.', 'Saved.');
    } catch (error) { profileMessage.textContent = error.message; }
    finally { button.disabled = false; }
  });
  panel.append(profileForm);
  const choices = document.createElement('div');
  choices.className = 'study-profile-links';
  const switchLanguage = link(L('Sprache: English', 'Language: Deutsch'), languageTarget);
  switchLanguage.lang = de ? 'en' : 'de';
  choices.append(switchLanguage, link(L('Konto & Fortschritt', 'Account & progress'), prefix + 'account.html'));
  panel.append(choices);
  const appearanceDisclosure = document.createElement('details');
  appearanceDisclosure.className = 'study-profile-appearance';
  const appearanceToggle = document.createElement('summary');
  appearanceToggle.textContent = 'Design';
  appearanceDisclosure.append(appearanceToggle);
  const themes = document.createElement('fieldset');
  const themeLegend = document.createElement('legend'); themeLegend.textContent = L('Darstellung', 'Appearance'); themes.append(themeLegend);
  const themeOptions = document.createElement('div'); themeOptions.className = 'design-theme-options';
  [['light', L('Hell', 'Light')], ['dark', L('Dunkel', 'Dark')]].forEach(([value, text]) => {
    const label = document.createElement('label'); const input = document.createElement('input'); input.type = 'radio'; input.name = 'study-design-theme'; input.value = value;
    input.addEventListener('change', () => { appearance.theme = value; applyAppearance(true); updateDesignPanel(); }); label.append(input, document.createTextNode(text)); themeOptions.append(label);
  }); themes.append(themeOptions); appearanceDisclosure.append(themes);
  const colours = document.createElement('fieldset'); const colourLegend = document.createElement('legend'); colourLegend.textContent = L('Farbwelt', 'Colour palette'); colours.append(colourLegend);
  const colourOptions = document.createElement('div'); colourOptions.className = 'design-colours';
  const groups = { story: L('Märchenbuch', 'Storybook'), fun: L('Bunt', 'Bright'), classic: L('Klassisch', 'Classic'), calm: L('Ruhig', 'Calm'), picked: L('Deine Auswahl', 'Your picks'), access: L('Barrierearm', 'Accessible') };
  let lastGroup = '';
  Object.entries(palettes).forEach(([id, value]) => {
    if (value.group !== lastGroup) { lastGroup = value.group; const h = document.createElement('p'); h.className = 'design-group'; h.textContent = groups[value.group] || ''; colourOptions.append(h); }
    const button = document.createElement('button'); button.type = 'button'; button.dataset.palette = id;
    const swatch = document.createElement('span'); swatch.className = 'design-swatch'; swatch.setAttribute('aria-hidden', 'true'); swatch.style.background = 'linear-gradient(135deg,' + value.swatches[0] + ' 50%,' + value.swatches[1] + ' 50%)';
    button.append(swatch, document.createTextNode(value.label[de ? 0 : 1])); button.addEventListener('click', () => { appearance.palette = id; applyAppearance(true); updateDesignPanel(); }); colourOptions.append(button);
  }); colours.append(colourOptions); appearanceDisclosure.append(colours);
  const hint = document.createElement('p'); hint.className = 'design-save-hint'; hint.textContent = L('Wird für alle Fächer in diesem Browser gespeichert.', 'Saved for all subjects in this browser.'); appearanceDisclosure.append(hint);
  panel.append(appearanceDisclosure, link(L('Mein StudyHub', 'My StudyHub'), prefix + 'my.html'));
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
  const main = document.querySelector('main');
  const lessonMatch = /^(lesson|phys|refresher|linalg|serie)-[ap]?\d+\.html$/.test(file);
  const gatedPage = fcApp || lessonMatch || /^(flashcards|practice|mock|moves|linalg-moves|tree|toolbox|skipped)\.html$/.test(file);
  const gate = document.createElement('section');
  gate.className = 'study-login-prompt';
  gate.hidden = true;
  gate.innerHTML = '<h1></h1><p></p><button type="button" class="study-action"></button><p role="status"></p>';
  const gateTitle = gate.querySelector('h1');
  const gateText = gate.querySelector('p');
  const gateButton = gate.querySelector('button');
  const gateStatus = gate.querySelector('[role="status"]');
  gateButton.textContent = L('Mit Google anmelden', 'Log in with Google');
  if (main && (gatedPage || chemistry)) main.before(gate);

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
    const chemieActivity = chemistry && /^#(?:lesson|review|training|exams)(?:\/|$)/.test(location.hash);
    const protectedActivity = gatedPage || chemieActivity;
    if (!main || (!gatedPage && !chemistry)) return;
    const pending = !window.SH || window.SH.authPending;
    const locked = protectedActivity && !window.SH?.user;
    main.classList.toggle('study-locked', locked);
    gate.hidden = !locked;
    gateTitle.textContent = pending ? L('Anmeldung wird geprüft', 'Checking sign-in') : L('Bitte melde dich an', 'Please log in');
    gateText.textContent = pending ? '' : L('Melde dich an, um hier weiterzulernen.', 'Log in to continue studying here.');
    gateButton.hidden = pending;
    if (window.SH && !window.SH.user) document.querySelector('#fc-finish')?.classList.remove('open');
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

  const continueKinds = ['analysis-lesson', 'physics-lesson', 'linalg-lesson', 'chemie-lesson', 'analysis-cards', 'classic-cards', 'physics-cards', 'chemie-cards', 'dive'];
  const continueLabels = {
    'analysis-lesson': 'Analysis I', 'physics-lesson': L('Physik I', 'Physics I'),
    'linalg-lesson': L('Lineare Algebra I', 'Linear Algebra I'), 'chemie-lesson': 'Chemie I (PC)',
    'analysis-cards': L('Analysis-Lernkarten', 'Analysis flashcards'), 'classic-cards': L('Analysis-Lernkarten (klassisch)', 'Analysis flashcards (classic)'), 'physics-cards': L('Physik-Lernkarten', 'Physics flashcards'),
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
  function renderContinue() {
    if (!continueSection.isConnected) return;
    const available = continueKinds.map(kind => ({ kind, entry: window.SH?.resume?.read(kind) })).filter(item => item.entry?.href);
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
    design.hidden = !signedIn;
    login.hidden = signedIn;
    languageLink.hidden = signedIn;
    if (!signedIn) design.open = false;
    if (signedIn && new URLSearchParams(location.search).get('settings') === '1') {
      design.open = true;
      const settingsUrl = new URL(location.href);
      settingsUrl.searchParams.delete('settings');
      history.replaceState(null, '', settingsUrl);
    }
    profileForm.querySelector('button').disabled = !!account?.accountDataPending;
    profileName.disabled = profileOptIn.disabled = !!account?.accountDataPending;
    if (!account?.accountDataPending) {
      profileName.value = account?.profile?.nickname || '';
      profileOptIn.checked = !!account?.profile?.leaderboard;
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
    linalg: L('Wie eine lineare Abbildung ein Gitter verändert', 'How a linear map transforms a grid')
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
    trace([[26, axisY], [386, axisY]], muted);
    trace([[axisX, 16], [axisX, 216]], muted);
    if (subject === 'analysis') {
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
    if (!main || !courseArt[subject] || file !== ({ analysis: 'analysis.html', physics: 'physics.html', linalg: 'linalg.html' })[subject]) return;
    const intro = main.querySelector(':scope > header');
    const lessonName = { analysis: 'lesson', physics: 'phys', linalg: 'linalg' }[subject];
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
    design.addEventListener('change', () => drawCourseGraphic(canvas));
    colourOptions.addEventListener('click', () => drawCourseGraphic(canvas));
    addEventListener('storage', event => { if (event.key === appearanceKey) drawCourseGraphic(canvas); });

    function renderProgress() {
      const signedIn = !!window.SH?.user;
      const record = signedIn && window.SH.resume?.read(subject + '-lesson');
      const progress = signedIn ? window.SH.courseProgress() : {};
      const finished = a => progress[new URL(a.href).pathname.split('/').pop()]?.done;
      const next = lessons.find(a => !finished(a));
      const resume = record && lessons.some(a => new URL(a.href).pathname === new URL(record.href, base).pathname && !finished(a));
      primary.href = resume ? record.href : (next || lessons[0]).href;
      primary.textContent = resume ? L('Lektion fortsetzen', 'Resume lesson') : signedIn ? L('Lektion öffnen', 'Open lesson') : L('Anmelden und starten', 'Log in to start');
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

