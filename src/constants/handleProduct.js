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
        alert("Thêm sản phẩm thành công");
    } else {
        cart = JSON.parse(cart);
        const findIndex = cart.findIndex(item => item?.productItem.id == productItem.id);
        if (findIndex > -1) {
            cart.find(item => item.productItem.id == productItem.id).quantity++;
            alert("Thêm sản phẩm thành công");
        } else {
            _addToCart(cart, productItem);
            alert("Thêm sản phẩm thành công");
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    return cart;
}

export function decreaseProduct(productItem,index) {
    let cart = localStorage.getItem('cart');
    if (!cart) {
        alert("không có sản phẩm nào trong giỏ");
    } else {
        cart = JSON.parse(cart);
        const findIndex = cart.findIndex(item => item?.productItem.id == productItem.id);
        if (findIndex > -1) {
            let quantityProduct = cart.find(item => item.productItem.id == productItem.id).quantity;
            if(quantityProduct > 1){
                cart.find(item => item.productItem.id == productItem.id).quantity--;
                alert("giảm số lượng sản phẩm thành công");
            }else
            {
                cart.splice(index,1);
                alert("Xóa sản phẩm thành công");
            }
        } else {
            alert("không có sản phẩm này");
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    return cart;
}


export const handleProduct ={
    increaseProduct,
    decreaseProduct
}