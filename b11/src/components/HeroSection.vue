<template>
    <section>
        <div class="radial-top"></div>
        <div class="radial-bottom"></div>

        <div class="heading-container">
            <h1 id="heading">{{ text }}</h1>
        </div>
        
        <div id="module-parent">

            <div id="preview-left">previous</div>
            <div id="mtr">

                <div class="mtr-back">
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z"/></svg>
                </div>

                <div class="mtr-spotlight">
                    <div class="carousel">
                        <div class="slides-container" :style="{ transform: 'translateX(' + translateX + 'px)' }">
                        <div v-for="(slide, index) in slides" :key="index" class="slide">{{ slide }}</div>
                        </div>
                        <button class="prev-btn" @click="previousSlide">&lt;</button>
                        <button class="next-btn" @click="nextSlide">&gt;</button>
                    </div>
                </div>

                <div class="mtr-next">
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z"/></svg>
                </div>
            </div>

            <div id="preview-right">next</div>
        </div>
    </section>
</template>


<script>
// import { CCarousel, CCarouselItem } from '@coreui/vue';
// import '@coreui/coreui/dist/css/coreui.min.css'
    export default {
        data() {
            return {
                text: 'RECYCLE WITH US //   BUY FROM SOURCE //   SELL TO THE WORLD //  RECYCLE WITH US //   BUY FROM SOURCE //   SELL TO THE WORLD //  RECYCLE WITH US //   BUY FROM SOURCE //   SELL TO THE WORLD //  ',
                currentSlide: 0,
                translateX: 0,
                slideWidth: 0,
                slides: ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"]
            };
        },
        mounted() {
            this.slideWidth = this.$el.querySelector(".slide").offsetWidth;
        },
        methods: {
            previousSlide() {
                if (this.currentSlide > 0) 
                {
                    this.currentSlide--;
                    this.translateX += this.slideWidth;
                }
            }
        },
        nextSlide() {
            if (this.currentSlide < this.slides.length - 1) 
            {
                this.currentSlide++;
                this.translateX -= this.slideWidth;
            }
        }
    }
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

    // START OF SPAGHETTI
    .carousel {
    position: relative;
    overflow: hidden;
    }

    .slides-container {
    display: flex;
    transition: transform 0.3s ease-in-out;
    }

    .slide {
    flex: 0 0 auto;
    width: 100%;
    }

    .prev-btn,
    .next-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    }

    .prev-btn {
    left: 0;
    }

    .next-btn {
    right: 0;
    }

    // END OF SPAGHETTI

    section {
        height: 100vh;
        width: 100vw;
        background-color: white;
    }

    .radial-top, .radial-bottom {
        position: absolute;
        height: 80vh;
        width: 80vh;
        background: radial-gradient(50% 50% at 50% 50%, #6FDDA8 0%, rgba(111, 221, 168, 0) 100%);
        filter: blur(17.5px);
        // z-index: -1;
    }
    .radial-top {
        top: -40vh;
        left: -40vh
    }

    .radial-bottom {
        top: 60vh;
        left: 150vh;
    }

    .heading-container {
        width: 100%;
        overflow: hidden;
    }

    #heading {
        height: auto;
        width: 100vw;
        display: inline-block;
        align-items: center;
        justify-content: center;
        font-family: 'Caslon Semi Bold Hairline';
        font-size: 5rem;
        font-weight: 400;
        font-style: normal;
        line-height: 115px;
        letter-spacing: 0.115em;
        white-space: nowrap;
        animation: scroll-left 30s linear infinite;
        transform: translateX(-100%);
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
        background-color: red;;

        font-family: 'Caslon Semi Bold Hairline';
        font-size: 3rem;
        font-weight: 400;
        font-style: normal;
        // letter-spacing: 0.115em;
    }

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
        border: 3px dashed #464646;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @keyframes scroll-left {
        0% {
            transform: translateX(-100%);
        }
        1% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(-100%);
        }
        101% {
            transform: translateX(100%);
        }
    }


</style>