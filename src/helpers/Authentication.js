import abra from "abra.js";
import {API_URL} from "@/helpers/API_URL";
import {useUser} from "@/pinia/UserStore";

const url = `${API_URL}`;

export const login = async (logInfos) => {
    try {
        const res = await abra.post(`${url}/login`, logInfos);
        if(!res.response.ok) {
            throw new Error('Something is wrong but I don\'t know why');
        }
        const store = useUser();
        console.log(res)
        store.login(res.data.user.email);
        localStorage.setItem('token', res.data.accessToken);
        localStorage.setItem('email', res.data.user.email);
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
}

export const register = async (logInfos) => {
    try {
        const res = await abra.post(`${url}/register`, logInfos);
        if(!res.response.ok) {
            throw new Error('Something is wrong but I don\'t know why');
        }
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
}

export const getToken = () => localStorage.getItem('token');
export const getEmail = () => localStorage.getItem('email');
export const isLogged = () => !!localStorage.getItem('token');
export const logout = () => {
    localStorage.clear();
    const store = useUser();
    store.logout();
}
