<template>
    <div class="slider-nav">
      <div class="slider-nav-container" :style="{ transform: 'translateX(' + translateX + 'px)' }">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="slider-nav-image"
          :class="{ active: index === activeIndex, prev: index === prevIndex, next: index === nextIndex }"
          :style="{ transform: 'scale(' + (index === activeIndex ? 1 : 0.8) + ')', opacity: (index === activeIndex ? 1 : 0.6) }"
        >
          <img :src="image.src" :alt="image.alt" />
        </div>
      </div>
      <div class="slider-nav-button slider-nav-button-prev" @click="prev">
        <div class="slider-nav-button-arrow"></div>
      </div>
      <div class="slider-nav-button slider-nav-button-next" @click="next">
        <div class="slider-nav-button-arrow"></div>
      </div>
      <div class="slider-nav-text slider-nav-text-prev">{{ prevText }}</div>
      <div class="slider-nav-text slider-nav-text-next">{{ nextText }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          { src: 'https://picsum.photos/id/1018/300/500', alt: 'Image 1' },
          { src: 'https://picsum.photos/id/1015/300/500', alt: 'Image 2' },
          { src: 'https://picsum.photos/id/1019/300/500', alt: 'Image 3' },
          { src: 'https://picsum.photos/id/1025/300/500', alt: 'Image 4' },
          { src: 'https://picsum.photos/id/1024/300/500', alt: 'Image 5' },
        ],
        activeIndex: 0,
        prevIndex: null,
        nextIndex: 1,
        translateX: 0,
        prevText: 'Previous',
        nextText: 'Next',
      };
    },
    methods: {
      prev() {
        if (this.activeIndex > 0) {
          this.prevIndex = this.activeIndex - 1;
          this.nextIndex = this.activeIndex;
          this.activeIndex = this.activeIndex - 1;
          this.translateX = this.translateX + 330;
        }
      },
      next() {
        if (this.activeIndex < this.images.length - 1) {
          this.prevIndex = this.activeIndex;
          this.nextIndex = this.activeIndex + 1;
          this.activeIndex = this.activeIndex + 1;
          this.translateX = this.translateX - 330;
        }
      },
    },
  };
  </script>
  
  <style>
  .slider-nav {
    position: relative;
    margin: 0 auto;
    width: 90%;
    max-width: 1200px;
    height: 600px;
    overflow: hidden;
  }
  
  .slider-nav-container {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    transition: transform 0.5s ease-in-out;
  }
  
  .slider-nav-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider-nav-image.active {
  z-index: 2;
}

.slider-nav-image.prev {
  position: absolute;
  z-index: 1;
  transform: translateX(-250px) scale(0.8);
  opacity: 0.6;
}

.slider-nav-image.next {
  position: absolute;
  z-index: 1;
  transform: translateX(250px) scale(0.8);
  opacity: 0.6;
}

.slider-nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.slider-nav-button:hover {
  background-color: rgba(255, 255, 255, 0.8);
}

.slider-nav-button-prev {
  left: 0;
  border-radius: 0 50px 50px 0;
}

.slider-nav-button-next {
  right: 0;
  border-radius: 50px 0 0 50px;
}

.slider-nav-button-arrow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  width: 16px;
  height: 16px;
  border-left: 2px solid #000;
  border-bottom: 2px solid #000;
}

.slider-nav-text {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 120px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
}

.slider-nav-text-prev {
  left: 0;
  transform: translateY(-50%) rotate(-90deg);
}

.slider-nav-text-next {
  right: 0;
  transform: translateY(-50%) rotate(90deg);
}
</style>