<template>
  <div>
    <NavBar /><!-- 导航栏组件 -->
    <router-view />
    <!-- 显示对应的页面组件 -->
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 2rem;
}
</style>
