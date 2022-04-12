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

export function editProfile(payload) {
    return Axios.put("update-profile",payload);
}

export const accountService = {
    signUp,
    login,
    getUser,
    editProfile
};