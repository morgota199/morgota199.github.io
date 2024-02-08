export const useNavigationMenu = defineStore('navigation-menu', {
    state() {
        return {
            show: false,
        }
    },

    getters: {
        isVisible(): boolean {
            return this.show
        },
    },

    actions: {
        toggle(flag?: boolean) {
            if (typeof flag !== 'undefined') {
                this.show = flag
            } else {
                this.show = !this.show
            }
        },
    },
})
