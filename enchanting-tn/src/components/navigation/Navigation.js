import {Link} from 'react-router-dom';
import style from './Navigation.module.scss';
import {NAVIGATION} from '../../constants/pageConstants';
/**
 * @description Function to construct navigation component
 * @returns Navigation Component
 * @author @ranjithks-cdw
 */
const Navigation = () => {
    const links = NAVIGATION.map((navigation, key) => <li key={key}><Link to={navigation.URL} >{navigation.NAME}</Link></li>)
    return (
        <nav>
            <ul className={style.navigationMenu}>
                {links}
            </ul>
        </nav>
    );
};

export default Navigation;