import { createRouter, createWebHistory } from "vue-router";
import { computed } from "vue";
import HomePage from "./views/Home/HomePage.vue";
import LoginPage from "./views/Login/LoginPage.vue";
import TasksPage from "./views/Tasks/TasksPage.vue";
import CreateTaskPage from "./views/Tasks/CreateTaskPage.vue";
import { authStore } from "./stores/auth.store";

const routes = [
  { path: "/", component: HomePage },
  { path: "/login", component: LoginPage },
  { path: "/user/tasks", component: TasksPage },
  { path: "/user/tasks/create", component: CreateTaskPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.path != "/login" && to.path != "/") {
    const authStoreInstance = authStore();
    console.log("authStoreInstance:", authStoreInstance);
    const isAuthenticated = computed(() => authStoreInstance.isAuthenticated);
    console.log("isAuthenticated:", isAuthenticated.value);
    if (!isAuthenticated.value) next({ path: "/login" });
    else next();
  } else next();
});

export default router;
