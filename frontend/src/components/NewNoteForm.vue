<template>
  <form
    @submit.prevent="submitNote"
    class="bg-white rounded-lg shadow-md p-4 mb-6 space-y-4"
  >
    <input
      v-model="title"
      type="text"
      placeholder="请输入标题"
      class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <textarea
      v-model="content"
      placeholder="请输入内容..."
      class="w-full px-4 py-2 border border-gray-300 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
    ></textarea>
    <button
      type="submit"
      class="bg-blue-400 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
    >
      Add a note!
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { createNote } from "../api/notes";
import { useUserStore } from "../stores/user";

const emit = defineEmits(["note-added"]);
const userStore = useUserStore();
const title = ref("");
const content = ref("");

async function submitNote() {
  if (!title.value.trim() || !content.value.trim()) {
    alert("请输入标题和内容！");
    return;
  }

  try {
    const response = await createNote(
      userStore.token,
      title.value,
      content.value
    );

    emit("note-added", {
      _id: response._id,
      title: title.value,
      content: content.value,
      createdAt: new Date().toISOString(),
    });

    title.value = "";
    content.value = "";
  } catch (err) {
    console.error("新增失败", err);
    alert("❌ 新增失败，请重试！");
  }
}
</script>
