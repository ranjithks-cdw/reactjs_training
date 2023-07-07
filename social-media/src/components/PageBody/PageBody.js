import Main from '../Main/Main';
import userData from '../../services/userData.json';
import Card from '../Card/Card';
import styles from './PageBody.module.css';

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