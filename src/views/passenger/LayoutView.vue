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

onMounted(() => {
  console.log('Mounted with props:', props)
  PassengerService.getPassenger(props.id)
    .then((response) => {
      psg.value = response.data
    })
    .catch((error) => {
      console.error('There was an error fetching the passenger data!', error)
    })
})
</script>

<template>
  <div class="airline" v-if="psg">
    <RouterView :psg="psg" />
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<style scoped>
.airline {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
}
.passenger-info {
  border: solid 2px;
  padding-bottom: 14px;
}
.pagination {
  display: flex;
  width: 290px;
  margin-top: 10px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
.pagination a:hover {
  color: #6c7bbe;
}
#airline-page {
  text-align: right;
}
</style>
