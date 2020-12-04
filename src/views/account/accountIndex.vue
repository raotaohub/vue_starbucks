<template>
  <div>
    <section class="carousel-index">
      <img src="@/assets/jpg/header_cn_2020_06_02.jpg" />
    </section>

    <section class="join-form">
      <div class="qrcode">
        <p class="text-center m-0 p-0">扫码登录</p>
        <img src="" alt="" />
      </div>

      <div class="wrapper pl-3 pr-3">
        <div class="login-form">
          <div class="form-field">
            <div class="field floating">
              <div class="ok">
                <div class="username">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="用户名或者电子邮箱"
                    value=""
                    autocomplete="new-password"
                  />
                </div>
              </div>
            </div>

            <div class="password-group-field">
              <div class="ok">
                <div class="password">
                  <input
                    type="password"
                    name="password"
                    placeholder="密码"
                    value=""
                    autocomplete="new-password"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="field checkbox">
              <input type="checkbox" id="login-remember" value="on" /><label
                for="login-remember"
                ><span>下次自动登录</span></label
              >
            </div>
            <p><a href="">忘记密码</a></p>
          </div>
          <div>
            <iframe src="" frameborder="0"></iframe>
          </div>
        </div>
        <!-- <div class="  float-right">
          <button class="btn btn-lg login-btn ">登录</button>
        </div> -->
        <div class="actions">
          <button class="btn button large" disabled>
            <span>登录</span>
          </button>
        </div>

        <div class="clearfix"></div>
      </div>
    </section>

    <section class="carousel-index">
      <div class="account-footer">
        <div class="wrapper account-footer-box">
          <h2 class="text-white">加入星享俱乐部</h2>
          <p class="text-white-50 h5 mb-4">
            只需几分钟，便可成功注册星享俱乐部帐户，成为“星”会员，立即开启集星之旅。
          </p>
          <router-link to="/account">
            <button type="button" class="logon-smile btn btn-outline-success">
              注册
            </button>
          </router-link>
        </div>
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
.field {
  display: block;
  margin-bottom: 18px;
  padding-top: 25px;
  position: relative;
}
.form-field {
  position: relative;
}
.username > input,
.password > input {
  width: 100%;
  background: none;
  font-size: 18px;
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  -ms-border-bottom: 1px solid #edebe9;
  border-radius: 0;
  box-sizing: border-box;
  display: block;
  padding: 4px 0;
  transition-property: border;
  transition-duration: 0.2s;
}

.qrcode {
  height: 100px;
  width: 100px;
  position: absolute;
  right: 10px;
  top: 0px;
  background: url('../../assets/jpg/qrcode-login-tip.png') no-repeat;
  background-size: 100%;
}

/* 登录按钮 */
.actions {
  float: left;
  width: 100%;
  padding: 24px 0;
  text-align: right;
}
.large {
  border-radius: 50px;
  border: silver solid 1px;
}
.actions .button {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.38);
  margin-bottom: 4px;
  font-weight: 700;
  padding: 12px 24px;
}

/* 底部 */
.account-footer {
  background: url('../../assets/jpg/header_cn_2020_06_02.jpg') no-repeat;
  height: 280px;
}
.account-footer-box {
  padding: 50px;
}
</style>