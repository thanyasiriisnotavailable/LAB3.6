<script setup lang="ts">
import PassengerCard from '@/components/PassengerCard.vue'
import type { Passenger } from '@/types'
import { ref } from 'vue'
const psgs = ref<Passenger[]>([
  {
    _id: '5eef7f1bdfa515ddc9feade',
    name: 'Saman Jeewantha',
    trips: 500,
    airline: [
      {
        _id: '252d3bca-d9bb-476c-9a97-562d685e235c',
        name: 'Emirates',
        country: 'Dubai',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/150px-Emirates_logo.svg.png',
        slogan: 'From Dubai to destinations around the world.',
        head_quaters: 'Garhoud, Dubai, United Arab Emirates',
        website: 'www.emirates.com/',
        established: '1985'
      }
    ],
    __v: 0
  },
  {
    _id: '5eef7f1bdfa515ddc9feade',
    name: 'Saman Jeewantha',
    trips: 500,
    airline: [
      {
        _id: '252d3bca-d9bb-476c-9a97-562d685e235c',
        name: 'Emirates',
        country: 'Dubai',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/150px-Emirates_logo.svg.png',
        slogan: 'From Dubai to destinations around the world.',
        head_quaters: 'Garhoud, Dubai, United Arab Emirates',
        website: 'www.emirates.com/',
        established: '1985'
      }
    ],
    __v: 0
  },
  {
    _id: '5eef7f1bdfa515ddc9feade',
    name: 'Saman Jeewantha',
    trips: 500,
    airline: [
      {
        _id: '252d3bca-d9bb-476c-9a97-562d685e235c',
        name: 'Emirates',
        country: 'Dubai',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/150px-Emirates_logo.svg.png',
        slogan: 'From Dubai to destinations around the world.',
        head_quaters: 'Garhoud, Dubai, United Arab Emirates',
        website: 'www.emirates.com/',
        established: '1985'
      }
    ],
    __v: 0
  }
])
</script>

<template>
  <div class="passengers">
    <PassengerCard v-for="passenger in psgs" :key="passenger._id" :psg="passenger"/>
  </div>
</template>

<style scoped>
.passengers {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
