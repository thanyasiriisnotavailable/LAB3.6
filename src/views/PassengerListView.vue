<script setup lang="ts">
import PassengerCard from '@/components/PassengerCard.vue'
import type { Passenger } from '@/types'
import { ref, onMounted, computed } from 'vue'
import PassengerService from '@/services/PassengerService';

const psgs = ref<Passenger[] | null>(null)

const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})
const page = computed(() => props.page)

onMounted(() => {
  PassengerService.getPassengers(page.value, 3)
    .then((response) => (
      psgs.value = response.data.data
    ))
    .catch((error) => {
      console.error('There was an error!', error)
    })
})
</script>

<template>
  <h1>Passenger List</h1>
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
