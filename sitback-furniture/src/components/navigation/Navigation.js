import { Link } from "react-router-dom";
import { HEADER } from "../../constants/pageConstants";
import styles from './Navigation.module.scss';
const Navigation = () => {
    const links = HEADER.NAVLINKS.map((navigation, index) => <li key={index}><Link to={navigation.URL} >{navigation.NAME}</Link></li>)

    return (
        <nav>
            <ul className={styles.navMenu}>
                {links}
            </ul>
        </nav>
    );
};

export default Navigation;