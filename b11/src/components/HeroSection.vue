<template>
    <section>
        <div class="radial-top"></div>
        <div class="radial-bottom"></div>
        <h1 id="heading">RECYCLE WITH US</h1>
        <div id="module-parent">
            <div id="preview-left">previous</div>
            <div id="mtr">
                <div class="mtr-back">
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z"/></svg>
                </div>
                <div class="mtr-spotlight">
                    <carousel :autoplay="true" :interval="5000" :perPageCustom="[[0, 1], [480, 2], [768, 3], [992, 4]]">
                        <slide v-for="item in items" :key="item.id">
                            <img :src="item.image" alt="Slide Image">
                            <h3>{{ item.title }}</h3>
                            <p>{{ item.description }}</p>
                        </slide>
                    </carousel>
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
// @Component
// export default class Carousel extends Vue {
//   items = [
//     {
//       id: 1,
//       image: 'https://via.placeholder.com/350x150',
//       title: 'Slide 1',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//     },
//     {
//       id: 2,
//       image: 'https://via.placeholder.com/350x150',
//       title: 'Slide 2',
//       description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
//     },
//     {
//       id: 3,
//       image: 'https://via.placeholder.com/350x150',
//       title: 'Slide 3',
//       description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
//     }
//   ];

//   perPageCustom = [[0, 1], [480, 2], [768, 3], [992, 4]];

//   autoplay = true;

//   interval = 5000;
// }
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

    .mtr-spotlight {
        height: 63vh;
        width: 21vw;
        background-color: coral;
    }

</style>