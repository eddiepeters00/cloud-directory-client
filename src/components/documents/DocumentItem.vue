<script setup lang="ts">
import type { Document, FileType } from './type';
defineProps<{
  document: Document;
}>();

//Helper function to check if the document is a File
const isFile = (document: Document): document is FileType => {
    return (document as FileType).mimeType !== undefined;
};
</script>

<template>
  <div class="document">
    <div class="icon-wrapper">
      <img v-if="isFile(document)" class="icon" src="../icons/file.svg" alt="File" />
      <img v-else class="icon" src="../icons/folder.svg" alt="Folder" />
    </div>

    <div class="document-details">
      <span class="document-name">{{ document.name }}</span>
      <span class="document-meta">Created by {{ document.createdByName }}</span>
    </div>
  </div>
</template>

<style scoped>
.document {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  cursor: pointer;
}

.document:hover {
  transform: translateY(-0.125rem);
  box-shadow: 0 0.375rem 0.75rem rgba(0, 0, 0, 0.1);
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: #f4f4f4;
  border-radius: 0.5rem;
}

.icon {
  width: 1.5rem;
  height: 1.5rem;
}

.document-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.document-name {
  font-weight: 600;
  font-size: 1rem;
  color: #333;
}

.document-meta {
  font-size: 0.875rem;
  color: #777;
}
</style>
