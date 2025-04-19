<template>
  <div>
    <h2>📒 我的笔记</h2>
    <NewNoteForm />

    <div v-if="loading">正在加载笔记...</div>
    <div v-else-if="notes.length === 0">暂无笔记</div>
    <ul>
      <li v-for="note in notes" :key="note._id">
        <strong>{{ note.title }}</strong>
        <button @click="selectNote(note._id)">查看</button>
        <button @click="goToEdit(note._id)">编辑</button>
        <button @click="handleDelete(note._id)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { getAllNotes, deleteNote } from "../api/notes";
import { useUserStore } from "../stores/user";
import NewNoteForm from "../components/NewNoteForm.vue";

const loading = ref(false);
const notes = ref([]);
const userStore = useUserStore();
const router = useRouter();

async function loadNotes() {
  try {
    const token = userStore.token;
    const data = await getAllNotes(token);
    notes.value = data;
  } catch (err) {
    console.error("获取笔记失败：", err);
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
  const confirmed = window.confirm("确定要删除这条笔记吗？");
  if (!confirmed) return;

  try {
    await deleteNote(userStore.token, noteId);
    // 重新加载笔记
    await loadNotes();
  } catch (err) {
    console.error("删除失败", err);
    alert("❌ 删除失败，请重试！");
  }
}
</script>
