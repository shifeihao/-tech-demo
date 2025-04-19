<template>
  <div class="min-h-screen bg-gray-100 text-gray-800">
    <NavBar />
    <main class="px-4 py-6 max-w-screen-xl mx-auto">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
</script>
