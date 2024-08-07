// vite.config.ts
import { VitePWA } from "file:///C:/Users/BISRIKAN/GenAI-Hackathon/genai-hackathon-ui-master/genai-hackathon-ui-master/node_modules/vite-plugin-pwa/dist/index.js";
import { defineConfig } from "file:///C:/Users/BISRIKAN/GenAI-Hackathon/genai-hackathon-ui-master/genai-hackathon-ui-master/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/BISRIKAN/GenAI-Hackathon/genai-hackathon-ui-master/genai-hackathon-ui-master/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { readFileSync } from "fs";
import { read, utils } from "file:///C:/Users/BISRIKAN/GenAI-Hackathon/genai-hackathon-ui-master/genai-hackathon-ui-master/node_modules/xlsx/xlsx.js";
var vite_config_default = defineConfig({
  assetsInclude: ["**/*.xlsx"],
  optimizeDeps: {
    include: [
      "@emotion/react",
      "@emotion/styled",
      "@mui/material/Tooltip"
    ]
  },
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"]
      }
    }),
    VitePWA(
      {
        registerType: "autoUpdate",
        injectRegister: false,
        pwaAssets: {
          disabled: false,
          config: true
        },
        manifest: {
          name: "genai-hackathon-ui",
          short_name: "genai-hackathon-ui",
          description: "UI for the Capgemini Genai hackathon",
          theme_color: "#ffffff"
        },
        workbox: {
          globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
          cleanupOutdatedCaches: true,
          clientsClaim: true
        },
        devOptions: {
          enabled: false,
          navigateFallback: "index.html",
          suppressWarnings: true,
          type: "module"
        }
      }
    ),
    {
      // this plugin handles ?sheetjs tags
      name: "vite-sheet",
      transform(code, id) {
        if (!id.match(/\?sheetjs$/)) return;
        var wb = read(readFileSync(id.replace(/\?sheetjs$/, "")));
        var data = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
        return `export default JSON.parse('${JSON.stringify(data).replace(/\\/g, "\\\\")}')`;
      }
    }
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxCSVNSSUtBTlxcXFxHZW5BSS1IYWNrYXRob25cXFxcZ2VuYWktaGFja2F0aG9uLXVpLW1hc3RlclxcXFxnZW5haS1oYWNrYXRob24tdWktbWFzdGVyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxCSVNSSUtBTlxcXFxHZW5BSS1IYWNrYXRob25cXFxcZ2VuYWktaGFja2F0aG9uLXVpLW1hc3RlclxcXFxnZW5haS1oYWNrYXRob24tdWktbWFzdGVyXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9CSVNSSUtBTi9HZW5BSS1IYWNrYXRob24vZ2VuYWktaGFja2F0aG9uLXVpLW1hc3Rlci9nZW5haS1oYWNrYXRob24tdWktbWFzdGVyL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCB7IHJlYWRGaWxlU3luYyB9IGZyb20gJ2ZzJztcbmltcG9ydCB7IHJlYWQsIHV0aWxzIH0gZnJvbSAneGxzeCc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBhc3NldHNJbmNsdWRlOiBbJyoqLyoueGxzeCddLFxuXG4gIG9wdGltaXplRGVwczoge1xuICAgIGluY2x1ZGU6IFtcbiAgICAgICdAZW1vdGlvbi9yZWFjdCcsXG4gICAgICAnQGVtb3Rpb24vc3R5bGVkJyxcbiAgICAgICdAbXVpL21hdGVyaWFsL1Rvb2x0aXAnXG4gICAgXSxcbiAgfSxcblxuICBwbHVnaW5zOiBbcmVhY3Qoe1xuICAgIGpzeEltcG9ydFNvdXJjZTogJ0BlbW90aW9uL3JlYWN0JyxcbiAgICBiYWJlbDoge1xuICAgICAgcGx1Z2luczogWydAZW1vdGlvbi9iYWJlbC1wbHVnaW4nXSxcbiAgICB9LFxuICB9KSxcbiAgICBWaXRlUFdBKHtcbiAgICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxuICAgICAgaW5qZWN0UmVnaXN0ZXI6IGZhbHNlLFxuXG4gICAgICBwd2FBc3NldHM6IHtcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBjb25maWc6IHRydWUsXG4gICAgICB9LFxuXG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICBuYW1lOiAnZ2VuYWktaGFja2F0aG9uLXVpJyxcbiAgICAgICAgc2hvcnRfbmFtZTogJ2dlbmFpLWhhY2thdGhvbi11aScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVUkgZm9yIHRoZSBDYXBnZW1pbmkgR2VuYWkgaGFja2F0aG9uJyxcbiAgICAgICAgdGhlbWVfY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIH0sXG5cbiAgICAgIHdvcmtib3g6IHtcbiAgICAgICAgZ2xvYlBhdHRlcm5zOiBbJyoqLyoue2pzLGNzcyxodG1sLHN2ZyxwbmcsaWNvfSddLFxuICAgICAgICBjbGVhbnVwT3V0ZGF0ZWRDYWNoZXM6IHRydWUsXG4gICAgICAgIGNsaWVudHNDbGFpbTogdHJ1ZSxcbiAgICAgIH0sXG5cbiAgICAgIGRldk9wdGlvbnM6IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgIG5hdmlnYXRlRmFsbGJhY2s6ICdpbmRleC5odG1sJyxcbiAgICAgICAgc3VwcHJlc3NXYXJuaW5nczogdHJ1ZSxcbiAgICAgICAgdHlwZTogJ21vZHVsZScsXG4gICAgICB9LFxuICAgIH1cbiAgKSwgeyAvLyB0aGlzIHBsdWdpbiBoYW5kbGVzID9zaGVldGpzIHRhZ3NcbiAgICBuYW1lOiBcInZpdGUtc2hlZXRcIixcbiAgICB0cmFuc2Zvcm0oY29kZSwgaWQpIHtcbiAgICAgIGlmICghaWQubWF0Y2goL1xcP3NoZWV0anMkLykpIHJldHVybjtcbiAgICAgIHZhciB3YiA9IHJlYWQocmVhZEZpbGVTeW5jKGlkLnJlcGxhY2UoL1xcP3NoZWV0anMkLywgXCJcIikpKTtcbiAgICAgIHZhciBkYXRhID0gdXRpbHMuc2hlZXRfdG9fanNvbih3Yi5TaGVldHNbd2IuU2hlZXROYW1lc1swXV0pO1xuICAgICAgcmV0dXJuIGBleHBvcnQgZGVmYXVsdCBKU09OLnBhcnNlKCcke0pTT04uc3RyaW5naWZ5KGRhdGEpLnJlcGxhY2UoL1xcXFwvZywgXCJcXFxcXFxcXFwiKX0nKWA7XG4gICAgfVxuICB9XSxcbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2YixTQUFTLGVBQWU7QUFDcmQsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsTUFBTSxhQUFhO0FBRzVCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLGVBQWUsQ0FBQyxXQUFXO0FBQUEsRUFFM0IsY0FBYztBQUFBLElBQ1osU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFBQyxNQUFNO0FBQUEsTUFDZCxpQkFBaUI7QUFBQSxNQUNqQixPQUFPO0FBQUEsUUFDTCxTQUFTLENBQUMsdUJBQXVCO0FBQUEsTUFDbkM7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNDO0FBQUEsTUFBUTtBQUFBLFFBQ04sY0FBYztBQUFBLFFBQ2QsZ0JBQWdCO0FBQUEsUUFFaEIsV0FBVztBQUFBLFVBQ1QsVUFBVTtBQUFBLFVBQ1YsUUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUVBLFVBQVU7QUFBQSxVQUNSLE1BQU07QUFBQSxVQUNOLFlBQVk7QUFBQSxVQUNaLGFBQWE7QUFBQSxVQUNiLGFBQWE7QUFBQSxRQUNmO0FBQUEsUUFFQSxTQUFTO0FBQUEsVUFDUCxjQUFjLENBQUMsZ0NBQWdDO0FBQUEsVUFDL0MsdUJBQXVCO0FBQUEsVUFDdkIsY0FBYztBQUFBLFFBQ2hCO0FBQUEsUUFFQSxZQUFZO0FBQUEsVUFDVixTQUFTO0FBQUEsVUFDVCxrQkFBa0I7QUFBQSxVQUNsQixrQkFBa0I7QUFBQSxVQUNsQixNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFBRztBQUFBO0FBQUEsTUFDRCxNQUFNO0FBQUEsTUFDTixVQUFVLE1BQU0sSUFBSTtBQUNsQixZQUFJLENBQUMsR0FBRyxNQUFNLFlBQVksRUFBRztBQUM3QixZQUFJLEtBQUssS0FBSyxhQUFhLEdBQUcsUUFBUSxjQUFjLEVBQUUsQ0FBQyxDQUFDO0FBQ3hELFlBQUksT0FBTyxNQUFNLGNBQWMsR0FBRyxPQUFPLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUMxRCxlQUFPLDhCQUE4QixLQUFLLFVBQVUsSUFBSSxFQUFFLFFBQVEsT0FBTyxNQUFNLENBQUM7QUFBQSxNQUNsRjtBQUFBLElBQ0Y7QUFBQSxFQUFDO0FBQ0gsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
