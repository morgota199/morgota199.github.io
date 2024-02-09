<script setup lang="ts">
import { useLocaleStore } from '~/stores/locale'
import { useLoaderStore } from '~/stores/loader'
import type { Locale } from '@intlify/core-base'

const { currentLocale, setLocate } = useLocaleStore()
const loadingStore = useLoaderStore()

const selectOption = async (lang: Locale) => {
    setLocate(lang)
    window.location.reload()
    await loadingStore.setLoading(false)
}
</script>

<template>
    <div>
        <span
            v-if="currentLocale !== 'en'"
            @click="() => selectOption('en')"
            class="fi fi-us us flag"
        ></span>
        <span
            v-if="currentLocale !== 'ua'"
            @click="() => selectOption('ua')"
            class="fi fi-ua ua flag"
        ></span>
    </div>
</template>

<style scoped lang="scss">
.flag {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    margin: 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }

    @media (min-width: $mobile-min) and (max-width: $mobile-max) {
        & {
            margin: 0;
            width: 50px;
            height: 50px;
        }
    }

    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        & {
            margin: 0;
            width: 55px;
            height: 55px;
        }
    }

    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        & {
            margin: 0;
            width: 40px;
            height: 40px;
        }
    }

    @media (min-width: $tv-min) {
        & {
            margin: 0;
            width: 55px;
            height: 55px;
        }
    }
}
</style>
