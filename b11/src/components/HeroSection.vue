<template>
    <section>
        <h1 id="heading">RECYCLE WITH US</h1>
        <div id="module-parent">
            <div id="preview-left">previous</div>
            <!-- <div id="mtr">
                <div class="mtr-back"></div>
                <div class="mtr-spotlight"></div>
                <div class="mtr-next"></div>
            </div> -->
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
        flex-direction: column;
        text-align: center;
        background-color: red;
    }

    #preview-left {
        flex-direction: column;
        writing-mode: sideways-lr;
    }

    #preview-right {
        flex-direction: column;
        writing-mode: sideways-rl;
    }

</style>