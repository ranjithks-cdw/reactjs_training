import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import styles from './ProductsContainer.module.scss';
import {axiosAPI} from '../../services/apiService';
import ProductsCard from '../../components/productsCard/ProductsCard';
const ProductsContainer = () => {
    const category = useParams().category;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axiosAPI.get(`/products?category=${category}`)
        .then(response => setProducts(response.data))
        .catch(error => console.log(error));
    },[category]);

    const cards = products?.map(product => <ProductsCard key={product.id} product={product} />);
    return (
        <main className={styles.productsContainer}>
            {cards}
        </main>
    );
};

export default ProductsContainer;