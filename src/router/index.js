import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import index from '@/pages/index/index'
import Tree from '@/view/tree'
import SlotTree from '@/view/slotTree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/render',
      name: 'RenderTree',
      component: Tree
    },
    {
      path: '/slot',
      name: 'SlotTree',
      component: SlotTree
    }
  ]
})
