<template>
  <div id="app">
    <!--<div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
    <router-view/>-->
    <div class="top-box global-border-box"></div>
    <div id="btm-box" class="btm-box global-border-box">
      <div class="left-box global-border-box">
        <left-nav></left-nav>
      </div>
      <div id="right-box" class="right-box global-border-box">
        <user-list></user-list>
      </div>
    </div>
  </div>
</template>

<style>
  @import './css/common.css';
</style>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
    height: 70px;
    border: 1px solid #000;
  }
  .btm-box{
    border: 1px solid #000;
  }
  .left-box{
    width: 170px;
    height: 100%;
    border: 1px solid #000;
    float: left;
    background: #545c64;
  }
  .right-box{
    height: 100%;
    border: 1px solid #000;
    float: left;
  }

</style>

<script>
  import leftNav from './components/leftNav';
  import userList from './components/userList';

  export default{
    components:{
      'left-nav':leftNav,
      'user-list':userList
    }
  }
</script>