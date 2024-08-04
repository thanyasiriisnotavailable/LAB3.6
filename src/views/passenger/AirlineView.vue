<script setup lang="ts">
import { toRefs, defineProps } from 'vue'
import type { Passenger } from '@/types'

const props = defineProps<{
  psg: Passenger
}>()
const { psg } = toRefs(props)

function formatUrl(url: string): string {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return `http://${url}`
  }
  return url
}
</script>

<template>
  <div class="airline" v-if="psg">
    <div class="info">
      <div class="airline-info" v-for="airline in psg.airline" :key="airline._id">
        <h2>{{ airline.name }}</h2>
        <img :src="airline.logo" :alt="airline.name" class="airline-logo" />
        <p><b>Country:</b> {{ airline.country }}</p>
        <p><b>Slogan:</b> {{ airline.slogan }}</p>
        <p><b>Headquarters:</b> {{ airline.head_quaters }}</p>
        <a :href="formatUrl(airline.website)" target="_blank">{{ airline.website }}</a>
      </div>
      <div class="pagination">
      <router-link
        id="detail-page"
        :to="{ name: 'detail-view', params: { id: psg._id } }"
        rel="detail"
        >&#60; Details</router-link
      >
    </div>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 0;
  background-color: #6c7bbe;
  color: black;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 30px;
}
.airline-logo {
  max-width: 100px;
  height: auto;
}
.airline {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
}
.airline-info {
  border: solid 2px #6c7bbe;
  padding-bottom: 30px;
}
.airline-info a {
  color: #0c38fa;
}
.airline-info a:hover {
  font-weight: bold;
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
#detail-page {
  text-align: left;
}
</style>
