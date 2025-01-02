import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve("src"),
      "@assets": path.resolve("src/assets"),
      "@components": path.resolve("src/components"),
      "@hooks": path.resolve("src/hooks"),
      "@pages": path.resolve("src/pages"),
    },
  },
  plugins: [react()],
  server: {
    host: true,
  },
});
