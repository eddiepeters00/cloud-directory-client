<script setup lang="ts">
import DocumentItem from "./DocumentItem.vue";
import type { Document } from "./type";
import { mockDocuments } from "./mockupDocumentData";
import { ref } from "vue";

//TODO - Fetch Documents from AWS with correct userID
const documents = ref<Document[]>(mockDocuments); //Temporary mockdata
</script>

<template>
  <section class="container">
    <ul class="document-list">
      <li v-for="document in documents" :key="document.id">
        <DocumentItem :document="document" />
      </li>
    </ul>
  </section>
</template>

<style scoped>
.container {
  display: grid;
  grid-column: repeat(auto-fit, minmax(250px, 1fr));
}

.document-list {
  display: grid;
  margin: 2rem;
  gap: 1rem;
  list-style-type: none;
}
</style>
