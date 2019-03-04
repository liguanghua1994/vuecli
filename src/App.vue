<template>
  <div id="app">
    <!--<div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
    <router-view/>-->
    <div class="top-box global-border-box">
      <top-bar></top-bar>
    </div>
    <div id="left-box" class="left-box global-border-box">
      <left-nav></left-nav>
    </div>
    <div id="right-box" class="right-box global-border-box">
      <right-tag></right-tag>
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
  @import './assets/css/common.css';
</style>
<style>
  html,body,#app{
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


  export default{
    components:{
      'left-nav':leftNav,
      'top-bar':topBar,
      'right-tag':rightTag
    }
  }
</script>