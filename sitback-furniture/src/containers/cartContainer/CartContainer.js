import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartCard from '../../components/cartCard/CartCard';
import Button from '../../components/button/Button';
import styles from './CartContainer.module.scss';
import { transformIndianRupee } from '../../services/transformer';
import { BUTTON, CART_CONTAINER } from '../../constants/pageConstants';
import { addToCart, removeFromWishlist } from '../../utils/ShoppingPageUtils';
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
    const [messageContent, setMessageContent] = useState('');

    useEffect(() => {
        const message = `${CART_CONTAINER.MESSAGE} to ${activeTabContent}`;
        setMessageContent(message);
    },[activeTabContent]);
    const placeOrder = () => {
        localStorage.setItem('orders', JSON.stringify(cartItems));
        setCartItems([]);
        localStorage.setItem('cart', JSON.stringify([]));
        navigate('/confirmOrder');
    };

    const manageCart = product => {
        const tempCart = addToCart(product, 1);
        const tempList = removeFromWishlist(product);
        
        setCartItems(tempCart);
        setWishlistItems(tempList);
    };

    const manageQuantity = (quantity, product) => {
        const tempCart = addToCart(product, quantity);
        
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
        setCartItems(cartData);
    },[cartData]);

    useEffect(()=> {
        setWishlistItems(wishlistData);
    },[wishlistData]);

    const cards = activeTabContent === 'cart' ? cartItems.map(product => <CartCard isCart={true} key={product.id} product={product} quantityManager={manageQuantity}/>) : wishlistItems.map(product => <CartCard key={product.id} product={product} isCart={false} cartManager={manageCart}/>);
    return (
        <aside className={styles.cartContainer}>
            <div className={styles.cartWrapper}>
                <header className={styles.cartHeader}>
                    <p tab='cart' className={activeTabContent === 'cart' ? styles.active : ''} onClick={toggleTab}>{CART_CONTAINER.CART}</p>
                    <p tab='wishlist' className={activeTabContent === 'wishlist' ? styles.active : ''} onClick={toggleTab}>{CART_CONTAINER.WISHLIST}</p>
                </header>
                <main className={styles.cartContentWrapper}>
                    {cards.length > 0 ? cards : <p className={styles.cartMessage}>{messageContent}</p>}
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

CartContainer.defaultProps = {
    activeTab: 'cart'
};

export default CartContainer;