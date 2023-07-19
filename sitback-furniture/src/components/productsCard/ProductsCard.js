import { BUTTON } from '../../constants/pageConstants';
import Button from '../button/Button';
import Image from '../image/Image';
import {IoShieldCheckmarkSharp} from 'react-icons/io5';
import styles from './ProductsCard.module.scss';
import {transformGuaranteeMessage, transformIndianRupee} from '../../services/transformer';
const ProductsCard = ({product}) => {
    const guaranteeMessage = transformGuaranteeMessage(product.guarantee);
    const price = transformIndianRupee(product.price);
    const addToWishList = () => {

    };
    const addToCart = () => {

    };

    return (
        <div className={styles.card}>
            <Image src={product.photo} alt={product.name} className="productsImage" />
            <div className={styles.productTitleContainer}>
                <h5>{product.name}</h5>
                <p>₹{price}</p>
            </div>
            <p className={styles.productDescription}>{product.description}</p>
            <div className={styles.guaranteeContainer}>
                <IoShieldCheckmarkSharp />
                <p>{guaranteeMessage}</p>
            </div>
            <div className={styles.buttonsContainer}>
                <Button className="wishListButton" btnClickHandler={addToWishList}>{BUTTON.WISHLIST}</Button>
                <Button className="cartButton" btnClickHandler={addToCart}>{BUTTON.CART}</Button>
            </div>
        </div>
    );
};

export default ProductsCard;