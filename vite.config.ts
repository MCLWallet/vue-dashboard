import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
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
        "/nasa": {
          target: `https://api.nasa.gov/planetary/apod?api_key=${env.NASA_API_KEY}`,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/nasa/, ""),
        },
      },
    },
    plugins: [vue()],
    resolve: {
      alias: {
        "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
      },
    },
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
  };
});
