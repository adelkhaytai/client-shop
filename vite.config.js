import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // proxy: {
    //   "/api/": "https://server-shop-9uv4.onrender.com",
    //   "/uploads/": "https://server-shop-9uv4.onrender.com",
    // },
    proxy: {
      "/api/": "http://localhost:8000",
      "/uploads/": "http://localhost:8000",
    },
  },

});