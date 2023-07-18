import styles from './HomeContainer.module.scss';
import CategoryCards from '../../components/categoryCards/CategoryCards';
import { HOME_PAGE } from '../../constants/pageConstants';

const HomeContainer = () => {
    return (
        <div className={styles.homeContainer}>
            <h2 className={styles.title}>{HOME_PAGE.TITLE}</h2>
            <h5 className={styles.description}>{HOME_PAGE.DESCRIPTION}</h5>
            <CategoryCards />
        </div>
    );
};

export default HomeContainer;