import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
// import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
    integrations: [mdx(), sitemap(), tailwind()],
    server: {
        port: 5173,
    },
    // adapter: vercel({
    //     webAnalytics: {
    //         enabled: true,
    //     },
    // }),
});