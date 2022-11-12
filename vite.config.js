import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import importAssets from "svelte-preprocess-import-assets";

export default defineConfig({
    base: "./",
    plugins: [
        svelte({
            preprocess: [sveltePreprocess(), importAssets()],
        }),
    ],
});
