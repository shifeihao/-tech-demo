<template>
  <header class="bg-gray-900">
    <nav class="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
      <!-- Left Logo -->
      <div class="flex items-center space-x-3">
        <img src="/src/assets/vue.svg" class="h-5 w-5 brightness-200" />
        <span class="text-white text-base font-medium tracking-wide"
          >notebook</span
        >
      </div>

      <!-- Right items -->
      <div class="flex items-center space-x-6 text-sm">
        <template v-if="isLoggedIn">
          <router-link
            to="/note"
            class="text-gray-300 hover:text-white transition"
            >My Notes</router-link
          >

          <router-link
            to="/userset"
            class="text-gray-300 hover:text-white transition"
            >⚙️ Settings</router-link
          >

          <span class="text-gray-400"
            >Hi, <span class="text-white">{{ username }}</span></span
          >
          <button
            @click="logout"
            class="bg-gray-700 hover:bg-blue-600 text-black px-4 py-1.5 rounded-md transition"
          >
            Logout
          </button>
        </template>

        <template v-else>
          <router-link to="/login" class="text-gray-400 hover:text-white"
            >Login</router-link
          >
          <router-link to="/register" class="text-gray-400 hover:text-white"
            >Register</router-link
          >
        </template>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { computed } from "vue";
import { useUserStore } from "../stores/user";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();

const isLoggedIn = computed(() => !!userStore.isLoggedIn);
const username = computed(() => userStore.username || "");

const logout = () => {
  userStore.logout();
  router.push("/login");
};
</script>
