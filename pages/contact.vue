<script setup lang="ts">
import { useNavigationMenu } from '~/stores/navigation-menu'

const navigationStore = useNavigationMenu()

navigationStore.toggle(false)
</script>

<template>
    <section id="contact">
        <h1>{{ $t('contact.title') }}</h1>
    </section>
</template>

<style scoped lang="scss"></style>
