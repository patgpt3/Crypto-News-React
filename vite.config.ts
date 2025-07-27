import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
import Pages from "vite-plugin-pages";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vite.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), Pages(), nodePolyfills()],
  base: '/',
  build: {
    outDir: 'dist', // Ensure the output directory is correct
  },
});
// vite.config.js
