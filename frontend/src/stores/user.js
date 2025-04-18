import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const token = ref(localStorage.getItem("token") || "");
  const username = ref(localStorage.getItem("username") || "");
  const isLoggedIn = ref(!!token.value);

  function login(newToken, newUsername) {
    token.value = newToken;
    username.value = newUsername;
    isLoggedIn.value = true;
    localStorage.setItem("token", newToken);
    localStorage.setItem("username", newUsername);
  }

  function logout() {
    token.value = "";
    username.value = "";
    isLoggedIn.value = false;
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  }

  return { token, username, isLoggedIn, login, logout };
});
