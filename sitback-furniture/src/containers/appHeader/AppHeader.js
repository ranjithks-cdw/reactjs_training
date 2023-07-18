import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import styles from './AppHeader.module.scss';
import { HEADER } from '../../constants/pageConstants';
import Navigation from '../../components/navigation/Navigation';

const AppHeader = () => {
    return (
        <header className={styles.appHeader}>
            <Link to='/'>
                <h1 className={styles.logo}>{HEADER.LOGO}</h1>
            </Link>
            <Navigation />
            <p>{HEADER.PROFILE_NAME}<span><FontAwesomeIcon icon={faCaretDown}/></span></p>
        </header>
    );
};

export default AppHeader;