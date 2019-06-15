import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/base.less'
import { Tabbar, TabbarItem, Tab, Tabs, TreeSelect, Icon, Search, NavBar, Icon, Button, Field } from 'vant'
import 'vant/lib/index.css'

Vue
  .use(Tabbar)
  .use(TabbarItem)
  .use(Tab)
  .use(Tabs)
  .use(TreeSelect)
  .use(Icon)
  .use(Search)
  .use(NavBar)
  .use(Icon)
  .use(Button)
  .use(Field)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
