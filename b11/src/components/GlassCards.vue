<template>
    <div class="card-container">
      <div class="card" v-bind:class="{ 'active': card1Active }" @click="card1Active = !card1Active">
        <img src="https://picsum.photos/400/300?random=1" alt="Card 1">
        <div class="label">
          <div class="title">Card 1</div>
          <div class="subtitle">Subtitle 1</div>
        </div>
        <button class="info-button" @click="showInfo(1)">i</button>
      </div>
  
      <div class="card middle-card" v-bind:class="{ 'active': card2Active }" @click="card2Active = !card2Active">
        <img src="https://picsum.photos/400/300?random=2" alt="Card 2">
        <div class="label">
          <div class="title">Card 2</div>
          <div class="subtitle">Subtitle 2</div>
        </div>
        <button class="info-button" @click="showInfo(2)">i</button>
      </div>
  
      <div class="card" v-bind:class="{ 'active': card3Active }" @click="card3Active = !card3Active">
        <img src="https://picsum.photos/400/300?random=3" alt="Card 3">
        <div class="label">
          <div class="title">Card 3</div>
          <div class="subtitle">Subtitle 3</div>
        </div>
        <button class="info-button" @click="showInfo(3)">i</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        card1Active: false,
        card2Active: false,
        card3Active: false
      }
    },
    methods: {
      showInfo(cardNumber) {
         
      }
    }
  }
  </script>
  
  <style scoped>
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-top: 5rem;
  }
  
  .card {
    width: 350px;
    height: 450px;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-out;
  }
  
  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  .card.active {
    box-shadow: none;
  }
  
  .card img {
    width: 100%;
    height: 70%;
    object-fit: cover;
    transition: all 0.3s ease-out;
  }
  
  .card.active img {
    filter: brightness(50%);
  }
  
  .label {
    position: absolute;
    width: 100%;
    padding-top: 10%;
    background-color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
  .title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  
  .subtitle {
    font-size: 20px;
    color: #999;
  }
  
  .info-button {
    position: absolute;
  }
</style>
  