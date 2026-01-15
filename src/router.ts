import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/Home/HomePage.vue";
import LoginPage from "./views/Login/LoginPage.vue";

const router = [
  { path: "/", component: HomePage },
  { path: "/login", component: LoginPage },
  { path: "/user/tasks", component: LoginPage },
];

export default createRouter({
  history: createWebHistory(),
  routes: router,
});
