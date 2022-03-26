import { createWebHistory, createRouter } from "vue-router";
import ListBox from "./components/ListBox.vue";
import HomeBox from "./components/HomeBox.vue";

const routes = [
  {
    path: "/list",
    component: ListBox,
  },

  {
    path: "/",
    component: HomeBox,
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 