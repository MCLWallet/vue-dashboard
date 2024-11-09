<script setup>
import { Container, Draggable } from "vue-dndrop";
import ColorWidget from './components/Widgets/ColorWidget.vue';
import FilmWidget from './components/Widgets/FilmWidget.vue';
import NasaWidget from "./components/Widgets/NasaWidget.vue";

</script>

<template>
  <div class="main-grid">
    <NasaWidget />
    <ColorWidget />
    <FilmWidget />
  </div>
</template>

<style scoped lang="scss"></style>
