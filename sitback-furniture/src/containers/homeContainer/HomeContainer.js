import {useEffect, useState} from 'react';
import styles from './HomeContainer.module.scss';
import CategoriesCard from '../../components/categoriesCard/CategoriesCard';
import { HOME_PAGE } from '../../constants/pageConstants';
import {axiosAPI} from '../../services/apiService';

const HomeContainer = () => {
    const [categoryData, setCategoyData] = useState([]);
    useEffect(() => {
        axiosAPI.get('/categories')
        .then(response => setCategoyData(response.data))
        .catch(error => console.log(error))
    },[]);

    const cards = categoryData?.map(category => <CategoriesCard key={category.id} data={category} />);

    return (
        <main className={styles.homeContainer}>
            <h2 className={styles.title}>{HOME_PAGE.TITLE}</h2>
            <h5 className={styles.description}>{HOME_PAGE.DESCRIPTION}</h5>
            <div className={styles.cardsContainer}>
                {cards}
            </div>
        </main>
    );
};

export default HomeContainer;