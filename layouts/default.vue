<script setup lang="ts">
import { useLocaleStore } from '~/stores/locale'
import { useNavigationMenu } from '~/stores/navigation-menu'

const localeStore = useLocaleStore()
const navigationStore = useNavigationMenu()

localeStore.setupLocale()
</script>

<template>
    <TheHeader />
    <Transition mode="out-in">
        <div v-if="!navigationStore.isVisible">
            <slot />
        </div>
    </Transition>
</template>

<style scoped lang="scss"></style>
