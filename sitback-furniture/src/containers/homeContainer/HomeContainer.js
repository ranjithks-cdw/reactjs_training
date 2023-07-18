import {useEffect, useState} from 'react';
import styles from './HomeContainer.module.scss';
import CategoryCards from '../../components/categoryCards/CategoryCards';
import { HOME_PAGE } from '../../constants/pageConstants';
import {axiosAPI} from '../../services/apiService';

const HomeContainer = () => {
    const [categoryData, setCategoyData] = useState([]);
    useEffect(() => {
        axiosAPI.get('/categories')
        .then(response => setCategoyData(response.data))
        .catch(error => console.log(error))
    },[]);

    const cards = categoryData?.map(category => <CategoryCards key={category.id} data={category} />);

    return (
        <div className={styles.homeContainer}>
            <h2 className={styles.title}>{HOME_PAGE.TITLE}</h2>
            <h5 className={styles.description}>{HOME_PAGE.DESCRIPTION}</h5>
            <div className={styles.cardsContainer}>
                {cards}
            </div>
        </div>
    );
};

export default HomeContainer;