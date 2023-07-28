import { NavLink } from "react-router-dom";
import { HEADER } from "../../constants/pageConstants";
import styles from './Navigation.module.scss';
/**
 * @description Function to create Navigation component
 * @returns Navigation Component
 * @author @ranjithks-cdw
 */
const Navigation = () => {
    const links = HEADER.NAVLINKS.map((navigation, index) => <li key={index}><NavLink to={navigation.URL} className={({isActive}) => isActive ? styles.active : ''}>{navigation.NAME}</NavLink></li>)

    return (
        <nav>
            <ul className={styles.navMenu}>
                {links}
            </ul>
        </nav>
    );
};

export default Navigation;