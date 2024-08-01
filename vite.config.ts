import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import { readFileSync } from 'fs';
import { read, utils } from 'xlsx';

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.xlsx'],

  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'genai-hackathon-ui',
      short_name: 'genai-hackathon-ui',
      description: 'UI for the Capgemini Genai hackathon',
      theme_color: '#ffffff',
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  }),{ // this plugin handles ?sheetjs tags
    name: "vite-sheet",
    transform(code, id) {
      if(!id.match(/\?sheetjs$/)) return;
      var wb = read(readFileSync(id.replace(/\?sheetjs$/, "")));
      var data = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
      return `export default JSON.parse('${JSON.stringify(data).replace(/\\/g, "\\\\")}')`;
    }
  }],
})