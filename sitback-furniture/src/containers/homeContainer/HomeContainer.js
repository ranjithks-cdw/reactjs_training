import {useEffect, useState} from 'react';
import {ClipLoader} from 'react-spinners';
import styles from './HomeContainer.module.scss';
import CategoriesCard from '../../components/categoriesCard/CategoriesCard';
import { HOME_PAGE } from '../../constants/pageConstants';
import {axiosAPI} from '../../services/apiService';
/**
 * @description Method to construct Home Container
 * @returns Home Container
 * @ranjithks-cdw
 */
const HomeContainer = () => {
    const [categoryData, setCategoyData] = useState([]);
    const [load, setLoad] = useState(true);
    useEffect(() => {
        axiosAPI.get('/categories')
        .then(response => setCategoyData(response.data))
        .catch(error => error)
    },[]);

    useEffect(() => {
        setTimeout(() => {
            setLoad(false);
        },1000);
    },[]);

    const cards = categoryData?.map(category => <CategoriesCard key={category.id} data={category} />);

    return (
        <main className={styles.homeContainer}>
            <h2 className={styles.title}>{HOME_PAGE.TITLE}</h2>
            <h5 className={styles.description}>{HOME_PAGE.DESCRIPTION}</h5>
            <div className={styles.cardsContainer}>
            {load ? <ClipLoader className={styles.loader} /> : cards}
            </div>
        </main>
    );
};

export default HomeContainer;