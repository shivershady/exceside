import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/pages/Home/Home.vue'),
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('@/pages/Cart/Cart.vue')
        },
        {
            path: '*',
            component: () => import('@/components/NotFound.vue'),
        }
    ],
    mode: "history",

});
