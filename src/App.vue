<script setup>
import { Container, Draggable } from "vue-dndrop";
import ColorWidget from './components/Widgets/ColorWidget.vue';
import FilmWidget from './components/Widgets/FilmWidget.vue';

</script>

<template>
  <div class="main-grid">
    <FilmWidget />
    <ColorWidget />
  </div>
</template>

<style scoped lang="scss"></style>
