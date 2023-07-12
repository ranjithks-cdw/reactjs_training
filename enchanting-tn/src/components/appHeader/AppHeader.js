import { Link } from 'react-router-dom';
import Image from '../image/Image';
import Navigation from '../navigation/Navigation';
import styles from './AppHeader.module.scss';
/**
 * @description Function to return Header component
 * @returns Header component
 * @author @ranjithks-cdw
 */
const AppHeader = () => {
    const logoURL = require(`../../assets/logo.png`);
    return (
        <header className={styles.appHeader}>
            <Link to="/">
                <Image className="logo" src={logoURL} alt={`logo`}/>
            </Link>
            <Navigation />
        </header>
    );
};

export default AppHeader;