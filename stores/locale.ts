export const useLocaleStore = defineStore('locate', {
    state() {
        return {
            locale: 'en',
        }
    },

    getters: {
        getLocale(state) {
            return localStorage.getItem('locale') || state.locale
        },

        translate(state) {
            const i18n = useI18n()

            i18n.locale.value = this.getLocale

            return i18n
        },

        currentLocale(state) {
            const i18n = useI18n()

            i18n.locale.value = this.getLocale

            return i18n.locale.value
        },
    },

    actions: {
        setupLocale() {
            if (localStorage) {
                const locale = localStorage.getItem('locale')

                this.locale = locale || 'en'

                localStorage.setItem('locale', this.locale)
            } else {
                this.locale = 'en'
            }
        },

        setLocate(locale?: 'uk' | 'en') {
            if (locale) {
                this.locale = locale
            } else {
                if (this.locale === 'uk') this.locale = 'en'
                if (this.locale === 'en') this.locale = 'uk'
            }

            if (localStorage) {
                localStorage.setItem('locale', this.locale)
            }
        },
    },
})
