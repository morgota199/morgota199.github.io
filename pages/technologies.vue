<script setup lang="ts">
import { useLocaleStore } from '~/stores/locale'

const {
    translate: { t },
} = useLocaleStore()
</script>

<i18n>
{
  "uk": {
    "technologies_title": "Технології"
  },
  "en": {
    "technologies_title": "Tecnologies"
  }
}
</i18n>

<template>
    <section id="technologies">
        <h1>{{ t('technologies_title') }}</h1>
    </section>
</template>

<style scoped lang="scss"></style>
