import { ORDERS_PAGE } from '../../constants/pageConstants';
import styles from './OrdersContainer.module.scss';
import ProductsCard from '../../components/productsCard/ProductsCard';
/**
 * @description Method to construct container for orders
 * @returns Orders Container
 * @ranjithks-cdw
 */
const OrdersContainer = () => {
    const products = JSON.parse(localStorage.getItem('orders'));

    const cards = products?.length > 0 ? products.map(product => <ProductsCard key={product.id} product={product} isProductsPage={false}/>) : <p>{ORDERS_PAGE.NO_ITEMS}</p>;

    return (
        <div className={styles.ordersContainer}>
            <h2 className={styles.title}>{ORDERS_PAGE.TITLE}</h2>
            <h5 className={styles.description}>{ORDERS_PAGE.DESCRIPTION}</h5>
            <div className={styles.productsContainer}>
                {cards}
            </div>
        </div>
    );
};

export default OrdersContainer;