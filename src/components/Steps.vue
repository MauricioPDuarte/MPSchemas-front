<template>
    <div class="steps">
        <slot></slot>
    </div>
</template>

<script>
    const data = {};

    export default {
        name: "Steps",
        data: () => data,
        props: {

        },
        computed: {

        }
    }
</script>

<style scoped>
    .steps {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }
</style>