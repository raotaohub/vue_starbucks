<template>
  <section class="coffeehouse">
    <div class="coffeehouse-box">
      <h2 class="h2 mb-3">1912 派克街 | 咖啡星讲堂</h2>
      <div class="text-secondary mb-5">了解更多星巴克咖啡文化</div>
    </div>
    <div class="coffeehouse-swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in coffeeHouseList"
            :key="index"
          >
            <div class="coffeehouse-page">
              <img
                :src="item.img"
                style="width: 288px; height: 168px; background-size: 100%"
                alt=""
              />
              <span class="coffeehouse-tag bg-warning h5 p-1">{{
                item.title
              }}</span>
              <p class="coffeehouse-content">{{ item.content }}</p>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev ml-3"></div>
        <div class="swiper-button-next ml-3"></div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  mounted() {
    this.swiperStart()
  },
  methods: {
    swiperStart() {
      let mySwiper = new Swiper('.coffeehouse-swiper .swiper-container', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: '4',
        freeMode: true,
        centeredSlides: true,

        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
      })
    },
  },
  data() {
    return {
      coffeeHouseList: [
        {
          title: '咖啡知识',
          content: '咖啡的起源与培植',
          url:
            'https://www.starbucks.com.cn/coffee-blog/the-origin-of-coffee-and-its-cultivation/',
          img: require('@/assets/image/home-page/coffeehouse-coffee-cultivation-kv.jpg'),
        },
        {
          title: '咖啡评鉴',
          content: '咖啡调制',
          url: 'https://www.starbucks.com.cn/coffee-blog/the-4-fundamentals/',
          img: require('@/assets/image/home-page/coffeehouse-4-fundamentals-kv.jpg'),
        },
        {
          title: '咖啡知识',
          content: '咖啡烘焙',
          url: 'https://www.starbucks.com.cn/coffee-blog/roast-story/',
          img: require('@/assets/image/home-page/coffeehouse-roast-story-kv.jpg'),
        },
        {
          title: '咖啡评鉴',
          content: '手冲咖啡',
          url: 'https://www.starbucks.com.cn/coffee-blog/pour-over/',
          img: require('@/assets/image/home-page/coffeehouse-pour-over-kv.jpg'),
        },
      ],
    }
  },
}
</script>

<style>
.coffeehouse {
  padding: 24px 0;
  text-align: center;
}
.coffeehouse-card {
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 768px;
  width: 100%;
}
.coffeehouse-page {
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  position: relative;
  padding: 0 6px;
  text-align: center;
  width: 100%;
}
.coffeehouse-page:hover {
  transition: all 0.2s ease;
  transform: translate3d(0, -4px, 0);
  box-shadow: 0 1px 3px 2px rgba(0, 0, 0, 0.12);
}
.coffeehouse-tag {
  position: absolute;
  left: 0px;
  top: -145px;
}
</style>