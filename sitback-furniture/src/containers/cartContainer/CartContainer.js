import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import CartCard from '../../components/cartCard/CartCard';
import Button from '../../components/button/Button';
import styles from './CartContainer.module.scss';
import { transformIndianRupee } from '../../services/transformer';
import { BUTTON, CART_CONTAINER } from '../../constants/pageConstants';
import { useNavigate } from 'react-router-dom';
/**
 * @description Function to return Cart container
 * @returns Cart container component
 * @ranjithks-cdw
 */
const CartContainer = (props) => {
    const {cartData, wishlistData, activeTab, setCartVisbility} = props;
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return JSON.parse(storedCart) ?? [];
    });
    const [wishlistItems, setWishlistItems] = useState(()=> {
        const storedWishlist = localStorage.getItem('wishlist');
        return JSON.parse(storedWishlist) ?? [];
    });
    const [activeTabContent, setActiveTabContent] = useState(activeTab);
    const placeOrder = () => {
        localStorage.setItem('orders', JSON.stringify(cartItems));
        setCartItems([]);
        localStorage.setItem('cart', JSON.stringify([]));
        navigate('/confirmOrder');
    };

    const addToCart = product => {
        const cart = JSON.parse(localStorage.getItem('cart'));
        const wishlist = JSON.parse(localStorage.getItem('wishlist'));
        let cartProduct = cart.find(item => item.id === product.id);
        if(cartProduct) {
            cartProduct.quantity = cartProduct.quantity + 1;
        }
        else {
            cartProduct = {...product};
            cartProduct.quantity = 1;
        }
        let tempCart = cart.filter(item => item.id !== cartProduct.id);
        tempCart = [cartProduct, ...tempCart];
        setCartItems(tempCart);
        let tempList = wishlist.filter(item => item.id !== product.id);
        if(wishlist.length > tempList.length) {
            setWishlistItems(tempList);
        }
    };

    const modifyQuantity = (quantity, product) => {
        let tempCart = JSON.parse(localStorage.getItem('cart'));
        const index = tempCart.findIndex(item => item.id === product.id);
        const prevQuantity = tempCart[index].quantity;
        tempCart[index].quantity = prevQuantity + quantity;
        if(tempCart[index].quantity === 0)
            tempCart = tempCart.filter(item => item.id !== product.id);
        setCartItems(tempCart);
    }
    
    const toggleTab = (event) => {
        setActiveTabContent(event.target.getAttribute('tab'));
    };
    const [price, setPrice] = useState();
    
    const amountCalculator = (cartItems) => {
        const totalPrice = cartItems.reduce((total, item) => total + (parseInt(item.price) * item.quantity), 0);
        setPrice(transformIndianRupee(totalPrice));
    };

    useEffect(() => {
        amountCalculator(cartItems);
        localStorage.setItem('cart',JSON.stringify(cartItems));
    },[cartItems]);

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    },[wishlistItems]);

    useEffect(() => {
        setActiveTabContent(activeTab);
    },[activeTab]);

    useEffect(() => {
        setActiveTabContent(activeTabContent);
    },[activeTabContent]);

    useEffect(() => {
        if(cartItems.length <= 0 && wishlistItems.length <= 0) {
            setCartVisbility();
        }
    },[cartItems, wishlistItems, setCartVisbility]);

    useEffect(()=> {
        console.log('carrrr', cartData);
        setCartItems(cartData);
    },[cartData]);

    useEffect(()=> {
        console.log('hello');
        setWishlistItems(wishlistData);
    },[wishlistData]);

    const cards = activeTabContent === 'cart' ? cartItems.map(product => <CartCard isCart={true} key={product.id} product={product} quantityManager={modifyQuantity}/>) : wishlistItems.map(product => <CartCard key={product.id} product={product} isCart={false} cartManager={addToCart}/>);
    return (
        <aside className={styles.cartContainer}>
            <div className={styles.cartWrapper}>
                <header className={styles.cartHeader}>
                    <p tab='cart' className={activeTabContent === 'cart' ? styles.active : ''} onClick={toggleTab}>{CART_CONTAINER.CART}</p>
                    <p tab='wishlist' className={activeTabContent === 'wishlist' ? styles.active : ''} onClick={toggleTab}>{CART_CONTAINER.WISHLIST}</p>
                </header>
                <main className={styles.cartContentWrapper}>
                    {cards.length > 0 ? cards : <p className={styles.cartMessage}>{CART_CONTAINER.MESSAGE}</p>}
                </main>
                {
                    activeTabContent === 'cart' && cartItems.length > 0 && (

                        <footer className={styles.cartFooter}>
                            <div className={styles.amountContainer}>
                                <p className={styles.title}>{CART_CONTAINER.AMOUNT}</p>
                                <p>₹ {price}</p>
                            </div>
                            <Button className='orderButton' btnClickHandler={placeOrder}>{BUTTON.PLACE_ORDER}</Button>
                        </footer>
                    )
                }
            </div>
        </aside>
    );
};

CartContainer.propTypes = {
    cartData: PropTypes.array,
    wishlistData: PropTypes.array,
    activeTab: PropTypes.string.isRequired,
    setCartVisbility: PropTypes.func
};

export default CartContainer;