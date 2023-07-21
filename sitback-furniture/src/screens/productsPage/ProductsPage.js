import { useEffect, useState } from "react";
import CartContainer from "../../containers/cartContainer/CartContainer";
import ProductsContainer from "../../containers/productsContainer/ProductsContainer"
import styles from './ProductsPage.module.scss';
import { useNavigate } from "react-router-dom";
/**
 * @description Method to construct ProductsPage component
 * @returns Products Page
 * @ranjithks-cdw
 */
const ProductsPage = () => {
    const navigate = useNavigate();
    const [showCart, setShowCart] = useState(false);
    const [wishlist, setWishlist] = useState(() => {
        const storedList = localStorage.getItem('wishlist');
        return JSON.parse(storedList) ?? [];
    });
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return JSON.parse(storedCart) ?? [];
    });
    
    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    },[wishlist]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    },[cart]);

    useEffect(() => {
        cart.length > 0 || wishlist.length > 0 ? setShowCart(true) : setShowCart(false);
    },[wishlist, cart]);

    const addToWishList = product => {
        let tempList = wishlist.filter(item => item.id !== product.id);
        tempList = [product, ...tempList];
        const index = cart.findIndex(item => item.id === product.id);
        if(index < 0)
            setWishlist(tempList);
    };

    const addToCart = product => {
        let cartProduct = cart.find(item => item.id === product.id);
        if(cartProduct) {
            cartProduct.quantity = cartProduct.quantity + 1;
        }
        else {
            cartProduct = {...product};
            cartProduct.quantity = 1;
        }
        let tempCart = cart.filter(item => item.id !== cartProduct.id);
        tempCart = [...tempCart, cartProduct];
        let tempList = wishlist.filter(item => item.id !== product.id);
        if(wishlist.length > tempList.length) {
            setWishlist(tempList);
        }
        setCart(tempCart);
    };
    const addToOrders = () => {
        localStorage.setItem('orders', JSON.stringify(cart));
        setCart([]);
        localStorage.setItem('cart', JSON.stringify([]));
        navigate('/confirmOrder');
    };
    const modifyQuantity = (quantity, product) => {
        let tempCart = [...cart];
        const index = tempCart.findIndex(item => item.id === product.id);
        const prevQuantity = tempCart[index].quantity;
        tempCart[index].quantity = prevQuantity + quantity;
        if(tempCart[index].quantity === 0)
            tempCart = tempCart.filter(item => item.id !== product.id);
        setCart(tempCart);
    };
    return (
        <div className={styles.shoppingPageContainer}>
            <ProductsContainer showCart={showCart} wishListManager={addToWishList} cartManager={addToCart} />
            {showCart && <CartContainer cartData={cart} wishlistData={wishlist} cartManager={addToCart} ordersManager={addToOrders} quantityManager={modifyQuantity}/>}
        </div>
    );
};

export default ProductsPage;