<template>
    <section>
        <h1 id="heading">RECYCLE WITH US</h1>
        <div id="module-parent">
            <div id="preview-left">previous</div>
            <div id="mtr">
                <div class="mtr-back"></div>
                <div class="mtr-spotlight"></div>
                <div class="mtr-next"></div>
            </div>
            <div id="preview-right">next</div>
        </div>
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

    section {
        height: 100vh;
        width: 100vw;
        background-color: white;
    }

    #heading {
        height: auto;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Caslon Semi Bold Hairline';
        font-size: 5rem;
        font-weight: 400;
        font-style: normal;
        line-height: 115px;
        letter-spacing: 0.115em;
    }

    #module-parent {
        width: 100vw;
        height: 80vh;
        display: flex;
        background-color: blue;
    }

    #preview-left, #preview-right {
        height: inherit;
        width: 5vw;
        flex-direction: column;
        text-align: center;
        background-color: red;

        font-family: 'Caslon Semi Bold Hairline';

        font-weight: 400;
        font-style: normal;
        letter-spacing: 0.115em;    }

    #preview-left {
        writing-mode: sideways-lr;
        justify-self: flex-start;
    }

    #preview-right {
        writing-mode: sideways-rl;
        justify-self: flex-end;
    }

    #mtr {
        height: inherit;
        width: 90vw;
        background-color: green;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .mtr-back, .mtr-next {
        height: 100px;
        width: 100px;
        background-color: aqua;
        margin: 5vw;
    }

    .mtr-spotlight {
        height: 63vh;
        width: 21vw;
        background-color: coral;
    }

</style>