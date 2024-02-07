<script setup lang="ts">
import { useLocaleStore } from '~/stores/locale'

const localeStore = useLocaleStore()

localeStore.setupLocale()
</script>

<template>
    <TheHeader />
    <slot />
</template>

<style scoped lang="scss"></style>
