<template>
    <main>
        <h1>Inspiration Dashboard</h1>
        <div class="main-grid">
            <slot></slot>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";

main {
    margin-top: $header-height;
    padding: $container-padding-x;

    h1 {
        display: none;

        @include media-breakpoint-up(sm) {
            margin-bottom: 1.5rem;
            display: block;
        }
    }

    @include media-breakpoint-up(sm) {
        margin-top: 0;
        margin-left: $sidebar-closed-width;
    }
}

.main-grid {
    display: grid;
    grid-gap: $grid-gutter-width;

    @include media-breakpoint-up(sm) {
        grid-template-columns: 1fr 1fr;
    }


}
</style>