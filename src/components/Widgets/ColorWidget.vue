<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { Colors, ColorsPayload } from '../../types/Colors';

// Reactive properties
const data = ref<null | Colors>(null);
const loading = ref(true);
const error = ref<string | null>(null);

const payload: ColorsPayload = { model: "default" }

// Fetch data on component mount
const fetchData = async () => {
    loading.value = true;
    error.value = null;

    try {
        // Replace with your data source URL
        const response = await axios.post('/colors', payload);
        data.value = response.data;
    } catch (err) {
        error.value = 'Failed to load data';
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    fetchData();
});
</script>

<template>
    <div class="card">
        <ul class="palette-wrapper">
            <li v-for="color in data?.result">
                <div class="color" :style="{ backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})` }"></div>
            </li>
        </ul>
        <button @click="fetchData" :disabled="loading">{{ !loading ? "Another Colors" : "Loading ..." }}</button>
    </div>
</template>

<style scoped lang="scss">
.palette-wrapper {
    display: grid;
    grid-template-columns: repeat(5, 20%);
    list-style: none;
    padding: 0;

    li {
        height: 4rem;
        width: 100%;


        .color {
            height: 100%;
            width: 100%;
        }
    }
}
</style>
