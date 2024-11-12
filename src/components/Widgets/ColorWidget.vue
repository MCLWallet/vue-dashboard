<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { Colors, ColorsPayload } from '../../types/Colors';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

// Reactive properties
const data = ref<null | Colors>(null);
const loading = ref(true);
const error = ref<string | null>(null);

const copied = ref(false)


const copyColorToClipboard = async (color: number[]) => {
    try {
        await navigator.clipboard.writeText(`rgb(${color[0]}, ${color[1]}, ${color[2]})`)
        toast("Color copied to clipboard!", {
            autoClose: 5000,
        });
        copied.value = true
        setTimeout(() => copied.value = false, 2000) // Reset after 2 seconds
    } catch (err) {
        console.error('Failed to copy color: ', err)
    }
}

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
    <div class="widget-wrapper">
        <h2 class="widget-title">Color Inspiration</h2>
        <div class="card">
            <ul class="palette-wrapper">
                <li v-for="color in data?.result">
                    <div class="color" :style="{ backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})` }"
                        @click="copyColorToClipboard(color)">
                        <p>
                            <i class="bi bi-copy"></i>
                            {{ ` RGB(${color[0]}, ${color[1]}, ${color[2]})` }}
                        </p>
                    </div>
                </li>
            </ul>
            <div class="card-body">
                <button class="btn btn-outline-primary rounded-pill" @click="fetchData" :disabled="loading">
                    <span v-if="loading" class="spinner-border spinner-border-sm" role="status"
                        aria-hidden="true"></span>
                    <span class="sr-only">
                        <i v-if="!loading" class="bi bi-palette"></i>
                        {{ !loading ? "Another Color" : "Loading..." }}
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/style.scss";

.palette-wrapper {
    display: grid;
    grid-template-columns: repeat(5, 20%);
    list-style: none;
    padding: 0;
    height: 300px;

    @include media-breakpoint-up(sm) {
        max-height: $image-height;
        height: 100%;
    }

    li {
        height: 100%;
        width: 100%;


        .color {
            display: flex;
            align-items: center;
            text-align: center;
            padding: $table-cell-padding-x;
            height: 100%;
            width: 100%;

            p {
                background: rgba($color: $black, $alpha: .4);
                color: white;
                opacity: 0;
                transition: $transition-fade;
            }

            &:hover {
                cursor: pointer;

                p {
                    opacity: 1;
                }
            }
        }

        &:nth-child(1) {
            .color {
                border-top-left-radius: $custom-border-radius;
            }
        }

        &:last-child {
            .color {
                border-top-right-radius: $custom-border-radius;
            }
        }

    }
}
</style>
