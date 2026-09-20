import { createRouter, createWebHistory } from "vue-router";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Login",
            component: () => import("@/view/Login.vue"),
        },
        {
            path: "/Home",
            name: "Home",
            component: () => import("@/view/Home.vue"),
            children: [
                {
                    path: "/Dashboard",
                    name: "Dashboard",
                    component: () => import("@/page/Dashboard.vue"),
                },
                {
                    path: "/tasks",
                    name: "tasks",
                    component: () => import("@/page/MyTask.vue"),
                },
                {
                    path: "/settings",
                    name: "settings",
                    component: () => import("@/page/Setting.vue"),
                }
            ]
        }
    ]
})

export default router;