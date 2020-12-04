<template>
  <section class="program-club">
    <!-- 这里用的是bootstrap的flexbox布局 -->
    <div class="club-box row" style="margin: 0 auto">
      <!-- 有几个col就表示每个col的标签 占父元素 col数量/100 这里两个col所以是每个占50%-->
      <div class="club-left col">
        <h2 class="h2 mb-4">星享俱乐部</h2>
        <p class="text-secondary mb-4">
          开启您的星享之旅，星星越多、会员等级越高、好礼越丰富。<a
            class="text-success"
            href="https://www.starbucks.com.cn/account/starbucks-rewards"
            target="_blank"
            >了解更多 ›</a
          >
        </p>
        <!-- 这里是个登录注册的组件 多了个logo不做深入了 -->
        <account-component></account-component>
      </div>
      <div class="club-right col">
        <img src="@/assets/image/logo-msr-new.svg" />
      </div>
      <!-- bootstrap的清除浮动，习惯性加的 -->
      <div class="clearfix"></div>
    </div>
  </section>
</template>

<script>
import accountComponent from './accountComponent'
export default {
  components: {
    accountComponent
  }
}
</script>

<style>
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 18px;
}
.program-club {
  overflow: hidden;
  z-index: 100;
}
.club-box {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 768px;
  width: 100%;
}
.club-left,
.club-right {
  padding-top: 36px;
  padding-bottom: 36px;
}
</style>