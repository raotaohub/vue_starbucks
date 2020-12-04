<template>
  <section class="promotion container">
    <div class="row card-box">
      <div
        class="col m-n2"
        href=""
        v-for="(item, index) in cardList"
        :key="index"
      >
        <a class="card" :href="item.url" target="_blank">
          <img class="card-img" :src="item.img" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cardList: [
        {
          url: 'https://starbucks.tmall.com/',
          img: require('@/assets/image/images-page/tmall-2020-06-29-zh.jpg'),
        },
        {
          url: 'https://www.starbucks.com.cn/design-studio/',
          img: require('@/assets/image/images-page/starbucks-design-studio-web-china.jpg'),
        },
        {
          url: 'https://www.starbucks.com.cn/about/careers/',
          img: require('@/assets/image/images-page/homepage-career-cn.jpg'),
        },
      ],
    }
  },
  methods: {},
}
</script>

<style>
.promotion {
  padding: 24px 0;
  background: rgba(0, 0, 0, 0.05);
}
@media (min-width: 1025px) {
  .card-box {
    padding-left: 24px;
    padding-right: 24px;
  }
}
.card-box {
  max-width: 100%;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
.card:hover {
  transition: all 0.2s ease;
  transform: translate3d(0, -4px, 0);
  box-shadow: 0 1px 3px 2px rgba(0, 0, 0, 0.12);
}
.card-img {
  overflow: hidden;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.12);
  border-radius: 2px;
}
</style>