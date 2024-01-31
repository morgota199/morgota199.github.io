export const useLoaderStore = defineStore('loader', {
    state() {
        return {
            loading: false,
        }
    },

    getters: {
        isLoading(state) {
            return state.loading
        },
    },

    actions: {
        async setLoading(flag: boolean): Promise<any> {
            if (this.loading === flag) return

            if (flag) {
                this.loading = flag
            } else {
                await new Promise((resolve) => {
                    setTimeout(() => {
                        this.loading = flag
                        resolve(true)
                    }, 1000)
                })
            }
        },
    },
})
