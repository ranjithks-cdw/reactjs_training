import {Link} from 'react-router-dom';
import {FaCaretDown} from 'react-icons/fa';
import styles from './AppHeader.module.scss';
import { HEADER } from '../../constants/pageConstants';
import Navigation from '../../components/navigation/Navigation';
/**
 * @description Method to consturct Header container
 * @returns Header container
 * @ranjithks-cdw
 */
const AppHeader = () => {
    return (
        <header className={styles.appHeader}>
            <Link to='/'>
                <h1 className={styles.logo}>{HEADER.LOGO}</h1>
            </Link>
            <Navigation />
            <p>{HEADER.PROFILE_NAME}<span><FaCaretDown /></span></p>
        </header>
    );
};

export default AppHeader;