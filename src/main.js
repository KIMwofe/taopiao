import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/base.less'

import { Tabbar, TabbarItem, Tab, Tabs, NavBar, TreeSelect } from 'vant'
import 'vant/lib/index.css'

Vue
  .use(Tabbar)
  .use(TabbarItem)
  .use(Tab)
  .use(Tabs)
  .use(NavBar)
  .use(TreeSelect)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
