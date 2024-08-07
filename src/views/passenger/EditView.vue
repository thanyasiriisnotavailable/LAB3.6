<script setup lang="ts">
import { toRefs } from 'vue'
import type { Passenger } from '@/types'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'
const store = useMessageStore()
const { message } = storeToRefs(store)

const props = defineProps<{
  psg: Passenger
  id: String
}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { psg } = toRefs(props)
const router = useRouter()
const edit = () => {
  store.updateMessage('Please wait... the details of ' + props.psg.name + ' is in progress!')
  setTimeout(() => {
    store.resetMessage()
    router.push({ name: 'passenger-list-view', params: { id: props.psg._id } })
  }, 5000)
}
</script>
<template>
  <h2>You can edit passenger data details here</h2>
  <button @click="edit">Update details</button>
</template>

<style>
button {
  background-color: #007bff; /* Primary blue color */
  color: white; /* White text */
  border: none; /* Remove default border */
  border-radius: 5px; /* Rounded corners */
  padding: 0.5em 1em; /* Spacing inside the button */
  font-size: 1em; /* Font size */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s ease, transform 0.3s ease; /* Smooth transition */
}

button:hover {
  background-color: #0056b3; /* Darker blue on hover */
  transform: scale(1.05); /* Slightly enlarge on hover */
}

button:active {
  background-color: #004494; /* Even darker blue on click */
  transform: scale(0.95); /* Slightly shrink on click */
}

button:focus {
  outline: none; /* Remove default focus outline */
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5); /* Custom focus outline */
}
</style>