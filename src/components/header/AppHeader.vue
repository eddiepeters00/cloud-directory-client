<script setup lang="ts">
defineProps<{
  appName: string;
}>();
</script>

<template>
  <header class="header">
    <h1>{{ appName }}</h1>
  </header>
</template>

<style scoped>
h1 {
  padding: 3rem;
  font-weight: 500;
  font-size: 2.6rem;
}

.header {
  background-color: lightseagreen;
}
</style>
