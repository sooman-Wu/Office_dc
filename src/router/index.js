import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import office from '@/components/Office'
import detail from '@/components/Detail'
import form from '@/components/Form'

import Head from '@/common/Head.vue'

Vue.component('Head', Head)

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'MainPage',
    component: MainPage
  }, {
    path: '/office',
    component: office,
    name: '办事大厅'
  }, {
    path: '/detail',
    component: detail,
    name: '办事指南'
  }, {
    path: '/form',
    component: form,
    name: '表单提交'
  }]
})
