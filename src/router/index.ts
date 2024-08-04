import { createRouter, createWebHistory } from 'vue-router'
import PassengerListView from '../views/PassengerListView.vue'
import AboutView from '../views/AboutView.vue'
import DetailView from '@/views/passenger/DetailView.vue'
import AirlineView from '@/views/passenger/AirlineView.vue'
import LayoutView from '@/views/passenger/LayoutView.vue'

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
      path: '/about',
      name: 'about-view',
      component: AboutView
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
        }
      ]
    }
  ]
})

export default router
