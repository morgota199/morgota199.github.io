<script setup lang="ts">
import { useLocaleStore } from '~/stores/locale'

const store = useLocaleStore()
</script>

<i18n>
{
  "uk": {
    "about_title": "Про мене"
  },
  "en": {
    "about_title": "About"
  }
}
</i18n>

<template>
    <section id="about">
        <h1>{{ store.translate.t('about_title') }}</h1>
    </section>
</template>

<style scoped lang="scss"></style>
