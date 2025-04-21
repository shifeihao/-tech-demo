<template>
  <div class="max-w-xl mx-auto py-10 px-4">
    <h2 class="text-xl font-bold mb-4">User Settings</h2>

    <div v-if="user">
      <p class="mb-2">
        <strong>Current Username:</strong>
        <span class="text-blue-600 font-mono">{{ user.username }}</span>
      </p>

      <input
        v-model="newUsername"
        type="text"
        class="border rounded w-full p-2 mb-4"
        placeholder="Enter new username"
      />

      <div class="flex space-x-3">
        <button
          @click="updateUsername"
          class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Update Username
        </button>

        <button
          @click="deleteAccount"
          class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete Account
        </button>
      </div>
    </div>

    <div v-else>
      <p class="text-gray-500">Loading user info...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getUserInfo, updateUser, deleteUser } from "../api/auth";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";

const user = ref(null);
const newUsername = ref("");
const router = useRouter();
const userStore = useUserStore();

onMounted(async () => {
  try {
    const data = await getUserInfo();
    user.value = data;
    newUsername.value = data.username;
  } catch (err) {
    alert("Failed to load user info");
  }
});

async function updateUsername() {
  if (!newUsername.value.trim()) {
    alert("Username cannot be empty");
    return;
  }
  try {
    const result = await updateUser({ username: newUsername.value });
    alert("Username updated successfully");
    userStore.logout();
    router.push("/login");
  } catch (err) {
    alert("Failed to update username");
  }
}

async function deleteAccount() {
  if (
    confirm(
      "Are you sure you want to delete your account? This action is irreversible."
    )
  ) {
    try {
      await deleteUser();
      alert("Account deleted");
      userStore.logout();
      router.push("/login");
    } catch (err) {
      alert("Failed to delete account");
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 1px #3b82f6;
}
</style>
