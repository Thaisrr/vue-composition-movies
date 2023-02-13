import {createPinia} from "pinia";

// Peut-être mis directement dans main.js
const pinia = createPinia();
export default pinia;

export {useUser} from './UserStore';
