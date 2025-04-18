<template>
    <div>
      <h2>注册账号</h2>
      <form @submit.prevent="handleRegister">
        <input v-model="username" placeholder="用户名" />
        <input v-model="password" type="password" placeholder="密码" />
        <button type="submit">注册</button>
      </form>
      <p v-if="error" style="color:red">{{ error }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { register } from '../api/auth.js'
  
  const username = ref('')
  const password = ref('')
  const error = ref('')
  const router = useRouter()
  
  async function handleRegister() {
    error.value = ''
    if (!username.value || !password.value) {
      error.value = '用户名和密码不能为空'
      return
    }
  
    try {
      await register(username.value, password.value)
      router.push('/login') // 注册成功后跳转到登录页
    } catch (err) {
      error.value = err.response?.data?.message || '注册失败'
    }
  }
  </script>
  