<script setup lang="ts">
import { useLocaleStore } from '~/stores/locale'

const {
    translate: { t },
} = useLocaleStore()
</script>

<i18n>
{
  "uk": {
    "contact_title": "Зв'язок"
  },
  "en": {
    "contact_title": "Contact me"
  }
}
</i18n>

<template>
    <section id="contact">
        <h1>{{ t('contact_title') }}</h1>
    </section>
</template>

<style scoped lang="scss"></style>
