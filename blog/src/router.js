import { createWebHistory, createRouter } from "vue-router";

import HomeBox from "./components/HomeBox.vue";
import ListBox from "./components/ListBox.vue";
import DetailBox from "./components/DetailBox.vue";
import AuthorBox from "./components/AuthorBox.vue";
import CommentBox from "./components/CommentBox.vue";


const routes = [

  {
    path: "/",
    component: HomeBox,
  },

  {
    path: "/home",
    component: HomeBox,
  },

  {
    path: "/list",
    component: ListBox,
  },

  {
    path: "/detail/:id",
    component: DetailBox,
    children : [
      {
        path: "author",
        // eslint-disable-next-line no-undef
        component:  AuthorBox,
      },
      {
        path: "comment",
        component: CommentBox,
      },
    ]
 
  },
  // // name views
  // {
  //   path: "/list",
  //   component: {
  //     ListBox : ListBox,
  //     CommentBox : CommentBox,
  //   }
  // },

  // {
  //   path: "/detail",
  //   component: DetailBox,
  // },

  // 404 페이지도 가능
  {
   
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 