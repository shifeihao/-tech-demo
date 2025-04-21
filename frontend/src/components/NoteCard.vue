<template>
  <div
    class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg hover:scale-105 transform transition duration-200"
  >
    <h3 class="text-lg font-semibold text-gray-800 text-left">
      {{ note.title }}
    </h3>
    <div class="mt-3 flex gap-2">
      <button
        @click="$emit('select', note._id)"
        class="text-sm px-3 py-1 bg-gray-500 hover:bg-gray-700 text-white rounded"
      >
        Check the content
      </button>
      <button
        @click="$emit('edit', note._id)"
        class="text-sm px-3 py-1 bg-gray-500 hover:bg-gray-700 text-white rounded"
      >
        Edit
      </button>

      <button
        @click="$emit('request-delete', note._id)"
        class="text-sm px-3 py-1 bg-red-500 hover:bg-red-700 text-white rounded"
      >
        Delete
      </button>
      <p class="text-sm text-gray-400 mt-1">
        Time: {{ formatDate(note.updatedAt) }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  note: Object,
});
const emit = defineEmits(["edit", "select", "request-delete"]);

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}
</script>
