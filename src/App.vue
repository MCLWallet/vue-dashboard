<script setup>
import { Container, Draggable } from "vue-dndrop";
import ColorWidget from './components/Widgets/ColorWidget.vue';
import FilmWidget from './components/Widgets/FilmWidget.vue';
import NasaWidget from "./components/Widgets/NasaWidget.vue";
import WeatherWidget from "./components/Widgets/WeatherWidget.vue";

</script>

<template>
  <div class="main-grid">
    <NasaWidget />
    <ColorWidget />
    <FilmWidget />
    <WeatherWidget />
  </div>
</template>

<style scoped lang="scss"></style>
