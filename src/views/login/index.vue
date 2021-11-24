<template>
  <div id="login">
    <div class="h">
      <div class="h-logo">Lotus</div>
    </div>
    <div class="m">
      <div id="login-banner">
        <div id="login-card">
          <div class="login-title">
            <span>账户登录</span>
            <el-divider :style="{ 'background-color': '#cbcbcb' }"></el-divider>
          </div>

          <div class="login-form">
            <el-form
              :model="userLogin"
              :label-position="labelPosition"
              label-width="120px"
            >
              <el-form-item label="">
                <el-input
                  v-model="userLogin.name"
                  placeholder="请输入用户名/手机号"
                ></el-input>
              </el-form-item>
              <el-form-item label="">
                <el-input
                  v-model="userLogin.passwd"
                  type="password"
                  autocomplete="off"
                  placeholder="请输入密码"
                ></el-input>
              </el-form-item>
              <el-form-item> </el-form-item>
              <el-form-item>
                <el-button
                  class="button-full"
                  type="primary"
                  @click="submitForm('userLogin')"
                  >立即登录</el-button
                >
              </el-form-item>
            </el-form>
          </div>
          <div>
            <div class="login-tips">
              <router-link to="/login">忘记密码？</router-link>
              <router-link to="/login">没有账户？立即注册></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="f">
      <div class="links">
        <router-link to="/about">关于我们</router-link> |
        <router-link to="/contact">联系我们</router-link> |
        <router-link to="/contact">友情链接</router-link>
      </div>
      <div class="copyright">
        <p>Copyright © 2020-2021 macoloco 版权所有</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'

export default {
  name: "Login",
  data () {
    return {
      labelPosition: 'top',
      userLogin: {
        name: '',
        password: '',
      }
    }
  },
  methods: {
    submitForm () {
      this.$cookies.set("token","admin")
      this.$router.push('/')
    },
  }
}
</script>

<style>
#login {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 1000px;
  z-index: -10;
  zoom: 1;
  background-image: url("../../assets/images/login/bg.png");
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
}

.h {
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.h-logo {
  font-size: 3.5em;
  font-weight: bold;
  margin-left: 100px;
  color: #ffbcbb;
}

.m {
  width: 100%;
}

#login-banner {
  width: 1090px;
  height: 690px;
  margin: auto;
  position: relative;
}

#login-card {
  position: absolute;
  top: 165px;
  right: 120px;
  height: 310px;
  width: 300px;
  padding: 25px;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#login-card > div {
  margin-bottom: 15px;
}

.login-title {
  font-size: 1.3em;
  font-weight: bolder;
  color: #277cd5;
}

.login-tips {
  font-size: 0.5em;
  display: flex;
  justify-content: space-between;
}

.login-tips > a {
  color: rgb(114, 114, 114);
}

.login-form label {
  padding: 0px !important;
}

.f {
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button-full {
  width: 100%;
}

.links {
  margin-top: 20px;
}

.links > a {
  padding: 0px 10px;
}
</style>