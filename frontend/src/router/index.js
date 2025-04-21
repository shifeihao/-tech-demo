// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import NotesView from "../views/NotesView.vue";
import EditNoteView from "../views/EditNoteView.vue";
import NoteDetailView from "../views/NoteDetailView.vue";
import UserSettingsView from "../views/UserSettingsView.vue";

const routes = [
  { path: "/", component: LoginView },
  { path: "/login", component: LoginView },
  { path: "/register", component: RegisterView },
  { path: "/edit/:id", component: EditNoteView },
  { path: "/note/:id", component: NoteDetailView },
  { path: "/note", component: NotesView },
  { path: "/userset", component: UserSettingsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
