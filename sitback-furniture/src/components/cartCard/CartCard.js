import PropTypes from 'prop-types';
import Button from '../button/Button';
import Image from '../image/Image';
import { transformIndianRupee } from '../../services/transformer';
import { BUTTON } from '../../constants/pageConstants';
import styles from './CartCard.module.scss';
/**
 * @description Function to create card for carts
 * @returns Cart Card component
 * @author @ranjithks-cdw
 */
const CartCard = ({product, isCart, cartManager, quantityManager}) => {
    const price = transformIndianRupee(product.price);
    
    // Method to increment quantity of product in cart
    const increaseQuantity = () => {
        quantityManager(1, product);
    };

    // Method to decrement quantity of product in cart
    const decreaseQuantity = () => {
        quantityManager(-1, product);
    };

    // Method to add product to cart
    const addToCart = () => {
        cartManager(product);
    };

    return (
        <div className={styles.cardWrapper}>
            <div className={styles.card}>
                <Image className='cartImage' src={product.photo} alt={product.name} />
                <div className={styles.contentContainer}>
                    <p className={styles.productName}>{product.name}</p>
                    <p className={styles.price}>₹ {price}</p>
                </div>
                {isCart ? 
                    <div className={styles.buttonContainer}>
                        <Button className="incrementButton" btnClickHandler={decreaseQuantity}>{BUTTON.DECREMENT}</Button>
                            <p>{product.quantity}</p>
                        <Button className="decrementButton" btnClickHandler={increaseQuantity}>{BUTTON.INCREMENT}</Button>
                    </div>
                    :
                    <Button className="cartContentButton" btnClickHandler={addToCart}>{BUTTON.CART}</Button>
                }
            </div>
        </div>
    );
};

CartCard.propTypes = {
    product: PropTypes.object.isRequired,
    isCart: PropTypes.bool.isRequired,
    cartManager: PropTypes.func,
    quantityManager: PropTypes.func
};

export default CartCard;