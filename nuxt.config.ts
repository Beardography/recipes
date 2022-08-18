import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ["~/assets/styles/styles.css"],
    modules: ["@nuxt/content"],
    ssr: true
});
