import vercel from "solid-start-vercel";
import solid from "solid-start/vite";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

import crypto from "crypto";
import fs from "fs";
import path from "path";

const indexHtmlRevision = () => {
  const index_path = path.resolve(__dirname, ".solid/index.html");
  const file_buffer = fs.readFileSync(index_path);
  const hash = crypto.createHash("md5");
  hash.update(file_buffer);
  return hash.digest("hex");
};

export default defineConfig(() => {
  return {
    plugins: [
      solid({
        ssr: false,
        adapter: vercel({
          edge: false,
        }),
      }),
      VitePWA({
        workbox: {
          // Environment variable set only when building the client.
          // See <https://github.com/solidjs/solid-start/blob/df5d22be3db0f76e4ab5d815c1892855ec43b1f2/packages/start/bin.cjs#L398>.
          additionalManifestEntries: process.env.START_SPA_CLIENT
            ? [
                // Manually add the index.html entry since
                // this file is rendered when building.
                {
                  url: "index.html",
                  revision: indexHtmlRevision(),
                },
              ]
            : undefined,
        },
        registerType: "autoUpdate",
        injectRegister: "inline",
        manifest: {
          name: "QRScout Scanner",
        },
      }),
    ],
  };
});
