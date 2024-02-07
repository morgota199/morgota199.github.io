<script setup lang="ts">
import { useLocaleStore } from '~/stores/locale'

const {
    translate: { t },
} = useLocaleStore()
</script>

<i18n>
{
  "uk": {
    "index_title": "Головна"
  },
  "en": {
    "index_title": "Home"
  }
}
</i18n>

<template>
    <section id="index">
        <h1>{{ t('index_title') }}</h1>
    </section>
</template>

<style scoped lang="scss"></style>
