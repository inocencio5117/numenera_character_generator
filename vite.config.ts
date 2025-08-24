import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { env } from "process";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      includeAssets: [
        "favicon.ico",
        "apple-touch-icon-180x180.png",
        "maskable-icon-512x512.png",
      ],
      manifest: {
        name: "Numenera Character Generator",
        short_name: "Numenera Char Gen",
        description:
          "This is a character generator for the Numenera tabletop RPG.",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          }
        ],
        start_url: "/",
        display: "fullscreen",
        prefer_related_applications: false,
      },
      devOptions: {
        enabled: env.NODE_ENV === "development",
      },
    }),
  ],
  build: {
    outDir: "build",
  },
});
