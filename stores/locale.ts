export enum Locale {
    EN = 'en',
    UA = 'ua',
}

export const useLocaleStore = defineStore('locale', {
    state(): { locale: Locale } {
        return {
            locale: Locale.EN,
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
                const locale = localStorage.getItem('locale') as Locale

                this.locale = locale || Locale.EN

                localStorage.setItem('locale', this.locale)
            } else {
                this.locale = Locale.EN
            }
        },

        setLocate(locale?: Locale) {
            if (locale) {
                this.locale = locale
            } else {
                if (this.locale === Locale.UA) this.locale = Locale.EN
                if (this.locale === Locale.EN) this.locale = Locale.UA
            }

            if (localStorage) {
                localStorage.setItem('locale', this.locale)
            }
        },
    },
})
