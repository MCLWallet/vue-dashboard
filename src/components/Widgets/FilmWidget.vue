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
    <div class="widget-wrapper">
        <h2 class="widget-title">Film/Series Recommender</h2>
        <div class="card">
            <div class="card-body">
                <div class="film-content" v-if="data">
                    <h3>
                        <a :href="data.URL" target="_blank">
                            {{ data.Title }}
                        </a>
                    </h3>
                    <h4>{{ data.Year }}</h4>
                    <p>Genre: {{ data.Genres }}</p>
                    <p>Click the film/series title to go to its IMDB page!</p>
                </div>
                <p v-else>No data available</p>
                <button class="btn btn-outline-primary rounded-pill" @click="fetchData" :disabled="loading">
                    <span v-if="loading" class="spinner-border spinner-border-sm" role="status"
                        aria-hidden="true"></span>
                    <span class="sr-only">
                        <i v-if="!loading" class="bi bi-film"></i>
                        {{ !loading ? "Another Film" : "Loading..." }}
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>
