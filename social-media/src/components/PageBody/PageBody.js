import Main from '../Main/Main';
import userData from '../../services/userData.json';
import Card from '../Card/Card';
import styles from './PageBody.module.css';
/**
 * @description Method to construct Page body
 * @returns card
 * @author @ranjithks-cdw
 */
const PageBody = () => {
    return (
        <Main className={styles.cardsContainer}>
            {userData && userData.map(user => (
                <Card data={user} />
            ))}
        </Main>
    );
};

export default PageBody;