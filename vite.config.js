// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/predict": {
        target: "https://ml-test-exoplanets.onrender.com", // ✅ sin /predict al final
        changeOrigin: true,
        // No necesitas rewrite si la ruta es la misma
      },
    },
  },
});
