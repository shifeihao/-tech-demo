<template>
  <PageWrapper>
    <h2 class="text-2xl font-semibold mb-6">Edit the note</h2>
    <div class="bg-white rounded-lg shadow-md p-6 space-y-4">
      <input
        v-model="title"
        type="text"
        placeholder="Title"
        class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        v-model="content"
        placeholder="Content..."
        class="w-full px-4 py-2 border border-gray-300 rounded h-96 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-justify"
      ></textarea>

      <div class="flex justify-end space-x-3 pt-4">
        <button
          @click="goBack"
          class="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded transition"
        >
          Canlcel
        </button>
        <button
          @click="submitEdit"
          class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  </PageWrapper>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getNoteById, updateNote } from "../api/notes";
import { useUserStore } from "../stores/user";
import PageWrapper from "../components/PageWrapper.vue";

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();

const title = ref("");
const content = ref("");

const noteId = route.params.id;

async function fetchNote() {
  try {
    const note = await getNoteById(userStore.token, noteId);
    title.value = note.title;
    content.value = note.content;
  } catch (err) {
    console.error("failed to load the note", err);
  }
}

async function submitEdit() {
  try {
    await updateNote(userStore.token, noteId, {
      title: title.value,
      content: content.value,
    });
    router.push("/note");
  } catch (err) {
    console.error("failed to update", err);
    alert("❌ failed to update the note, please try again later");
  }
}

function goBack() {
  router.back();
}

onMounted(fetchNote);
</script>
