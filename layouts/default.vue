<script setup lang="ts">
import { useLocaleStore } from '~/stores/locale'

const localeStore = useLocaleStore()

localeStore.setupLocale()
</script>

<template>
    <div>
        <TheHeader />
        <slot />
    </div>
</template>

<style scoped lang="scss"></style>
