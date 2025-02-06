<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import DocumentsContainer from "./components/documents/DocumentsContainer.vue";
import { mockDocuments } from "./components/documents/mockupDocumentData";
import type { Document } from "./components/documents/type";
import { ref } from "vue";

const documents = ref<Document[]>(mockDocuments);
</script>

<template>
  <AppHeader app-name="CloudStorage" />
  <main>
    <DocumentsContainer :documents="documents" />
  </main>
</template>
