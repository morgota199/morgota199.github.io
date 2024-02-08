<script setup lang="ts">
import { useNavigationMenu } from '~/stores/navigation-menu'

const navigationStore = useNavigationMenu()

navigationStore.toggle(false)
</script>

<template>
    <section id="technologies">
        <h1>{{ $t('technologies.title') }}</h1>
    </section>
</template>

<style scoped lang="scss"></style>
