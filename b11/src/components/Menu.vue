<template>
    
</template>
<!-- <template>
    <section>
        <div class="wrapper">
            <div class="grid-container">
            <div class="grid-row" v-for="row in 4" :key="row">
            <div class="grid-item" v-for="column in 3" :key="getRowColumnKey(row, column)">
                {{ items[(row - 1) * 3 + column - 1].name }}
            </div>
        </div>
  </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    section {
        height: 100vh;
        width: 100vw;
        background-color: #D05858;
    }

    .grid-container, .grid-row {
        display: flex;
        color: #DCBABA;
        font-family: 'F';
        font-size: 5rem;
    }
    .grid-container {
        flex-direction: column;
        padding-top: 30vh;
        margin-left: -5vw;
    }

    .grid-row {
        flex-direction: row;
    }

    .grid-item {
        padding: 1rem;
        text-align: center;
        flex: 1;
        margin: 0.5rem;
    }
</style>

<script lang="ts" setup>
    export default {
    data() {
        return {
        items: [
            { id: 1, name: "Item 1" },
            { id: 2, name: "Item 2" },
            { id: 3, name: "Item 3" },
            { id: 4, name: "Item 4" },
            { id: 5, name: "Item 5" },
            { id: 6, name: "Item 6" },
            { id: 7, name: "Item 7" },
            { id: 8, name: "Item 8" },
            { id: 9, name: "Item 9" },
            { id: 10, name: "Item 10" },
            { id: 11, name: "Item 11" },
            { id: 12, name: "Item 12" }
        ]
        };
    },
    methods: {
        getRowColumnKey(row, column) {
        return `${row}-${column}`;
        }
    }
    };
</script> -->
