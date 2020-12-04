<template>
  <div id="app">
    <router-view class="login" />
    <div id="wrapper">
      <router-view class="nav" name="indexleft"></router-view>
      <router-view class="content" name="indexright">
        <!-- 以下是二级路由的出口 -->
      </router-view>
    </div>
  </div>
</template>

<script>
import './assets/css/index.css'
export default {
  name: 'App',
}
</script>

<style>
</style>
