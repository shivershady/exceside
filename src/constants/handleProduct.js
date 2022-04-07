export function increaseProduct(productItem) {
    const _addToCart = (cart, productItem) => {
        cart.push({
            productItem,
            quantity: 1,
        })
    };
    let cart = localStorage.getItem('cart');
    if (!cart) {
        cart = [];
        _addToCart(cart, productItem);
    } else {
        cart = JSON.parse(cart);
        const findIndex = cart.findIndex(item => item?.productItem.id == productItem.id);
        if (findIndex > -1) {
            cart.find(item => item.productItem.id == productItem.id).quantity++
        } else {
            _addToCart(cart, productItem);
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    return cart;
}

export const handleProduct ={
    increaseProduct
}