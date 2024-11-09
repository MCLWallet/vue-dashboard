<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { Film } from '../../types/Film';

// Reactive properties
const data = ref<null | Film>(null);
const loading = ref(true);
const error = ref<string | null>(null);

// Fetch data on component mount
const fetchData = async () => {
    loading.value = true;
    error.value = null;

    try {
        // Replace with your data source URL
        const response = await axios.get('/random-film');
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
        <p v-if="loading">Loading...</p>
        <p v-else-if="error">{{ error }}</p>
        <p v-else-if="data">{{ data.Title }}</p>
        <p v-else>No data available</p>
        <button @click="fetchData" :disabled="loading">{{ !loading ? "Another Film" : "Loading ..." }}</button>
    </div>
</template>
