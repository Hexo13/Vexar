import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/talk",
            name: "talk",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/TalkView.vue"),
        },
        {
            path: "/todos",
            name: "todos",
            component: () => import("../views/TodosView.vue"),
        },
        {
            path: "/minecraft",
            name: "minecraft",
            component: () => import("../views/MinecraftView.vue"),
        },
        {
            path: "/tools",
            name: "tools",
            component: () => import("../views/ToolsView.vue"),
            children: [
                {
                    path: "",
                    name: "toolslinks",
                    component: () => import("../views/ToolsLinksView.vue"),
                },
                {
                    path: "gemini",
                    name: "gemini",
                    component: () => import("../views/GeminiView.vue"),
                },
                {
                    path: "calculator",
                    name: "calculator",
                    component: () => import("../views/CalculatorView.vue"),
                },
            ],
        },
    ],
});

export default router;
