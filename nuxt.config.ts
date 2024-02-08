// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
    },
    ssr: false,
    css: ['~/assets/scss/main.scss'],
    modules: ['@nuxtjs/i18n', '@pinia/nuxt', 'nuxt-svgo', 'nuxt-particles'],
    i18n: {
        vueI18n: './i18n.config.ts',
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData:
                        '@use "~/assets/scss/breakpoints.scss" as *;',
                },
            },
        },
    },
})
