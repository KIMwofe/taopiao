import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      component: () => import('./views/index/index.vue'),
      children: [
        {
          path: 'film',
          name: 'film',
          component: () => import('./views/index/film.vue')
        },
        {
          path: 'cinerma',
          name: 'cinerma',
          component: () => import('./views/index/cinerma.vue')
        },
        {
          path: 'center',
          name: 'center',
          component: () => import('./views/index/center.vue')
        },
        {
          path: '',
          redirect: './film'
        }
      ]
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('./views/City/index.vue')
    }
  ]
})
