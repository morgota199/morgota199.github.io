<script setup lang="ts">
import TheNavigation from '~/components/Header/TheNavigation.vue'
import TheLanguageSelector from '~/components/Header/TheLanguageSelector.vue'
</script>

<template>
    <header class="header">
        <div class="logo">
            <h1 @click="() => navigateTo('/')">{{ $t('title') }}</h1>
        </div>
        <TheNavigation />
        <TheLanguageSelector class="language-selector" />
    </header>
</template>

<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
        cursor: pointer;
    }

    @media (min-width: $mobile-min) and (max-width: $mobile-max) {
        & {
            padding-left: 15px;
            padding-right: 15px;
        }

        .logo {
            width: 240px;
        }

        .language-selector {
            display: none;
        }
    }

    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        & {
            padding-left: 15px;
            padding-right: 15px;
        }

        .language-selector {
            display: none;
        }
    }

    @media (min-width: $laptop-min) and (max-width: $laptop-max) {
        & {
            padding-left: 15px;
            padding-right: 15px;
        }

        .logo {
            width: 200px;
            font-size: 14px;
        }
    }

    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        & {
            padding-left: 15px;
            padding-right: 15px;
        }
    }

    @media (min-width: $tv-min) {
        & {
            padding-left: 15px;
            padding-right: 15px;
        }

        .logo {
            font-size: 17px;
        }
    }
}
</style>
