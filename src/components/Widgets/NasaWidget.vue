<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

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
    <div class="card">
        <img v-show="data" :src="data?.url" class="card-img-top" />
        <div class="card-body">
            <h2 class="card-title">NASA Picture of the Day</h2>
            <h3>{{ data?.title }}</h3>
            <!-- <p class="card-text">{{ data?.explanation }}</p> -->
            <p v-if="loading">Loading...</p>
            <p v-else-if="error">{{ error }}</p>
            <p v-else-if="!data">No data available</p>
        </div>

    </div>
</template>

<style scoped lang="scss">
.card {
    padding: 0;
}
</style>
