import styles from './AppFooter.module.scss';
import {FOOTER} from '../../constants/pageConstants';
/**
 * @description Method to construct Footer container
 * @returns Function to return Footer container
 * @ranjithks-cdw
 */
const AppFooter = () => {
    return (
        <footer className={styles.appFooter}>
            <p>{FOOTER}</p>
        </footer>
    );
};

export default AppFooter;