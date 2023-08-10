import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { NAVIGATION_LINKS } from "../../constants/pageConstants";
import styles from './Navigation.module.scss';
import { userContext } from "../../App";

/**
 * @description Method to construct Navigation component
 * @returns Navigation component
 */
const Navigation = () => {
    const {userDetails} = useContext(userContext);
    const navLinks = NAVIGATION_LINKS.map((link, index) => {
        if(!userDetails.isLoggedIn && index === 2)
            return;
        return (
            <li key={index}>
                <NavLink to={link.URL} className={({isActive}) => isActive ? styles.active : ''}>{link.NAME}</NavLink>
            </li>
        )
    });
    return (
        <nav>
            <ul className={styles.navMenu}>
                {navLinks}
            </ul>
        </nav>
    );
};

export default Navigation;