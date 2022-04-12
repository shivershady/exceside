import {Axios} from "./Axios";

export function makeOrder(payload) {
    return Axios.post("make-order",payload);
}

export function orderSuccess() {
    return Axios.get("my-orders",{
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
        }});
}


export const orderService = {
    makeOrder,
    orderSuccess
};