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
        start_url: "/",
        display: "standalone",
        theme_color: "#f4efe7",
        background_color: "#f4efe7",
        icons: [
          {
            src: "/icon-192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/icon-512-maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
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