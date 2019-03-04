import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import userList from './views/system/user/userList.vue'
import userAdd from './views/system/user/userAdd.vue'
import orgpostList from './components/orgpostList.vue'
import roleList from './components/roleList.vue'
import dictList from './components/dictList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Home,
    },
    {
      path: '/orgpostList',
      name: 'orgpostList',
      component: orgpostList
    },
    {
      path: '/userList',
      name: 'userList',
      component: userList
    },
    {
      path: '/userAdd',
      name: 'userAdd',
      component: userAdd
    },
    {
      path: '/roleList',
      name: 'roleList',
      component: roleList
    },
    {
      path: '/dictList',
      name: 'dictList',
      component: dictList
    },
  ]
})
