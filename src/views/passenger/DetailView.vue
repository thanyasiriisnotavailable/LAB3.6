<script setup lang="ts">
import { toRefs, defineProps } from 'vue'
import type { Passenger } from '@/types'

const props = defineProps<{
  psg: Passenger
}>()
const { psg } = toRefs(props)
</script>

<template>
  <div class="passenger" v-if="psg">
    <div>
      <div class="edit-link">
        <router-link :to="{ name: 'edit-view', params: { id: psg._id } }">Edit</router-link>
      </div>
      <div class="passenger-info">
        <h2>{{ psg.name }}</h2>
        <p><b>Id:</b> {{ psg._id }}</p>
        <p><b>Trips:</b> {{ psg.trips }}</p>
        <div class="airline-info" v-for="airline in psg.airline" :key="airline._id">
          <p>
            <b>Airline: </b>
            <router-link
              id="airline-link"
              :to="{ name: 'airline-view', params: { id: psg._id } }"
              >{{ airline.name }}</router-link
            >
          </p>
        </div>
      </div>
      <div class="pagination">
        <router-link
          id="airline-page"
          :to="{ name: 'airline-view', params: { id: psg._id } }"
          rel="airline"
          >See Airline... &#62;</router-link
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
  background-color: #2c3e50;
  color: white;
  padding: 5px 0px;
}
p:nth-child(2) {
  margin-top: 30px;
}
#airline-link {
  text-decoration: none;
  color: #0c38fa;
}
#airline-link:hover {
  text-decoration: underline;
}
.passenger {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
}
.passenger-info {
  border: solid 2px;
  padding: 14px 0 14;
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
.edit-link {
  text-align: left;
  margin-bottom: 10px;
  color: blue;
  text-decoration: none;
}

/* router-link(edit)  */
a {
  font-weight: bold;
  color: #6c7bbe;
}
</style>
