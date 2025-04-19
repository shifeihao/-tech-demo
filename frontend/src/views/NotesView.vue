<template>
  <PageWrapper>
    <h2 class="text-2xl font-semibold text- mb-6">My Notes</h2>
    <NewNoteForm @note-added="addNote" />
    <div v-if="loading" class="text-gray-400 mt-4">Loading...</div>
    <div v-else-if="notes.length === 0" class="text-gray-400 mt-4">
      There are no notes yet. Please add one!
    </div>
    <div class="mt-6 space-y-4">
      <transition-group name="note" tag="div" class="grid gap-4 mt-6">
        <NoteCard
          v-for="note in notes"
          :key="note._id"
          :note="note"
          @select="selectNote"
          @edit="goToEdit"
          @request-delete="handleDelete"
        />
      </transition-group>
    </div>
  </PageWrapper>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { getAllNotes, deleteNote } from "../api/notes";
import { useUserStore } from "../stores/user";
import NewNoteForm from "../components/NewNoteForm.vue";
import NoteCard from "../components/NoteCard.vue";
import PageWrapper from "../components/PageWrapper.vue"; // ✅ 路径根据你项目结构调整

const loading = ref(false);
const notes = ref([]);
const userStore = useUserStore();
const router = useRouter();

function addNote(note) {
  notes.value.unshift(note);
}

async function loadNotes() {
  try {
    loading.value = true;
    const token = userStore.token;
    const data = await getAllNotes(token);
    notes.value = data;
  } catch (err) {
    console.error("fail to get notes", err);
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  loadNotes();
});

function goToEdit(noteId) {
  router.push(`/edit/${noteId}`);
}

function selectNote(noteId) {
  router.push(`/note/${noteId}`);
}

async function handleDelete(noteId) {
  const ok = window.confirm("确定要删除这条笔记吗？");
  if (!ok) return;
  try {
    await deleteNote(userStore.token, noteId);
    notes.value = notes.value.filter((note) => note._id !== noteId);
  } catch (err) {
    console.error("删除失败", err);
    alert("❌ 删除失败，请重试！");
  }
}

// Format date to "YYYY-MM-DD HH:mm"
const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};
</script>
