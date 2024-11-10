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
    <div class="card film-widget">
        <div class="card-body">
            <h2 class="card-title">Film/Series Recommender</h2>
            <div class="film-content" v-if="data">
                <h3>
                    <a :href="data.URL" target="_blank">
                        {{ data.Title }}
                    </a>
                </h3>
                <h4>{{ data.Year }}</h4>
                <p>Genre: {{ data.Genres }}</p>
                <p>Click the movie/series title to go to its IMDB page!</p>
            </div>
            <p v-else>No data available</p>
        </div>
        <button class="btn btn-primary" @click="fetchData" :disabled="loading">
            <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span class="sr-only">{{ !loading ? "Another Film" : "Loading..." }}</span>
        </button>
    </div>
</template>

<style scoped lang="scss"></style>
