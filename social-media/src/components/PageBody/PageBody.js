import userData from '../../services/userData.json';
import Card from '../card/Card';
import styles from './PageBody.module.css';
/**
 * @description Method to construct Page body
 * @returns card
 * @author @ranjithks-cdw
 */
const PageBody = () => {
    const cardData = userData ? userData.map(user => <Card data={user} key={user} />): <h2>No Data Found!</h2>;
    return (
        <main className={styles.cardsContainer}>
            {cardData}
        </main>
    );
};

export default PageBody;