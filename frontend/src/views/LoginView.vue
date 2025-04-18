<template>
  <div>
    <h2>登录</h2>
    <input v-model="username" />
    <input type="password" v-model="password" />
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { login } from "../api/auth.js";
import { useUserStore } from "../stores/user"; // 路径根据你项目结构来调整

const username = ref("");
const password = ref("");
const error = ref("");
const router = useRouter();
const userStore = useUserStore(); // 创建 pinia 用户状态实例

async function handleLogin() {
  error.value = "";
  if (!username.value || !password.value) {
    error.value = "用户名和密码不能为空";
    return;
  }

  try {
    const data = await login(username.value, password.value);
    userStore.login(data.token, username.value); // ✅ 设置 pinia 登录状态
    router.push("/"); // 跳转到首页
  } catch (err) {
    error.value = err.response?.data?.message || "登录失败";
  }
}
</script>
