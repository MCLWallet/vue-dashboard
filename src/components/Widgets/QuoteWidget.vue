<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { Quote } from '../../types/Quote';

// Reactive properties
const data = ref<null | Quote[]>(null);
const loading = ref(true);
const error = ref<string | null>(null);

// Fetch data on component mount
const fetchData = async () => {
    loading.value = true;
    error.value = null;

    try {
        // Replace with your data source URL
        const response = await axios.get('/quote');
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
    <div class="card film-widget">
        <div class="card-body">
            <h2 class="card-title">Quote of the day</h2>
            <div class="quote-content" v-if="data">
                <p>"{{ data[0].q }}"</p>
                <p>- {{ data[0].a }}</p>
            </div>
            <p v-else>No data available</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.quote-content {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
}
</style>