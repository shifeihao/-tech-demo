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

const username = ref("");
const password = ref("");
const error = ref("");

const router = useRouter();

async function handleLogin() {
  error.value = "";

  if (!username.value || !password.value) {
    error.value = "用户名和密码不能为空";
    return;
  }

  try {
    const data = await login(username.value, password.value);
    localStorage.setItem("token", data.token); // 存储 token
    router.push("/"); // 登录成功跳转到首页
  } catch (err) {
    error.value = err.response?.data?.message || "登录失败";
  }
}
</script>
