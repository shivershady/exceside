import {Axios} from "./Axios";

export function signUp(payload) {
    return Axios.post("signup",payload);
}

export function login(payload) {
    return Axios.post("login",payload);
}

export function getUser() {
    return Axios.get("user");
}

export const accountService = {
    signUp,
    login,
    getUser
};