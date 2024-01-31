// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
    },
    ssr: false,
    css: ['~/assets/scss/main.scss'],
    modules: [
        '@nuxtjs/i18n',
        '@pinia/nuxt',
        '@nuxtjs/google-fonts',
        'nuxt-svgo',
    ],
    i18n: {
        dynamicRouteParams: false,
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
    googleFonts: {
        families: {
            Roboto: true,
            Inter: [400, 700],
            'Josefin+Sans': true,
            Lato: [100, 300],
            Raleway: {
                wght: [100, 400],
                ital: [100],
            },
            'Crimson Pro': {
                wght: '200..900',
                ital: '200..700',
            },
        },
    },
})
