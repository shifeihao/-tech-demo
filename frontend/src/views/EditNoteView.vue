<template>
  <div class="edit-note">
    <h2>🛠️ 编辑笔记</h2>

    <div v-if="loading">加载中...</div>
    <div v-else>
      <form @submit.prevent="updateNoteHandler">
        <input v-model="title" type="text" placeholder="标题" required />
        <br />
        <textarea v-model="content" placeholder="内容" required></textarea>
        <br />
        <button type="submit">保存修改</button>
      </form>

      <p v-if="message">{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getAllNotes, updateNote } from "../api/notes";
import { useUserStore } from "../stores/user";

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();

const title = ref("");
const content = ref("");
const loading = ref(true);
const message = ref("");

const noteId = route.params.id;

onMounted(async () => {
  try {
    const token = userStore.token;
    const notes = await getAllNotes(token); // 简单做法，从所有笔记中找目标
    const note = notes.find((n) => n._id === noteId);

    if (!note) {
      message.value = "❌ 找不到这篇笔记";
      return;
    }

    title.value = note.title;
    content.value = note.content;
  } catch (err) {
    console.error("加载笔记失败", err);
    message.value = "❌ 加载失败，请重试";
  } finally {
    loading.value = false;
  }
});

async function updateNoteHandler() {
  try {
    const token = userStore.token;
    await updateNote(token, noteId, {
      title: title.value,
      content: content.value,
    });
    message.value = "✅ 修改成功！正在跳转...";
    setTimeout(() => {
      router.push("/");
    }, 1000);
  } catch (err) {
    console.error("更新失败", err);
    message.value = "❌ 修改失败，请重试";
  }
}
</script>
