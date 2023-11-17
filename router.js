import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.useAttrs(VueRouter)

const routes = [
    {
        path: '/register',
        name: 'RegisterPage',
        component: () => import('./src/components/Register.vue')
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: () => import('./src/components/Login.vue')
    }
]

const router = new VueRouter({
    routes,
    mode: 'history',
})

export default router