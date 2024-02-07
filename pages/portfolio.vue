<script setup lang="ts">
import { useLocaleStore } from '~/stores/locale'

const {
    translate: { t },
} = useLocaleStore()
</script>

<i18n>
{
  "uk": {
    "portfolio_title": "Портфоліо"
  },
  "en": {
    "portfolio_title": "Portfolio"
  }
}
</i18n>

<template>
    <section id="portfolio">
        <h1>{{ t('portfolio_title') }}</h1>
    </section>
</template>

<style scoped lang="scss"></style>
