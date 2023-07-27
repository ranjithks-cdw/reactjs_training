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
    const [showCart, setShowCart] = useState(false);
    const [wishlist, setWishlist] = useState(() => {
        const storedList = localStorage.getItem('wishlist');
        return JSON.parse(storedList) ?? [];
    });
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return JSON.parse(storedCart) ?? [];
    });
    const [activeTab, setActiveTab] = useState('cart');

    const toggleTab = tab => {
        setActiveTab(tab);
    };

    useEffect(() => {

    },[activeTab]);
    
    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    },[wishlist]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    },[cart]);

    useEffect(() => {
        cart.length > 0 || wishlist.length > 0 ? setShowCart(true) : setShowCart(false);
    },[wishlist, cart]);

    const manageWishlist = product => {
        const tempList = addToWishlist(product);
        setWishlist(tempList);
        toggleTab('wishlist');
    };

    const manageCart = (product) => {
        const tempCart = addToCart(product, 1);
        setCart(tempCart);
        toggleTab('cart');
    };

    const setCartVisbility = () => {
        setShowCart(false);
        setCart(JSON.parse(localStorage.getItem('cart')));
        setWishlist(JSON.parse(localStorage.getItem('wishlist')));
    }
    
    return (
        <div className={styles.shoppingPageContainer}>
            <ProductsContainer showCart={showCart} wishListManager={manageWishlist} cartManager={manageCart} />
            {showCart && <CartContainer cartData={cart} wishlistData={wishlist}  activeTab={activeTab} setCartVisbility={setCartVisbility}/>}
        </div>
    );
};

export default ProductsPage;