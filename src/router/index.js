import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
const routes = [
    { path: '/', redirect: '/login'}, //The local address will be redirected directly to the Login page once the code runs.
    { path: "/login", name: "Login", component: LoginPage}, //The following creates a route to each pages in the portfolio.
            {
                path: "/portfolio/profile",
                name: "User Profile",
                component: () => import("../views/ProfilePage.vue")
            },
            {
                path: "/portfolio/showcase",
                name: "Portfolio Showcase",
                component: () => import("../views/PortfolioShowcasePage.vue")
            },
            {
                path: "/portfolio/contact",
                name: "User Contact",
                component: () => import("../views/ContactPage.vue")
            },
            {
                path: "/portfolio/creative",
                name: "Creative Page",
                component: () => import("../views/CreativePage.vue")
            },
        ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;