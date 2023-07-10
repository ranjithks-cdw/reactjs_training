import {Link} from 'react-router-dom';
import style from './Navigation.module.scss';
const Navigation = () => {
    return (
        <nav>
            <ul className={style.navigationMenu}>
                <li><Link to="/hotels" >Hotels</Link></li>
                <li><Link to="/bike-rentals">Bike Rentals</Link></li>
                <li><Link to="/restaurants">Restaurants</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;