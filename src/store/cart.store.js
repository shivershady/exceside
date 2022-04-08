export const cartStore = {
    namespaced:true,
    state:{
        cartData:[]
    },
    action: {},
    mutations:{
        setHomeData(state, payload) {
            state.cartData = payload
        },
    }
}