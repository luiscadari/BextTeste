import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/Home/HomePage.vue";
import LoginPage from "./views/Login/LoginPage.vue";
import TasksView from "./views/Tasks/TasksView.vue";
import { authStore } from "./stores/auth.store";

const routes = [
  { path: "/", component: HomePage },
  { path: "/login", component: LoginPage },
  { path: "/user/tasks", component: TasksView },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  if (to.path != "/login" && to.path != "/") {
    const isAuthenticated = authStore().isAuthenticated;
    if (!isAuthenticated) next("/login");
  } else next();
});

export default router;
