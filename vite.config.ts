import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import sass from "sass";


export default defineConfig({
  plugins: [react()],
  base: "/personal-website/",
  resolve: {
    alias: { "@components": path.resolve(__dirname, "src/components") },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
});
