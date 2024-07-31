<script setup lang="ts">
import PassengerCard from '@/components/PassengerCard.vue'
import type { Passenger } from '@/types'
import axios from 'axios'
import { error } from 'console'
import { ref, onMounted } from 'vue'

const psgs = ref<Passenger[] | null>(null)

onMounted(() => {
  axios
    .get('https://api.instantwebtools.net/v1/passenger')
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error('There was an error!', error)
    })
})
</script>

<template>
  <h1>Passenger List</h1>
  <div class="passengers">
    <PassengerCard v-for="passenger in psgs" :key="passenger._id" :psg="passenger" />
  </div>
</template>

<style scoped>
.passengers {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
