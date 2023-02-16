import {createRouter, createWebHistory} from "vue-router";
import Bases from "@/views/Bases.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Unauthorized from "@/views/Unauthorized.vue";
import {loggedGuard} from "@/guards/LoggedGuard";
import NotFound from "@/views/NotFound.vue";

/*** Lazy loading : conseillé pour la majorité des composants dans la doc de Vue ***/

// Webpack : créer un bundle pour un groupe :
//const Movies = () => /* webpackChunkName: "group-user" */ import("@/views/Movies.vue");
//const CreateMovie = () => /* webpackChunkName: "group-user" */ import("@/views/CreateMovie.vue");

// Vite : cf vite.config "rollup"
const Movies = () =>  import("@/views/Movies.vue");
const CreateMovie = () =>  import("@/views/CreateMovie.vue");
const UpdateMovie = () => import("@/views/UpdateMovie.vue");


const router = createRouter({
    routes : [
        {path: '/', name: 'bases', component: Bases },
        {path: '/login', name: 'login', component: Login},
        {path: '/register', name: 'register', component: Register},
        {
            path: '/movies',
            name: 'movies',
            component: Movies,
            beforeEnter: loggedGuard
        },
        {path: '/create', name: 'create', component: CreateMovie, beforeEnter: loggedGuard},
        {path: '/update/:id', name: 'update', component: UpdateMovie, beforeEnter: loggedGuard, props: true},
        {path: '/401', name: '401', component: Unauthorized},
        {path: '/accueil', redirect: '/'},
        {path: '/acceuil', redirect: '/'},
        {path: '/:pathMatch(.*)*', component: NotFound}
    ],
    history: createWebHistory()
})

export default router;
