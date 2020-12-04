<template>
  <div class="index"></div>
</template>

<script>
// 这里引入CSS样式初始化 全局的
import '../assets/css/init.css'
export default {
  name: 'index',
  data() {
    return {}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="">
.index {
  background: red;
  height: 2%;
  width: 10%;
  position: absolute;
  /* 这里跳转z-index可以控制显示层级 */
  /* z-index: 1; */
  opacity: 0.5;
}
</style>
