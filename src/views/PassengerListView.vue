<script setup lang="ts">
import PassengerCard from '@/components/PassengerCard.vue'
import type { Passenger } from '@/types'
import { ref, onMounted, computed, watchEffect } from 'vue'
import PassengerService from '@/services/PassengerService'
import { useRoute } from 'vue-router'

const route = useRoute()

const size = computed(() => parseInt(route.query.perPage as string) || 3)
const page = computed(() => parseInt(route.query.page as string) || 0)

const psgs = ref<Passenger[] | null>(null)

const totalPassengers = ref(0)
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalPassengers.value / size.value)
  console.log('Total Pages:', totalPages)
  console.log('Current Page:', page.value)
  return page.value < totalPages
})

onMounted(() => {
  watchEffect(() => {
    psgs.value = null
    PassengerService.getPassengers(page.value, size.value)
      .then((response) => {
        psgs.value = response.data.data
        totalPassengers.value = response.data.totalPassengers
      })
      .catch((error) => {
        console.error('There was an error!', error)
      })
  })
})
</script>

<template>
  <h1>Passenger List</h1>
  <div class="passengers" v-if="psgs">
    <PassengerCard v-for="passenger in psgs" :key="passenger._id" :psg="passenger" />
    <div class="pagination">
      <RouterLink
        id="page-prev"
        :to="{ name: 'passenger-list-view', query: { page: page - 1, size: size } }"
        rel="prev"
        v-if="page != 0"
        >&#60; Prev Page</RouterLink
      >
      <RouterLink
        id="page-next"
        :to="{ name: 'passenger-list-view', query: { page: page + 1, size: size } }"
        rel="next"
        v-if="hasNextPage"
        >Next Page &#62;</RouterLink
      >
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<style scoped>
.passengers {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
</style>
