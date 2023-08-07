import { LANGUAGES } from '../../constants/pageConstants';
import styles from './Languages.module.scss';

/**
 * Method to construct Languages component
 * @returns Languages component
 */
const Languages = () => {
    const languagesList = LANGUAGES.AVAIL_LANGUAGES.map(language => {
        return (
            <div className={styles.language} key={language}>
                <p>{language}</p>
            </div>
        );
    });

    return (
        <div className={styles.languagesContainer}>
            <h5>{LANGUAGES.TITLE}</h5>
            <div className={styles.languages}>
                {languagesList}
            </div>
        </div>
    );
};

export default Languages;