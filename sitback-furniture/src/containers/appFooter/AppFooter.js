import styles from './AppFooter.module.scss';
import {FOOTER} from '../../constants/pageConstants';

const AppFooter = () => {
    return (
        <footer className={styles.appFooter}>
            <p>{FOOTER}</p>
        </footer>
    );
};

export default AppFooter;