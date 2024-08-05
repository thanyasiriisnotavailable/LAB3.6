<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'
import type { Passenger } from '@/types'
import PassengerService from '@/services/PassengerService'
import { useRouter } from 'vue-router'

const psg = ref<Passenger | null>(null)

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const router = useRouter()

onMounted(() => {
  console.log('Mounted with props:', props)
  PassengerService.getPassenger(props.id)
    .then((response) => {
      if (response.data) {
        psg.value = response.data
      } else {
        router.push({
          name: '404-resource-view',
          params: { resource: 'passenger' }
        })
      }
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        router.push({
          name: '404-page-view',
          params: { resource: 'passenger' }
        })
      }
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
