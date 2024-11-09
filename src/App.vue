<script setup lang="ts">
import ColorWidget from './components/Widgets/ColorWidget.vue';
import FilmWidget from './components/Widgets/FilmWidget.vue';
import WidgetCard from './templates/WidgetCard.vue'
</script>

<template>
  <WidgetCard>
    <FilmWidget />
  </WidgetCard>
  <WidgetCard>
    <ColorWidget />
  </WidgetCard>
</template>

<style scoped></style>
