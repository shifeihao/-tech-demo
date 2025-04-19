<!-- src/components/NewNoteForm.vue -->
<template>
  <div class="new-note">
    <h3>📝 添加新笔记</h3>
    <form @submit.prevent="submitNote">
      <input v-model="title" type="text" placeholder="标题" required />
      <br />
      <textarea v-model="content" placeholder="内容" required></textarea>
      <br />
      <button type="submit">提交</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { createNote } from "../api/notes"; // 你刚才写的封装方法
import { useUserStore } from "../stores/user";

const title = ref("");
const content = ref("");
const message = ref("");
const userStore = useUserStore();

async function submitNote() {
  try {
    if (!userStore.token) {
      message.value = "❌ 请先登录！";
      return;
    }
    await createNote(userStore.token, title.value, content.value);

    message.value = "✅ 笔记添加成功！";
    title.value = "";
    content.value = "";
  } catch (err) {
    message.value = "❌ 添加失败，请重试";
    console.error(err);
  }
}
</script>

<style scoped>
textarea {
  width: 100%;
  height: 100px;
  margin-top: 8px;
}
input,
button {
  margin-top: 8px;
}
</style>
