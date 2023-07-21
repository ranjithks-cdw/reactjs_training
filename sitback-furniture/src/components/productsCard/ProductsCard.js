import PropTypes from 'prop-types';
import {IoShieldCheckmarkSharp} from 'react-icons/io5';
import Button from '../button/Button';
import Image from '../image/Image';
import styles from './ProductsCard.module.scss';
import { BUTTON, QUANTITY, RUPEE_SYMBOL } from '../../constants/pageConstants';
import {transformGuaranteeMessage, transformIndianRupee} from '../../services/transformer';
/**
 * @description Function to construct a Card component for Products
 * @returns Products Card component
 * @author @ranjithks-cdw
 */
const ProductsCard = ({product, showCart, isProductsPage, wishListManager, cartManager}) => {
    const guaranteeMessage = transformGuaranteeMessage(product.guarantee);
    const price = transformIndianRupee(product.price);
    // Method to add product to wish list
    const addToWishList = () => {
        wishListManager(product);
    };

    // Method to add product to cart
    const addToCart = () => {
        cartManager(product);
    };

    return (
        <div className={`${styles.card} ${isProductsPage ? '': styles.ordersPage} ${showCart ? styles.displayCart : ''}`}>
            <Image src={product.photo} alt={product.name} className="productsImage" />
            <div className={styles.productTitleContainer}>
                <h5>{product.name}</h5>
                <p>{RUPEE_SYMBOL} {price}</p>
            </div>
            {product.quantity ? (<p className={styles.quantity}>{QUANTITY} {product.quantity}</p>) : ''}
            <p className={styles.productDescription}>{product.description}</p>
            {
                isProductsPage ? (
                    <>
                        <div className={styles.guaranteeContainer}>
                            <IoShieldCheckmarkSharp />
                            <p>{guaranteeMessage}</p>
                        </div>
                        <div className={styles.buttonsContainer}>
                            <Button className="wishListButton" btnClickHandler={addToWishList}>{BUTTON.WISHLIST}</Button>
                            <Button className="cartButton" btnClickHandler={addToCart}>{BUTTON.CART}</Button>
                        </div>
                    </>
                ) : ''
            }
        </div>
    );
};

ProductsCard.propTypes = {
    product: PropTypes.object.isRequired,
    showCart: PropTypes.bool,
    isProductsPage: PropTypes.bool.isRequired,
    wishListManager: PropTypes.func,
    cartManager: PropTypes.func
};

export default ProductsCard;