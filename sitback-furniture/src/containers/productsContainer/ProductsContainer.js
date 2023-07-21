import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {ClipLoader} from 'react-spinners';
import styles from './ProductsContainer.module.scss';
import {axiosAPI} from '../../services/apiService';
import ProductsCard from '../../components/productsCard/ProductsCard';
/**
 * @description Method to construct container for products
 * @returns Products Container
 * @ranjithks-cdw
 */
const ProductsContainer = ({showCart, wishListManager, cartManager}) => {
    const category = useParams().category;
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(true);
    
    useEffect(() => {
        axiosAPI.get(`/products?category=${category}`)
        .then(response => setProducts(response.data))
        .catch(error => error);
    },[category]);

    useEffect(() => {
        setTimeout(() => {
            setLoad(false);
        },1000);
    },[]);

    const addToWishList = product => {
        wishListManager(product);
    };

    const addToCart = product => {
        cartManager(product);
    };

    const cards = products?.map(product => <ProductsCard key={product.id} product={product} showCart={showCart} isProductsPage={true} wishListManager={addToWishList} cartManager={addToCart}/>);
    return (
        <main className={styles.productsContainer}>
            {load ? <ClipLoader className={styles.loader} /> : cards}
        </main>
    );
};

ProductsContainer.propTypes = {
    showCart: PropTypes.bool,
    wishListManager: PropTypes.func,
    cartManager: PropTypes.func
};

export default ProductsContainer;