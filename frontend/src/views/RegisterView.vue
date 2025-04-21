<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center px-4">
    <div class="bg-white shadow-md rounded-lg p-8 w-full max-w-sm">
      <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">
        📝 Register an account!
      </h2>

      <form @submit.prevent="handleRegister" class="space-y-4">
        <input
          v-model="username"
          placeholder="Username"
          class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          v-model="password"
          type="password"
          placeholder="password"
          class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded transition"
        >
          Create an account!
        </button>

        <p v-if="error" class="text-red-500 text-sm text-center">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { register } from "../api/auth.js";

const username = ref("");
const password = ref("");
const error = ref("");
const router = useRouter();

async function handleRegister() {
  error.value = "";
  if (!username.value || !password.value) {
    error.value = "empty username or password";
    return;
  }

  try {
    await register(username.value, password.value);
    alert("Registration successful!");
    router.push("/login"); // Redirect to login page after successful registration
  } catch (err) {
    if (err.response?.status === 409) {
      error.value = err.response.data?.error || "Username already exists";
    } else {
      error.value = err.response?.data?.error || "Failed to register";
    }
  }
}
</script>
