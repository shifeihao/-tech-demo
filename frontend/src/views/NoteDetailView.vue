<template>
  <div>
    <h2>📄 笔记详情</h2>
    <p v-if="loading">加载中...</p>
    <div v-else-if="note">
      <h3>{{ note.title }}</h3>
      <p>{{ note.content }}</p>
    </div>
    <p v-else>❌ 未找到笔记</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useUserStore } from "../stores/user";
import { getNoteById } from "../api/notes";

const route = useRoute();
const note = ref(null);
const loading = ref(true);
const userStore = useUserStore();

onMounted(async () => {
  try {
    const id = route.params.id;
    note.value = await getNoteById(userStore.token, id);
  } catch (err) {
    console.error("获取笔记详情失败", err);
  } finally {
    loading.value = false;
  }
});
</script>
