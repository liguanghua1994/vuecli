<template>
  <div id="app">

    <div v-if="isLogin" id="main">
      <div class="top-box global-border-box">
        <top-bar></top-bar>
      </div>
      <div id="left-box" :style="leftBoxStyle" class="left-box global-border-box">
        <left-nav></left-nav>
      </div>
      <div id="right-box" :style="rightBoxStyle" class="right-box global-border-box">
        <right-tag></right-tag>
        <router-view></router-view>
      </div>
    </div>
    <div v-else id="login">
      <header class="header-wrp">
        <section class="header-box">
          <img src="@/assets/img/v-logo.png" alt="图片加载失败" class="header-logo">
        </section>
      </header>

      <section class="content-wrp">
        <section class="content-box">
          <section class="login-box global-border-box">
            <h1 class="login-title">账号登录</h1>
            <section class="username-wrp">
              <section class="username-box global-border-box">
                <label for="" class="login-label icon-user"></label>
                <input type="text" class="login-input global-border-box" placeholder="账号">
              </section>
            </section>
            <section class="username-wrp">
              <section class="username-box global-border-box">
                <label for="" class="login-label icon-lock"></label>
                <input type="password" class="login-input global-border-box" placeholder="密码">
              </section>
              <aside class="username-msg">用户名不正确</aside>
            </section>
            <section class="btn-wrp">
              <a @click="login" class="login-btn">登录</a>
            </section>
          </section>
        </section>
      </section>

      <footer class="footer-wrp">
        <p class="footer-link-box">
          <a href="" class="footer-link">关于智乘</a>
          <span class="footer-link-separator">|</span>
          <a href="" class="footer-link">智乘服务</a>
          <span class="footer-link-separator">|</span>
          <a href="" class="footer-link">智乘优势</a>
          <span class="footer-link-separator">|</span>
          <a href="" class="footer-link">联系我们</a>
          <span class="footer-link-separator">|</span>
          <a href="" class="footer-link">友情链接</a>
          <span class="footer-link-separator">|</span>
          <a href="" class="footer-link">在线服务</a>
        </p>
        <p class="footer-copyright-box">
          Copyright © 2018 广州智乘企业征信有限公司 版权所有
        </p>
      </footer>
    </div>

  </div>
</template>

<style>
  @import './assets/css/common.css';
  @import './assets/css/login.css';
</style>
<style>
  html,body,#app,#main{
    width: 100%;
    height: 100%;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
  .top-box{
    height: 50px;
    background: #545c64;
  }
  .left-box{
    width: 170px;
    background: #545c64;
    overflow: hidden;
    position: fixed;
    left: 0;
    top: 50px;
  }
  .right-box{
    overflow-y: auto;
    background: #f6f6f6;
    position: fixed;
    right: 0;
    top: 50px;
  }
  .el-popover{
    min-width: 50px;
  }

</style>

<script>
  import leftNav from './components/leftNav';
  import topBar from './components/topBar.vue';
  import rightTag from './components/rightTag.vue';
  import store from './store';


  export default{
    store,
    components:{
      'left-nav':leftNav,
      'top-bar':topBar,
      'right-tag':rightTag
    },
    data(){
      return {

        leftBoxStyle:{
          height:window.innerHeight-50+'px'
        },
        rightBoxStyle:{
          width:window.innerWidth-170+'px',
          height:window.innerHeight-50+'px'
        }
      }
    },
    computed:{
      isLogin(){
        return this.$store.state.isLogin;
      }
    },
    methods:{
      login(){
        this.$store.commit('login',true);//模拟登陆成功
      }
    }
  }
</script>