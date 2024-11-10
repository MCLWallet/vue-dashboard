<script setup>
import ColorWidget from './components/Widgets/ColorWidget.vue';
import FilmWidget from './components/Widgets/FilmWidget.vue';
import NasaWidget from "./components/Widgets/NasaWidget.vue";
import QuoteWidget from './components/Widgets/QuoteWidget.vue';
import WeatherWidget from "./components/Widgets/WeatherWidget.vue";
import MainLayout from "./layouts/MainLayout.vue";

</script>

<template>
  <MainLayout>
    <NasaWidget />
    <ColorWidget />
    <FilmWidget />
    <QuoteWidget />
  </MainLayout>
</template>
