import {isLogged} from "@/helpers/Authentication";

export const loggedGuard = () => {
    // Les guards peuvent retourner :
        // false pour juste bloquer l'accés
        // un nouveau chemin, avec un path ou nom de route, des paramètres, ect...
    // Les guards peuvent être globaux
    // Ils peuvent récupérer les paramétres from, to, et next
    if(!isLogged()) {
        return {name: '401'}
    }
}
