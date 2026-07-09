import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Montbrun Companion",
        short_name: "Montbrun",
        display: "standalone",
        theme_color: "#f4efe7",
        background_color: "#f4efe7",
        icons: [
          {
            src: "/icons.svg",
            sizes: "512x512",
            type: "image/svg+xml",
            purpose: "any maskable"
          }
        ]
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 100 * 1024 * 1024,
        globPatterns: [
          "**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,mp4}"
        ]
      }
    })
  ]
});