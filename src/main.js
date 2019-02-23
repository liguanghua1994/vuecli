import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store';
import './js/jquery-1.12.4.min.js';
import App from './App.vue';



Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

$(function () {

  var btmHeight=$(window).height()-72;
  $('#btm-box').height(btmHeight);

  var rightWidth=$(window).width()-174;
  $('#right-box').width(rightWidth);

})
