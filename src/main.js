import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store';
import App from './App.vue';
import $ from 'jquery';
import common from './assets/js/common.js';

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    var btmHeight=window.innerHeight-50;
    $('#left-box,#right-box').height(btmHeight);

    console.log('浏览器滚动条的宽度',common.getScrollbarWidth())

    var rightWidth=window.innerWidth-170;
    $('#right-box').width(rightWidth);
  }
}).$mount('#app')

