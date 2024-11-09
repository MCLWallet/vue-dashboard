<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { Weather } from '../../types/Weather';

// Reactive properties
const data = ref<null | Weather>(null);
const loading = ref(true);
const error = ref<string | null>(null);

// Fetch data on component mount
const fetchData = async () => {
    loading.value = true;
    error.value = null;

    try {
        // Replace with your data source URL
        const response = await axios.get('/weather');
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
        <div v-else-if="data">
            <p>{{ data.current.temperature_2m }} C°</p>
        </div>
        <p v-else>No data available</p>
    </div>
</template>
