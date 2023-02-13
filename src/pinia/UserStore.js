import {defineStore} from "pinia";
import {ref} from "vue";
import {getEmail, getToken} from "@/helpers/Authentication";

export const useUser = defineStore('user', () => {
    /*
    'user' : identifiant du store, doit être unique
    2éme arg : au choix :
        - un objet, façon option API avec
            - state : une fonction qui retourne les données initiales ( à la façon de "data" dans un composant ),
            - getters: des fonctions qui retourne ce qu'on veut
            - actions : les fonctions de modification du state, sync ou async
       - une fonction, façon state()
            - ref : les états initiaux du store,
            - computed : pour les getters
            - des fonctions : les actions.
            => Point négatif, il faut bien penser à tout retourner pour pouvoir utiliser les éléments ailleurs
     */
    const isLogged = ref(false);
    const email = ref('');

    const login = (_mail) => {
        isLogged.value = true;
        email.value = _mail
    }

    const logout = () => {
        isLogged.value = false;
        email.value = '';
    }

    const init = () => {
        console.log(getToken(), getEmail())
        if(getToken() && getEmail()) {
            login(getEmail());
        }
    }

    return { isLogged, email, logout, login, init}
})
