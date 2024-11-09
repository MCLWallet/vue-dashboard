import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/random-film": {
        target: "https://gravel-palm-lion.glitch.me/random",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/random-film/, ""),
      },
      "/colors": {
        target: "http://colormind.io/api/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/colors/, ""),
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
});
