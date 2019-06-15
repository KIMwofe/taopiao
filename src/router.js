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
          component: () => import('./views/index/center.vue'),
          beforeEnter: (to, from, next) => {
            if (window.localStorage.getItem('userInfo')) {
              next()
            } else {
              next({
                path: '/Reg',
                query: {
                  redirect: to.fullPath }
              })
            }
          }
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
    },
    {
      path: '/reg',
      name: 'reg',
      component: () => import('./views/reg/index.vue')
    },
    {
      path: '/regNum',
      name: 'regNum',
      component: () => import('./views/reg/reg-num.vue')
      path: '/search',
      name: 'search',
      component: () => import('./views/search/index.vue')
    }
  ],
  scrollBehavior (to, from, savePosition) {
    return { x: 0, y: 0 }
  }
})
