<template>
    <section>
        <nav id="nav-parent"></nav>
        <h1 id="heading">RECYCLE WITH US</h1>
    </section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
    @font-face {
        font-family: 'Caslon Regular Display';
        src: url(../assets/fonts/F37Caslon-RegularDisplay.otf);
    }

    @font-face {
        font-family: 'Caslon Semi Bold Hairline';
        src: url(../assets/fonts/F37Caslon-SemiBoldHairline.otf);
    }

    @font-face {
        font-family: 'Lato Regular';
        src: url(../assets/fonts/F37Lato-Regular.ttf);
    }

    #nav-parent {
        height: 10vh;
        width: 100vw;
        background-color: red;
    }

    #heading {
        height: auto;
        width: 100vw;
        font-family: 'Caslon Semi Bold Hairline';
        font-size: 5rem;
        font-weight: 400;
        font-style: normal;
        line-height: 115px;
        letter-spacing: 0.115em;
    }

    section {
        height: 100vh;
        width: 100vw;
        background-color: white;
    }
</style>