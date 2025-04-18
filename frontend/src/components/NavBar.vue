<template>
  <nav class="navbar">
    <h1>📝 记事本 Demo</h1>
    <div class="nav-links">
      <RouterLink to="/">首页</RouterLink>
      <template v-if="userStore.isLoggedIn">
        <span class="welcome">欢迎你，{{ userStore.username }}</span>
        <button @click="logout">登出</button>
      </template>
      <template v-else>
        <RouterLink to="/login">登录</RouterLink>
        <RouterLink to="/register">注册</RouterLink>
      </template>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user.js"; // 引入 Pinia store

const userStore = useUserStore();
const router = useRouter();

// 登出函数
function logout() {
  userStore.logout();
  router.push("/login");
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: #f3f3f3;
}
.links {
  display: flex;
  gap: 16px; /* 每个子元素之间间距 */
}
</style>
