import {Axios} from "./Axios";

export function getCategory() {
    return Axios.get('category');
}

export function getProductById(id) {
    return Axios.get(`products/category/${id}`);
}

export function getProductByIdByPage(id,page) {
    return Axios.get(`products/category/${id}?page=${page}`);
}

export const categoriesService = {
    getCategory,
    getProductById,
    getProductByIdByPage
};