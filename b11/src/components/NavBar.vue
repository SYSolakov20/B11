<template>
    <div class="nav-wrapper">
        <router-link to="/">
            <div class="logo">B11</div>
        </router-link>
        <div class="text-wrapper">BUY / SELL / AQUIRE</div>
        <div class="menu-button">Menu</div>
    </div>
</template>

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
        src: url(../assets/fonts/Lato-Regular.ttf);
    }
    .nav-wrapper{
        width: 100vw;
        height: 10vh;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .logo, .text-wrapper, .menu-button {
        z-index: 10;
    }
    .logo{
        font-family: "Caslon Semi Bold Hairline";
        font-size: 3.75rem;
        color: black;
        text-decoration: none;
    }
    .text-wrapper{
        font-family: "Lato Regular";
        font-size: 1.5rem;
    }
    .menu-button{
        font-family: "Lato Regular";
        font-size: 1.4rem;
        border: 2px dashed #919191;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>


<script lang="ts" setup>

</script>