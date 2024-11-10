<template>
    <main>
        <h1>Vue Dashboard</h1>
        <div class="main-grid">
            <slot></slot>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";

main {
    padding: $container-padding-x;

    h1 {
        display: none;

        @include media-breakpoint-up(sm) {
            display: block;
        }
    }

    @include media-breakpoint-up(sm) {
        margin-left: 85px;
    }
}

.main-grid {
    display: grid;
    grid-gap: 1rem;

    @include media-breakpoint-up(sm) {
        grid-template-columns: 1fr 1fr;
    }


}
</style>