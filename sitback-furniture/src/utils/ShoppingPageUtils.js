export const addToCart = (product, quantity) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    let cartProductIndex = cart.findIndex(item => item.id === product.id);

    if(cartProductIndex >= 0) {
        cart[cartProductIndex].quantity += quantity;
        if(cart[cartProductIndex].quantity === 0) {
            cart.splice(cartProductIndex, 1);
        }
    }
    else {
        const cartProduct = {...product};
        cartProduct.quantity = 1;
        cart.push(cartProduct);
    }
    return cart;
};

export const addToWishlist = (product) => {
    const wishlistItems = JSON.parse(localStorage.getItem('wishlist'));
    let tempList = wishlistItems.filter(item => item.id !== product.id);
    tempList = [product, ...tempList];
    return tempList;
};

export const removeFromWishlist = (product) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist'));
    let tempList = wishlist.filter(item => item.id !== product.id);
    return tempList;
};

export const modifyQuantity = (product, quantity) => {
    let tempCart = JSON.parse(localStorage.getItem('cart'));
    const index = tempCart.findIndex(item => item.id === product.id);
    const prevQuantity = tempCart[index].quantity;
    tempCart[index].quantity = prevQuantity + quantity;
    if(tempCart[index].quantity === 0)
        tempCart = tempCart.filter(item => item.id !== product.id);
};