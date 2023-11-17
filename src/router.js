import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/register',
        name: 'RegisterPage',
        component: () => import('./components/registerPage.vue')
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: () => import('./components/loginPage.vue')
    }
]

const router = new createRouter({
    routes,
    history: createWebHistory(),
})

export default router