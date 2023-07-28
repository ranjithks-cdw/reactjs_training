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
    localStorage.setItem('cart', JSON.stringify(cart));
    return cart;
};

export const addToWishlist = (product) => {
    const wishlistItems = JSON.parse(localStorage.getItem('wishlist'));
    let tempList = wishlistItems.filter(item => item.id !== product.id);
    tempList = [product, ...tempList];
    localStorage.setItem('wishlist',JSON.stringify(tempList));
    return tempList;
};

export const removeFromWishlist = (product) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist'));
    let tempList = wishlist.filter(item => item.id !== product.id);
    localStorage.setItem('wishlist',JSON.stringify(tempList));
    return tempList;
};
