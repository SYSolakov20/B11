<template>
      <div class="card-container">
        <div class="card" v-for="(card, index) in cards" :key="index">
          <div class="card-top" :class="{ dimmed: card.showInfo }">
            <img :src="card.image" alt="card image" />
            <button class="info-button" @click="toggleInfo(index)">i</button>
          </div>
          <router-link to="/product">
            <div class="card-bottom">
              <div class="card-label">{{ card.label1 }}</div>
              <div class="card-label">{{ card.label2 }}</div>
            </div>
          </router-link>
          <div class="card-info" v-if="card.showInfo">
            <div class="card-info-overlay" @click="toggleInfo(index)"></div>
            <div class="card-info-content">
              <h3>{{ card.title }}</h3>
              <p>{{ card.description }}</p>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          image: "https://cdn.discordapp.com/attachments/900689339179216926/1098472893681238036/card_glass_1.png",
          label1: "GLASS X11",
          label2: "ALEX",
          title: "Card 1 Title",
          description: "Card 1 Description",
          showInfo: false,
        },
        {
          image: "https://cdn.discordapp.com/attachments/900689339179216926/1098477444475916399/orane-thomas-YMp4-6VGA0s-unsplash_1.png",
          label1: "GLASS PICES",
          label2: "IVAN",
          title: "Card 2 Title",
          description: "Card 2 Description",
          showInfo: false,
        },
        {
          image: "https://cdn.discordapp.com/attachments/900689339179216926/1098478730885738516/orane-thomas-YMp4-6VGA0s-unsplash_1.png",
          label1: "GLASS PANES",
          label2: "VICTOR",
          title: "Card 3 Title",
          description: "Card 3 Description",
          showInfo: false,
        },
      ],
    };
  },
  methods: {
    toggleInfo(index) {
      this.cards[index].showInfo = !this.cards[index].showInfo;
    },
  },
};
</script>

<style scoped>
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
.card-container {
  display: flex;
  justify-content: space-evenly;
  margin-top: 5%;
}

.card {
  width: 320px;
  margin-top: 20px;
  position: relative;
}

.card-top {
  position: relative;
}

.card-top img {
  width: 100%;
  height: 350px;
}

.info-button {
  position: absolute;
  top: 10px;
  right: 15px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  background-color: black;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  font-family: "Caslon Semi Bold Hairline";
  color: white;
}

.card-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #000;
  color: #fff;
}

.card-label {
  font-size: 1.2rem;
  font-family: "Lato Regular";
}

.dimmed {
  filter: brightness(0.5);
}

.card-info {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.card-info-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 3;
  cursor: pointer;
}
.card-info-content {
  max-width: 80%;
  padding: 20px;
  text-align: center;
  z-index: 4;
}

.card-info-content h3 {
  font-size: 2rem;
  margin-bottom: 10px;
  font-family: "Lato Regular";
  color: white;
}

.card-info-content p {
  font-size: 1.4rem;
  line-height: 1.5;
  font-family: "Lato Regular";
  color: white;
}
</style>