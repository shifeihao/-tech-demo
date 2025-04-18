<template>
  <div class="notes-page">
    <h2>📒 我的笔记</h2>
  </div>
</template>

<script setup></script>

<style scoped>
.notes-page {
  max-width: 600px;
  margin: 0 auto;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  cursor: pointer;
  margin: 0.5em 0;
  color: #2c3e50;
}

.error {
  color: red;
  margin-bottom: 1em;
}
</style>
