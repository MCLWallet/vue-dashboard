<script setup lang="ts">
import { ref } from 'vue';

const hideSidebar = ref(true)

</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <h1>Vue Dashboard</h1>
        <button @click="hideSidebar = !hideSidebar" class="navbar-toggler" type="button"
            aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </nav>
    <aside :class="hideSidebar ? 'sidebar hide' : 'sidebar'">
        <div class="sidebar-header">
            <h2>CodingLab</h2>
        </div>
        <ul class="sidebar-links">
            <li>
                <a href="#">
                    Settings
                </a>
            </li>
        </ul>
        <div class="user-account">
            <!-- TODO: WeatherWidget -->
            <div class="user-profile">
                <div class="user-detail">
                    <h3>Eva Murphy</h3>
                    <span>Web Developer</span>
                </div>
            </div>
        </div>
    </aside>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";

.sidebar {
    position: fixed;
    z-index: 10;
    top: 56px;
    left: 0;
    height: 100%;
    display: flex;
    overflow-x: hidden;
    flex-direction: column;
    background: #161a2d;
    padding: 25px 20px;
    transition: all 0.4s ease;

    @include media-breakpoint-up(sm) {
        top: 0;
        width: 85px;
    }
}

.sidebar.hide {
    transform: translateX(-12rem);

    @include media-breakpoint-up(sm) {
        transform: unset;
    }
}

.sidebar:hover {
    width: 260px;
}

.sidebar .sidebar-header {
    display: flex;
    align-items: center;
}

.sidebar .sidebar-header img {
    width: 42px;
    border-radius: 50%;
}

.sidebar .sidebar-header h2 {
    color: #fff;
    font-size: 1.25rem;
    font-weight: 600;
    white-space: nowrap;
    margin-left: 23px;
}

.sidebar-links h4 {
    color: #fff;
    font-weight: 500;
    white-space: nowrap;
    margin: 10px 0;
    position: relative;
}

.sidebar-links h4 span {
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

.user-account {
    margin-top: auto;
    padding: 12px 10px;
    margin-left: -10px;
}

.user-profile {
    display: flex;
    align-items: center;
    color: #161a2d;
}

.user-profile img {
    width: 42px;
    border-radius: 50%;
    border: 2px solid #fff;
}

.user-profile h3 {
    font-size: 1rem;
    font-weight: 600;
}

.user-profile span {
    font-size: 0.775rem;
    font-weight: 600;
}

.user-detail {
    margin-left: 23px;
    white-space: nowrap;
}

.sidebar:hover .user-account {
    background: #fff;
    border-radius: 4px;
}

.navbar {
    @include media-breakpoint-up(sm) {
        display: none;
    }
}
</style>