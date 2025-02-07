<script setup lang="ts">
import AppHeader from "@/components/header/AppHeader.vue";
import DocumentsContainer from "./components/documents/DocumentsContainer.vue";
</script>

<template>
  <AppHeader app-name="CloudStorage" :is-logged-in="true" />
  <main>
    <DocumentsContainer />
  </main>
</template>
