<template>
  <!--  -->
  <section class="carousel-index">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in banners" :key="index">
          <router-link :to="item.path">
            <img :src="item.img" alt="" />
          </router-link>
        </div>
      </div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev swiper-button-white ml-3"></div>
      <div class="swiper-button-next swiper-button-white mr-3"></div>
    </div>
  </section>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
  mounted() {
    this.swiperStart();
  },
  methods: {
    swiperStart() {
      let mySwiper = new Swiper(".carousel-index .swiper-container", {
        direction: "horizontal",
        loop: true,
        speed: 800,
        autoplay: 5500,
        prevButton: ".swiper-button-prev",
        nextButton: ".swiper-button-next",
      });
    },
  },
  name: "carrouselIndex",
  data() {
    return {
      banners: [
        {
          path: "/menu",
          img: require("@/assets/jpg/main_02_big.jpg"),
        },
        {
          path: "/account",
          img: require("@/assets/jpg/main_01_big.jpg"),
        },
      ],
    };
  },
};
</script>

<style>
.carousel-index {
  width: 100%;
  height: 100%;
  margin-top: -24px;
}
</style>