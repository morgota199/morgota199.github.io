<script setup lang="ts">
import { useNavigationMenu } from '~/stores/navigation-menu'

const navigationStore = useNavigationMenu()

navigationStore.toggle(false)
</script>

<template>
    <section id="services">
        <h1>{{ $t('services.title') }}</h1>
    </section>
</template>

<style scoped lang="scss"></style>
