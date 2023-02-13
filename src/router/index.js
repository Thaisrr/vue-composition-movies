import {createRouter, createWebHistory} from "vue-router";
import Movies from "@/views/Movies.vue";
import Bases from "@/views/Bases.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Unauthorized from "@/views/Unauthorized.vue";
import {loggedGuard} from "@/guards/LoggedGuard";


const router = createRouter({
    routes : [
        {path: '/', name: 'bases', component: Bases },
        {
            path: '/movies',
            name: 'movies',
            component: Movies,
            beforeEnter: loggedGuard
        },
        {path: '/login', name: 'login', component: Login},
        {path: '/register', name: 'register', component: Register},
        {path: '/401', name: '401', component: Unauthorized}
    ],
    history: createWebHistory()
})

export default router;
