<template>
  <div>
    <section class="carousel-index">
      <img src="@/assets/jpg/header_cn_2020_06_02.jpg" />
    </section>

    <section class="join-form">
      <div class="wrapper-app">
        <div class="app-register-desc">
          <h3>使用星巴克App进行注册</h3>
          <p>
            <span
              >现在就下载<a class="text-success">星巴克App</a>
              便可直接用手机进行注册、支付、查看消费记录及管理卡片。</span
            >
          </p>
        </div>
        <div class="float-right">
          <img
            width="193"
            height="409"
            src="@/assets/jpg/register-download-app-image-cn-2020-06-02.png"
            alt=""
          />
        </div>
        <div class="clearfix"></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style>
.join-form {
  position: relative;
  margin: 10px 0;
  height: 100%;
  width: 100%;
}
.join-form .wrapper {
  overflow: hidden;
  max-width: 480px;
}
.wrapper-app {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -webkit-align-items: center;
  -webkit-justify-content: center;
}

.app-register-desc {
  width: 480px;
  margin-right: 24px;
}
</style>