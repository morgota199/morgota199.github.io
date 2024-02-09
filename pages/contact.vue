<script setup lang="ts">
import TheSocialNetworks from '~/components/Contact/TheSocialNetworks.vue'
import TheContactForm from '~/components/Contact/TheContactForm.vue'
import TheExchanges from '~/components/Contact/TheExchanges.vue'
import { useNavigationMenu } from '~/stores/navigation-menu'

const navigationStore = useNavigationMenu()

navigationStore.toggle(false)
</script>

<template>
    <section id="contact">
        <!--        <h1>{{ $t('contact.title') }}</h1>-->
        <TheSocialNetworks />
        <TheExchanges />
        <TheContactForm />
    </section>
</template>

<style scoped lang="scss"></style>
