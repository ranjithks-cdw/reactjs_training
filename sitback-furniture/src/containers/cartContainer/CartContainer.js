import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import CartCard from '../../components/cartCard/CartCard';
import Button from '../../components/button/Button';
import styles from './CartContainer.module.scss';
import { transformIndianRupee } from '../../services/transformer';
import { BUTTON, CART_CONTAINER } from '../../constants/pageConstants';
/**
 * @description Function to return Cart container
 * @returns Cart container component
 * @ranjithks-cdw
 */
const CartContainer = ({cartData, wishlistData, cartManager, ordersManager, quantityManager}) => {

    const placeOrder = () => {
        ordersManager();
    };

    const addToCart = product => {
        cartManager(product);
    };

    const modifyQuantity = (quantity, product) => {
        quantityManager(quantity, product);
    }
    const [activeTab, setActiveTab] = useState('cart');
    
    const toggleTab = () => {
        const tabName = activeTab === 'cart' ? 'wishlist' : 'cart';
        setActiveTab(tabName);
    };
    const [price, setPrice] = useState();
    
    const amountCalculator = (cartData) => {
        const totalPrice = cartData.reduce((total, item) => total + (parseInt(item.price) * item.quantity), 0);
        setPrice(transformIndianRupee(totalPrice));
    };

    useEffect(() => {
        amountCalculator(cartData);
    },[cartData]);
    
    const cards = activeTab === 'cart' ? cartData.map(product => <CartCard isCart={true} key={product.id} product={product} quantityManager={modifyQuantity}/>) : wishlistData.map(product => <CartCard key={product.id} product={product} isCart={false} cartManager={addToCart}/>);
    return (
        <aside className={styles.cartContainer}>
            <div className={styles.cartWrapper}>
                <header className={styles.cartHeader}>
                    <p className={activeTab === 'cart' ? styles.active : ''} onClick={toggleTab}>{CART_CONTAINER.CART}</p>
                    <p className={activeTab === 'wishlist' ? styles.active : ''} onClick={toggleTab}>{CART_CONTAINER.WISHLIST}</p>
                </header>
                <main className={styles.cartContentWrapper}>
                    {cards}
                </main>
                {
                    activeTab === 'cart' && cartData.length > 0 && (

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
    cartManager: PropTypes.func,
    ordersManager: PropTypes.func,
    quantityManager: PropTypes.func
};

export default CartContainer;