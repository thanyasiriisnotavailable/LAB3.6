<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="layout">
    <header>
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
</style>
