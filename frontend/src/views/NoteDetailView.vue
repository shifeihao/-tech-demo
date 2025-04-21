<template>
  <div class="max-w-xl mx-auto px-4 py-10">
    <!-- Card -->
    <div
      class="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
    >
      <!-- Top NaviBar -->
      <div class="flex items-center justify-between px-6 py-4 border-b">
        <button
          @click="goBack"
          class="flex items-center text-gray-500 hover:text-gray-800 transition text-sm"
        >
          <svg
            class="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Go Back
        </button>
        <span class="text-sm text-gray-400">
          {{ formatDate(note.updatedAt) }}
        </span>
      </div>

      <!-- Title and content -->
      <div class="px-6 py-8">
        <h1 class="text-2xl font-bold text-gray-800 mb-4">
          {{ note.title }}
        </h1>
        <p
          class="text-gray-700 leading-relaxed whitespace-pre-line text-justify"
        >
          {{ note.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getNoteById } from "../api/notes";
import { useUserStore } from "../stores/user";

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();

const note = ref({ title: "", content: "", createdAt: "" });

onMounted(async () => {
  try {
    const res = await getNoteById(userStore.token, route.params.id);
    note.value = res;
  } catch (err) {
    console.error("获取笔记失败", err);
    alert("❌ 加载失败，请稍后再试");
  }
});

function goBack() {
  router.back();
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}
</script>
