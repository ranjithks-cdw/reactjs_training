import styles from './NotFoundPage.module.scss';
import { PAGE_NOT_FOUND } from "../../constants/pageConstants";
/**
 * @description Method to construct Not Found Page
 * @returns Not Found Page
 * @ranjithks-cdw
 */
const NotFoundPage = () => {
    return (
        <p className={styles.message}>{PAGE_NOT_FOUND}</p>
    );
};

export default NotFoundPage;