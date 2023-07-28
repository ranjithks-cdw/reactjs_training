import { useEffect, useState } from "react";
import CartContainer from "../../containers/cartContainer/CartContainer";
import ProductsContainer from "../../containers/productsContainer/ProductsContainer"
import styles from './ProductsPage.module.scss';
import { addToCart, addToWishlist } from "../../utils/ShoppingPageUtils";
/**
 * @description Method to construct ProductsPage component
 * @returns Products Page
 * @ranjithks-cdw
 */
const ProductsPage = () => {
    const [showCart, setShowCart] = useState();
    const [wishlist, setWishlist] = useState(() => {
        const storedList = localStorage.getItem('wishlist');
        return JSON.parse(storedList) ?? [];
    });
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return JSON.parse(storedCart) ?? [];
    });
    const [activeTab, setActiveTab] = useState('cart');

    const manageWishlist = product => {
        const tempList = addToWishlist(product);
        setWishlist(tempList);
        setActiveTab('wishlist');
        setShowCart(true);
    };

    const manageCart = (product) => {
        const tempCart = addToCart(product, 1);
        setCart(tempCart);
        setActiveTab('cart');
        setShowCart(true);
    };

    const setCartVisbility = () => {
        setCart([]);
        setWishlist([]);
        setShowCart(cart.length > 0 || wishlist.length > 0);
    };

    useEffect(() => {
        setShowCart(cart.length > 0 || wishlist.length > 0);
    },[]);
    
    return (
        <div className={styles.shoppingPageContainer}>
            <ProductsContainer showCart={showCart} wishListManager={manageWishlist} cartManager={manageCart} />
            {showCart && <CartContainer cartData={cart} wishlistData={wishlist}  activeTab={activeTab} setCartVisbility={setCartVisbility}/>}
        </div>
    );
};

export default ProductsPage;