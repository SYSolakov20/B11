<template>
    <div class="section-wrapper">
        <div class="section-heading">Buy Glass</div>
        <div class="separation-line"></div>
        <div class="wrapper-na-wrapper" :style="{ overflowX: 'hidden' }">
            <div class="seller-wrapper">
                <div class="seller-image"></div>
                    <div class="seller-info">
                        <div class="seller-rating">Top Quality</div>
                        <div class="seller-name">Vili Vilev</div>
                    </div>
            </div>
            <div class="seller-wrapper">
                <div class="seller-image" id="seller2"></div>
                    <div class="seller-info">
                        <div class="seller-rating">Top Quantity</div>
                        <div class="seller-name">Asen Boev</div>
                    </div>
            </div>
            <div class="seller-wrapper">
                <div class="seller-image" id="seller3"></div>
                    <div class="seller-info">
                        <div class="seller-rating">Top Seller</div>
                        <div class="seller-name">Alex Cruse</div>
                    </div>
            </div>
        </div>
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
    .section-wrapper{
        width: 100vw;
    }
    .section-heading{
        font-family: "Caslon Semi Bold Hairline";
        font-size: 6rem;
        margin-top: 2rem;
        padding-left: 3rem;
    }
    .separation-line{
        width: 10vw;
        height: 4px;
        background-color: #D05858;
        margin-top: 1rem;
        margin-left: 3rem;
    }
    .wrapper-na-wrapper{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 5%;
    }
    .seller-wrapper{
        width: 430px;
        height: 120px;
        background-color: #D9D9D9;
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 2.7rem;
        margin-left: 3rem;
    }
    .seller-image{
        width: 71px;
        height: 71px;
        background-image: url(../assets/images/profile_1.jpg);
        background-repeat: no-repeat;
        border-radius: 50%;
    }
    #seller2{
        background-image: url(../assets/images/profile_2.jpg);
    }
    #seller3{
        background-image: url(../assets/images/profile_3.jpg);
    }
    .seller-info{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 13px;
        margin-right: 190px;
    }
    .seller-rating{
        font-family: "Lato Regular";
        font-size: 1rem;
    }
    .seller-name{
        font-family: "Caslon Regular Display";
        font-size: 1.625rem;
    }
</style>


<script lang="ts" setup>



</script>