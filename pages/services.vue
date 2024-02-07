<script setup lang="ts">
import { useLocaleStore } from '~/stores/locale'

const {
    translate: { t },
} = useLocaleStore()
</script>

<i18n>
{
  "uk": {
    "services_title": "Послуги"
  },
  "en": {
    "services_title": "Services"
  }
}
</i18n>

<template>
    <section id="services">
        <h1>{{ t('services_title') }}</h1>
    </section>
</template>

<style scoped lang="scss"></style>
