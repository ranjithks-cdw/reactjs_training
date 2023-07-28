import {useEffect, useState} from 'react';
import {ClipLoader} from 'react-spinners';
import styles from './HomeContainer.module.scss';
import CategoriesCard from '../../components/categoriesCard/CategoriesCard';
import { HOME_PAGE } from '../../constants/pageConstants';
import {retrieveCategoryData} from '../../services/apiService';
/**
 * @description Method to construct Home Container
 * @returns Home Container
 * @ranjithks-cdw
 */
const HomeContainer = () => {
    const [categoryData, setCategoyData] = useState(() => {
        const data = localStorage.getItem('categoryData');
        return JSON.parse(data) ?? [];
    });
    const [load, setLoad] = useState(categoryData.length <= 0);
    useEffect(() => {
        setTimeout(() => {
            if(categoryData.length <= 0) {
                retrieveCategoryData().then(data => {
                    if(data.length !== categoryData.length) {
                        setCategoyData(data);
                        localStorage.setItem('categoryData', JSON.stringify(data));
                    }
                })
                .catch(error => error);
            }
            setLoad(categoryData.length <= 0);
        }, 1000)
    },[categoryData]);

    const cards = categoryData && categoryData.map(category => <CategoriesCard key={category.id} data={category} />);

    return (
        <main className={styles.homeContainer}>
            <h2 className={styles.title}>{HOME_PAGE.TITLE}</h2>
            <h5 className={styles.description}>{HOME_PAGE.DESCRIPTION}</h5>
            <div className={styles.cardsContainer}>
                {load ? <div className={styles.loaderContainer}><ClipLoader className={styles.loader} /></div> : cards }
            </div>
        </main>
    );
};

export default HomeContainer;