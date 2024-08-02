<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'
import type { Passenger } from '@/types'
import PassengerService from '@/services/PassengerService'

const psg = ref<Passenger | null>(null)

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

console.log('Props received:', props)

onMounted(() => {
  console.log('Mounted with props:', props)
  PassengerService.getPassenger(props.id)
    .then((response) => {
      psg.value = response.data
      console.log('API Response:', psg.value)
    })
    .catch((error) => {
      console.error('There was an error fetching the passenger data!', error)
    })
})
</script>

<template>
  <div v-if="psg">
    <h2>{{ psg.name }}</h2>
    <p>Trips: {{ psg.trips }}</p>
    <div class="airline-info" v-for="airline in psg.airline" :key="airline._id">
      <img :src="airline.logo" :alt="airline.name" class="airline-logo" />
      <p>Airline: {{ airline.name }}</p>
      <p>Country: {{ airline.country }}</p>
      <p>Slogan: {{ airline.slogan }}</p>
      <p>Headquarters: {{ airline.head_quaters }}</p>
      <a :href="airline.website" target="_blank">{{ airline.website }}</a>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<style scoped>
.airline-logo {
  max-width: 100px;
  height: auto;
}
</style>