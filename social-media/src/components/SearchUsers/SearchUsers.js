import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './SearchUsers.module.css';
import { pageConstants } from '../../constants/pageConstants';

/**
 * @description Function to create search user input component
 * @returns Search users component
 * @author @ranjithks-cdw
 */
const SearchUsers = () => {

    return (
        <div className={styles.inputGroup}>
            <FontAwesomeIcon icon={faSearch} className={styles.icon}/>
            <input type="text" placeholder={pageConstants.placeHolders.searchUser} className={styles.inputBox}/>
        </div>
    );
};

export default SearchUsers;