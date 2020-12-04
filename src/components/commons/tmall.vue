<template>
  <section class="tmall">
    <div class="tmall-box">
      <h2 class="h2 mb-3">星巴克精选</h2>
      <div class="text-secondary mb-5">在星巴克天猫旗舰店发现更多咖啡心意</div>
      <ul class="tmall-card row pt-5" style="margin: 0 auto">
        <li
          class="tmall-card-page col bg-white border border-light m-3"
          v-for="(item, index) in tmallList"
          :key="index"
        >
          <a :href="item.url" target="_blank">
            <img class="d-block" :src="item.img" />
            <span class="d-block h5 mt-5 mb-3">{{ item.title }}</span>
            <span class="d-block" v-html="item.content"></span>
            <span class="d-block mt-3 mb-4 text-success">了解更多 ></span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tmallList: [
        {
          title: '会员星礼包',
          content: '星享卡新升级<br/>更多心意好礼',
          url: 'https://starbucks.tmall.com/p/rd796757.htm',
          img: require('@/assets/image/home-page/tmall-card-01.png')
        },
        {
          title: '星礼卡',
          content: '用一份心礼<br>让心意相随',
          url:
            'https://starbucks.tmall.com/p/rd993825.htm?spm=a1z10.1-b-s.w5001-14489348230.6.MtuIoi',
          img: require('@/assets/image/home-page/tmall-card-02.png')
        },
        {
          title: '电子产品券',
          content: '心意<br>从这一杯开始',
          url:
            'https://starbucks.tmall.com/p/rd103766.htm?spm=a1z10.1-b-s.w5001-14489348230.8.MtuIoi',
          img: require('@/assets/image/home-page/tmall-card-03.png')
        },
        {
          title: '咖啡生活',
          content: '星巴克<br>永新制作',
          url:
            'https://starbucks.tmall.com/category-1141443816.htm?spm=a1z10.1-b-s.w4006-14489348233.10.MtuIoi',
          img: require('@/assets/image/home-page/tmall-card-04.png')
        }
      ]
    }
  }
}
</script>

<style>
.tmall {
  padding: 24px 0;
  background: rgba(0, 0, 0, 0.05);
  text-align: center;
}
.tmall-card {
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 768px;
  width: 100%;
}

.tmall-card-page {
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
.tmall-card-page:hover {
  transition: all 0.2s ease;
  transform: translate3d(0, -4px, 0);
  box-shadow: 0 1px 3px 2px rgba(0, 0, 0, 0.12);
}
.tmall-card-page img {
  margin: 0 auto;
  margin-top: -48px;
  height: 72px;
  margin-bottom: -24px;
}
</style>