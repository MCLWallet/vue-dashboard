<script setup lang="ts">
import MainGrid from '../components/MainGrid.vue';
import Sidebar from '../components/Sidebar.vue';


</script>

<template>
    <Sidebar />
    <MainGrid>
        <slot></slot>
    </MainGrid>

</template>
