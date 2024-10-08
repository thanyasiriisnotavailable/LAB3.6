import { createRouter, createWebHistory } from 'vue-router'
import PassengerListView from '../views/PassengerListView.vue'
import AboutView from '../views/AboutView.vue'
import DetailView from '@/views/passenger/DetailView.vue'
import AirlineView from '@/views/passenger/AirlineView.vue'
import LayoutView from '@/views/passenger/LayoutView.vue'
import NotFoundPageView from '@/views/NotFoundPageView.vue'
import NotFoundResourceView from '@/views/NotFoundResourceView.vue'
import EditView from '@/views/passenger/EditView.vue'
import nProgress from 'nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'passenger-list-view',
      component: PassengerListView,
      props: (route) => ({ page: parseInt(route.query.page?.toString() || '0') })
    },
    {
      path: '/passenger/:id',
      name: 'layout-view',
      component: LayoutView,
      props: true,
      children: [
        {
          path: '',
          name: 'detail-view',
          component: DetailView,
          props: true
        },
        {
          path: 'airline',
          name: 'airline-view',
          component: AirlineView,
          props: true
        },
        {
          path: 'edit',
          name: 'edit-view',
          component: EditView,
          props: true
        }
      ]
    },
    {
      path: '/about',
      name: 'about-view',
      component: AboutView
    },
    {
      path: '/404/:resource',
      name: '404-page-view',
      component: NotFoundPageView
    },
    {
      path: '/404/resource/:resource',
      name: '404-resource-view',
      component: NotFoundResourceView,
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundPageView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0}
    }
  }
})
router.beforeEach(() => {
  nProgress.start()
})
router.afterEach(() => {
  nProgress.done()
})

export default router
