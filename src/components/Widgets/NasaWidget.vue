<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { Nasa } from '../../types/Nasa';

// Reactive properties
const data = ref<null | Nasa>(null);
const loading = ref(true);
const error = ref<string | null>(null);

// Fetch data on component mount
const fetchData = async () => {
    loading.value = true;
    error.value = null;

    try {
        // Replace with your data source URL
        const response = await axios.get(`/nasa`);
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
    <div class="widget-wrapper">
        <h2 class="widget-title">NASA Picture of the Day</h2>
        <div class="card">
            <img v-show="data" :src="data?.url" class="card-img-top" />
            <div class="card-body">
                <p>{{ data?.title }}</p>
                <p v-if="loading">Loading...</p>
                <p v-else-if="error">{{ error }}</p>
                <p v-else-if="!data">No data available</p>
            </div>

        </div>
    </div>
</template>
