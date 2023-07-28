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
        const tempCart = localStorage.getItem('cart');
        return JSON.parse(tempCart) ?? [];
    });
    const [wishlistItems, setWishlistItems] = useState(() => {
        const tempList = localStorage.getItem('wishlist');
        return JSON.parse(tempList);
    });
    const [price, setPrice] = useState();
    const [activeTabContent, setActiveTabContent] = useState(activeTab);
    const [messageContent, setMessageContent] = useState('');
    
    // Order items
    const placeOrder = () => {
        localStorage.setItem('orders', JSON.stringify(cartItems));
        setCartItems([]);
        localStorage.setItem('cart', JSON.stringify([]));
        navigate('/confirmOrder');
    };

    // Manage cart and wishlist if item added from wishlist
    const manageCart = product => {
        const tempCart = addToCart(product, 1);
        const tempList = removeFromWishlist(product);
        
        setCartItems(tempCart);
        setWishlistItems(tempList);
        amountCalculator(tempCart);
    };

    // Manage quantity of cart items
    const manageQuantity = (quantity, product) => {
        const tempCart = addToCart(product, quantity);
        setCartItems(tempCart);
        amountCalculator(tempCart);
    }
    
    // Toggle between wishlist and cart
    const toggleTab = (event) => {
        const tabName = event.target.getAttribute('tab');
        setActiveTabContent(tabName);
        const message = `${CART_CONTAINER.MESSAGE} to ${tabName}`;
        setMessageContent(message);
    };
    
    // Calculate total cart amount
    const amountCalculator = (cartItems) => {
        const totalPrice = cartItems.reduce((total, item) => total + (parseInt(item.price) * item.quantity), 0);
        setPrice(transformIndianRupee(totalPrice));
    };

    useEffect(() => {
        amountCalculator(cartItems);
    },[]);

    useEffect(() => {
        setCartItems(cartData);
        setWishlistItems(wishlistData);
        setActiveTabContent(activeTab);
    },[cartData, wishlistData, activeTab]);

    useEffect(() => {
        if(cartItems.length <= 0 && wishlistItems.length <= 0) {
            setCartVisbility();
        }
    },[cartItems]);


    const cards = activeTabContent === 'cart' ? cartItems?.map(product => <CartCard isCart={true} key={product.id} product={product} quantityManager={manageQuantity}/>) : wishlistItems?.map(product => <CartCard key={product.id} product={product} isCart={false} cartManager={manageCart}/>);
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