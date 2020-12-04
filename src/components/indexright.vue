<template>
  <section class="content-right">
    <div class="tag_ad">广告</div>
    <!--子路由的出口， 利用keep-alive使加载过的路由不注销，提高性能？这里我不确定，因为如果我所有页面都被缓存，是否反而影响性能呢?? -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 就像我在/router/index.js 中注解说的那样，“由于每个子路由都有后代路由，父路所在的组件 仅作为子路由的出口来使用”
    如果不将父组件作为出口使用，那么就需要增加v-show逻辑来隐藏 其他路由页面产生的视图，
    在这里我做了一个违背我设计初衷的操作，因为我不想再封装一个视图了，
    此处 index页面也就是首页右侧视图，只要有子路由被渲染，就使这里的视图隐藏 ，否则父子路由的页面会一上一下，在这个组件渲染。-->
    <div v-show="this.$route.path === '/'">
      <carousel-index></carousel-index>
      <promotion></promotion>
      <programClub></programClub>
      <tmall></tmall>
      <coffee-house></coffee-house>
      <license></license>
    </div>
  </section>
</template>

<script>
import accountComponent from './commons/accountComponent.vue'
import carouselIndex from './commons/carouselIndex.vue'
import promotion from './commons/promotion.vue'
import programClub from './commons/programClub.vue'
import tmall from './commons/tmall.vue'
import coffeeHouse from './commons/coffeehouse.vue'
import license from './commons/license.vue'

export default {
  components: {
    accountComponent,
    carouselIndex,
    promotion,
    programClub,
    tmall,
    coffeeHouse,
    license,
  },
}
</script>

<style>
</style>