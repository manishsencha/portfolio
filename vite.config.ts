import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [reactRouter(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("scheduler") ||
              id.includes("react-router") ||
              id.includes("tanstack") ||
              id.includes("lucide-react") ||
              id.includes("sonner") ||
              id.includes("next-themes")
            ) {
              return "core-vendor";
            }
            if (id.includes("framer-motion")) {
              return "motion-vendor";
            }
            return "vendor";
          }
        },
      },
    },
  },
});
