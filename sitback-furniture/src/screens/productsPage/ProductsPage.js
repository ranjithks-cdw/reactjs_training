import { useEffect, useState } from "react";
import CartContainer from "../../containers/cartContainer/CartContainer";
import ProductsContainer from "../../containers/productsContainer/ProductsContainer"
import styles from './ProductsPage.module.scss';
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
        console.log('hi', wishlist);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    },[wishlist]);

    useEffect(() => {
        console.log('ca', cart);
        localStorage.setItem('cart', JSON.stringify(cart));
    },[cart]);

    useEffect(() => {
        cart.length > 0 || wishlist.length > 0 ? setShowCart(true) : setShowCart(false);
    },[wishlist, cart]);

    const addToWishList = product => {
        const wishlistItems = JSON.parse(localStorage.getItem('wishlist'));
        let tempList = wishlistItems.filter(item => item.id !== product.id);
        tempList = [product, ...tempList];
        setWishlist(tempList);
        toggleTab('wishlist');
    };

    const addToCart = (product) => {
        const cartItems = JSON.parse(localStorage.getItem('cart'));
        let cartProduct = cartItems.find(item => item.id === product.id);
        if(cartProduct) {
            cartProduct.quantity = cartProduct.quantity + 1;
        }
        else {
            cartProduct = {...product};
            cartProduct.quantity = 1;
        }
        let tempCart = cartItems.filter(item => item.id !== cartProduct.id);
        tempCart = [cartProduct, ...tempCart];
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
            <ProductsContainer showCart={showCart} wishListManager={addToWishList} cartManager={addToCart} />
            {showCart && <CartContainer cartData={cart} wishlistData={wishlist}  activeTab={activeTab} setCartVisbility={setCartVisbility}/>}
        </div>
    );
};

export default ProductsPage;