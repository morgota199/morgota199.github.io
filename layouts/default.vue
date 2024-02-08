<script setup lang="ts">
import { useLocaleStore } from '~/stores/locale'
import { useNavigationMenu } from '~/stores/navigation-menu'

const localeStore = useLocaleStore()
const navigationStore = useNavigationMenu()

localeStore.setupLocale()
</script>

<template>
    <TheHeader />
    <div :class="{ blure: navigationStore.isVisible }">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.blure {
    filter: blur(5px);
}
</style>
