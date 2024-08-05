<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
const props = withDefaults(
  defineProps<{
    resource: string
  }>(),
  {
    resource: 'resource'
  }
)
</script>

<template>
  <div>
    <h1>Resource Not Found</h1>
    <p>The {{ resource }} you're looking for does not exist.</p>
    <router-link :to="{ name: 'passenger-list-view' }">Back to the home page</router-link>
  </div>
</template>

<style scoped>
h1 {
  color: red;
}
</style>
