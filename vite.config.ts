import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const siteUrl =
  process.env.VITE_SITE_URL?.replace(/\/$/, "") ||
  "https://portafolio-xi-three-59.vercel.app";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "html-site-url",
      transformIndexHtml(html) {
        return html.replace(/%SITE_URL%/g, siteUrl);
      },
    },
  ],
});
