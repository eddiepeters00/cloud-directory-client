<script setup lang="ts">
import DocumentItem from "./DocumentItem.vue";
import type { Document } from "./type";
import { mockDocuments } from "./mockupDocumentData";
import { onMounted, ref } from "vue";
import axios from "axios";

const documents = ref([] as Document[]);
const fetchingDocuments = ref(false);

async function loadMoreDocuments() {
  try {
    fetchingDocuments.value = true;
    const documentResponse = await axios.get<Document[]>("/url", {responseType: "json"});
    console.log("Response", documentResponse)

    if(documentResponse.data && Array.isArray(documentResponse.data)) {
      documents.value.push(...(documentResponse.data || []));

    }
  } catch (error) {
    console.error(error)
  }
  finally{
    fetchingDocuments.value = false;
  }
}

async function fetchUserDocuments() {
  try {
    const documentResponse = await axios.get<Document[]>("/url", {responseType: "json"});
  documents.value = documentResponse.data;
  } catch (error) {
    console.error(error)
  }

  console.log(documents.value);
}

function openDocument(){
  //If file
  //Open file

  //If folder
  //Navigate to folder
}

onMounted(async () => {
  // await fetchUserDocuments()
  documents.value = mockDocuments;
})
</script>

<template>
  <section class="container">
    <div>
      <ul class="document-list">
        <li v-for="document in documents" :key="document.id" @click="openDocument">
          <DocumentItem :document="document" />
        </li>
      </ul>
    </div>
    <button role="button" class="load-btn" @click="loadMoreDocuments">
      {{ fetchingDocuments ? "..." : "Load more" }}
    </button>
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

/* Button */
.load-btn {
  display: flex;
  justify-self: center;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
}

.load-btn:hover,
.load-btn:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: rgba(0, 0, 0, 0.65);
}

.load-btn:hover {
  transform: translateY(-1px);
}

.load-btn:active {
  background-color: #f0f0f1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
}
</style>
