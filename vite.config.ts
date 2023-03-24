import vercel from "solid-start-vercel";
import solid from "solid-start/vite";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(() => {
  return {
    plugins: [solid({ ssr: false, adapter: vercel({ edge: false }) }), VitePWA({ registerType: "autoUpdate" })],
  };
});
