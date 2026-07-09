import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "icons.svg"],
      manifest: {
        name: "Montbrun Companion",
        short_name: "Montbrun",
        description: "House guide and local companion for Montbrun.",
        theme_color: "#f4efe7",
        background_color: "#f4efe7",
        display: "standalone",
        start_url: "/",
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
        globPatterns: ["**/*.{js,css,html,svg,png,jpg,jpeg,mp4}"],
        maximumFileSizeToCacheInBytes: 100 * 1024 * 1024
      }
    })
  ]
});