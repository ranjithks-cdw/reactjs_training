import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './SearchUsers.module.css';
import Input from '../input/Input';

/**
 * @description Function to create search user input component
 * @returns Search users component
 * @author @ranjithks-cdw
 */
const SearchUsers = () => {
    const inputType = `text`;
    const inputPlaceholder = `Search users`;

    return (
        <div className={styles.inputGroup}>
            <FontAwesomeIcon icon={faSearch} className={styles.icon}/>
            <Input inputType={inputType} inputPlaceholder={inputPlaceholder} className={styles.inputBox}/>
        </div>
    );
};

export default SearchUsers;