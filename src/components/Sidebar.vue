<script setup lang="ts">
import { ref } from 'vue';
import WeatherWidget from './Widgets/WeatherWidget.vue';

const hideSidebar = ref(true)

</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <h1>Inspiration Dashboard</h1>
        <button @click="hideSidebar = !hideSidebar" class="navbar-toggler" type="button"
            aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </nav>
    <aside :class="hideSidebar ? 'sidebar hide' : 'sidebar'">
        <div class="sidebar-header">
            <i class="bi bi-gear"></i>
            <h2>Settings</h2>
        </div>
        <div class="weather-widget-wrapper">
            <WeatherWidget />
        </div>
    </aside>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";

.sidebar {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    overflow-x: hidden;
    flex-direction: column;
    background: #161a2d;
    padding: calc($header-height + 20px) 25px 20px;
    transition: all 0.4s ease;
    width: $sidebar-open-width;

    @include media-breakpoint-up(sm) {
        padding-top: 25px;
        width: $sidebar-closed-width;
    }

    &.hide {
        transform: translateX(calc($sidebar-open-width * -1));

        @include media-breakpoint-up(sm) {
            transform: unset;
        }
    }

    &:hover {
        width: $sidebar-open-width;

        .sidebar-header {
            h2 {
                opacity: 1;
            }
        }
    }

    .sidebar-header {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: .8rem;

        .bi {
            color: white;
            font-size: x-large;
        }

        h2 {
            opacity: 1;
            transition: $transition-fade;
            color: #fff;
            font-size: 1.25rem;
            font-weight: 600;
            white-space: nowrap;
            margin: 0;

            @include media-breakpoint-up(sm) {
                opacity: 0;
            }
        }

        h4 {
            color: #fff;
            font-weight: 500;
            white-space: nowrap;
            margin: 10px 0;
            position: relative;
        }
    }
}

.sidebar .sidebar .sidebar-header .sidebar .sidebar-header .sidebar-links .sidebar-links h4 span {
    opacity: 0;
}

.sidebar:hover .sidebar-links h4 span {
    opacity: 1;
}

.sidebar-links .menu-separator {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
    transform: scaleX(1);
    transform: translateY(-50%);
    background: #4f52ba;
    transform-origin: right;
    transition-delay: 0.2s;
}

.sidebar:hover .sidebar-links .menu-separator {
    transition-delay: 0s;
    transform: scaleX(0);
}

.sidebar-links {
    list-style: none;
    margin-top: 20px;
    height: 80%;
    overflow-y: auto;
    scrollbar-width: none;
}

.sidebar-links::-webkit-scrollbar {
    display: none;
}

.sidebar-links li a {
    display: flex;
    align-items: center;
    gap: 0 20px;
    color: #fff;
    font-weight: 500;
    white-space: nowrap;
    padding: 15px 10px;
    text-decoration: none;
    transition: 0.2s ease;
}

.sidebar-links li a:hover {
    color: #161a2d;
    background: #fff;
    border-radius: 4px;
}

.weather-widget-wrapper {
    margin-top: auto;
    padding: 12px 10px;
    background: #fff;
    border-radius: 4px;
}

.navbar {
    height: $header-height;

    @include media-breakpoint-up(sm) {
        display: none;
    }
}
</style>