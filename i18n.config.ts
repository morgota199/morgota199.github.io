import en from './locales/en.json'
import ua from './locales/ua.json'

// You can use `defineI18nConfig` to get type inferences for options to pass to vue-i18n.
export default defineI18nConfig(() => {
    return {
        dynamicRouteParams: false,
        strategy: 'no_prefix',
        lazy: true,
        messages: {
            en,
            ua,
        },
    }
})
