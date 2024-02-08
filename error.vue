<script setup lang="ts">
import type { NuxtError } from '#app'
import { useLoaderStore } from '~/stores/loader'

const props = defineProps({
    error: Object as () => NuxtError,
})

definePageMeta({
    layout: 'default',
})

const handleError = async () => {
    await clearError({ redirect: '/' })
    window.location.reload()
    await loadingStore.setLoading(false)
}
</script>

<template>
    <TheBackground />
    <NuxtLayout>
        <section class="error">
            <div class="description">
                <h2>{{ error.statusCode }}</h2>
                <p>{{ error.message }}</p>
                <button @click="handleError">{{ $t('go_home') }}</button>
            </div>
        </section>
    </NuxtLayout>
</template>

<style scoped lang="scss">
.error {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .description {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h2 {
            font-size: 150px;
            margin-bottom: 10px;
        }

        p {
            font-size: 50px;
        }

        button {
            border-radius: 7px;
            border: none;
            padding: 20px 40px;
            font-size: 25px;
            cursor: pointer;
            transition: all 0.3s ease-in;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 3px 4px gray;
            }
        }
    }

    @media (min-width: $mobile-min) and (max-width: $mobile-max) {
        .description {
            h2 {
                font-size: 70px;
            }

            p {
                font-size: 25px;
                margin-bottom: 100px;
            }
        }
    }

    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        .description {
            h2 {
                font-size: 90px;
            }

            p {
                font-size: 35px;
                margin-bottom: 100px;
            }
        }
    }

    @media (min-width: $laptop-min) and (max-width: $laptop-max) {
        .description {
            h2 {
                font-size: 110px;
                margin-bottom: 10px;
            }

            p {
                font-size: 50px;
                margin-bottom: 100px;
            }
        }
    }

    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
    }

    @media (min-width: $tv-min) {
    }
}
</style>
