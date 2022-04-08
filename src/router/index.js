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
            path: '/order',
            name: 'order',
            component: () => import('@/pages/Order/Order.vue')
        },
        {
            path: '/signup',
            name: 'signup',
            component: () => import('@/pages/Signup/Signup.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/pages/Login/Login.vue')
        },
        {
            path: '*',
            component: () => import('@/components/NotFound.vue'),
        }
    ],
    mode: "history",

});
