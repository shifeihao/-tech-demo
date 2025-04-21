<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center px-4">
    <div class="bg-white shadow-md rounded-lg p-8 w-full max-w-sm">
      <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">
        🔐 Login
      </h2>

      <div class="space-y-4">
        <input
          v-model="username"
          type="text"
          placeholder="Username"
          class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          @click="handleLogin"
          class="w-full bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 rounded transition"
        >
          Let's go! 🚀
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { login } from "../api/auth.js";
import { useUserStore } from "../stores/user";

const username = ref("");
const password = ref("");
const error = ref("");
const router = useRouter();
const userStore = useUserStore(); //  pinia store

async function handleLogin() {
  error.value = "";
  if (!username.value || !password.value) {
    error.value = "Empty username or password";
    return;
  }

  try {
    const data = await login(username.value, password.value);
    userStore.login(data.token, username.value); // put token into pinia store
  } catch (err) {
    error.value = err.response?.data?.message || "failed to login";
  }
  alert("Login successful!");
  router.push("/note"); // go to note page
}
</script>
