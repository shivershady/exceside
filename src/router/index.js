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
            path: '/categories/:id',
            name: 'categories',
            component: () => import('@/pages/Category/Category.vue')
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('@/pages/Cart/Cart.vue')
        },
        {
            path: '/make-order',
            name: 'make-order',
            component: () => import('@/pages/Order/MakeOrder.vue')
        },
        {
            path: '/order-success',
            name: 'order-success',
            component: () => import('@/pages/Order/OrderSuccess.vue')
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
            path: '/profile',
            name: 'profile',
            component: () => import('@/pages/Profile/Profile.vue')
        },
        {
            path: '*',
            component: () => import('@/components/NotFound.vue'),
        }
    ],
    mode: "history",

});
