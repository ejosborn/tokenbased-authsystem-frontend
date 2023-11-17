import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import App from './App.vue'

import registerPage from "./components/registerPage"
import loginPage from "./components/loginPage"



const app = createApp(App)


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/register",
            component: registerPage,
        },
        {
            path: "/login",
            component: loginPage
        },
    ]
    })

app.use(router)
app.mount('#app')
