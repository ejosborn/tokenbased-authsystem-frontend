import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import App from './App.vue'

import registerPage from "./components/registerPage"
import loginPage from "./components/loginPage"

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})



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
app.use(vuetify)
app.mount('#app')
