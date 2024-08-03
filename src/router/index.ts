import { createRouter, createWebHistory } from 'vue-router'
import PassengerListView from '../views/PassengerListView.vue'
import AboutView from '../views/AboutView.vue'
import PassengerDetailView from '@/views/passenger/DetailView.vue'
import AirlineView from '@/views/passenger/AirlineView.vue'

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
      name: 'passenger-detail-view',
      component: PassengerDetailView,
      props: true
    },
    {
      path: '/passenger/:id/airline',
      name: 'airline-detail-view',
      component: AirlineView,
      props: true
    }
  ]
})

export default router
