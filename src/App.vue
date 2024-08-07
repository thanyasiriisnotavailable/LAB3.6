<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'
const store = useMessageStore()
const { message } = storeToRefs(store)

</script>

<template>
  <div id="layout">
    <header>
      <div id="flashMessage" v-if="message">
    <h4>{{ message }}</h4>
  </div>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'passenger-list-view' }">Passenger</RouterLink> |
          <RouterLink :to="{ name: 'about-view' }">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #504265;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #504265;
}

nav a.router-link-exact-active {
  color: #6c7bbe;
}

h2 {
  font-size: 20px;
  margin-top: 0;
}

/* flash message */
@keyframes yellofade {
  0% {
    background-color: rgb(69, 117, 180);
    opacity: 1;
  }
  50% {
    background-color: rgb(69, 117, 180);
    opacity: 0.5;
  }
  100% {
    background-color: transparent;
    opacity: 0;
  }
}

#flashMessage {
  color: white;
  font-size: 1.2rem;
  animation: yellofade 5s ease-in-out;
  padding: 0.025em;
  border-radius: 5px;
  transition: all 0.3s ease;
}
</style>
