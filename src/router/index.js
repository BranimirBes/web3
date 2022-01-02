import { createRouter, createWebHistory } from "vue-router";
import Movies from "@/views/Movies";
import LikedMovies from "@/views/LikedMovies";
import TwoWayBinding from "@/views/TwoWayBinding";
import NotFound from "@/views/NotFound";

const routes = [
  {
    path: "/",
    name: "Movies",
    component: Movies,
  },
  {
    path: "/likedMovies",
    name: "LikedMovies",
    component: LikedMovies,
  },
  {
    path: "/twowaybinding",
    name: "TwoWayBidning",
    component: TwoWayBinding,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
