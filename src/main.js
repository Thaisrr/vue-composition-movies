import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import './assets/main.css'
import abra from "abra.js";
import {TokenInterceptor} from "@/helpers/TokenInterceptor";
import pinia from "@/pinia";

abra.addOutInterceptor(TokenInterceptor);

createApp(App)
    .use(router) // ----- Ne pas oublier : pour lui dire d'utiliser le router
    .use(pinia)
    .mount('#app')
