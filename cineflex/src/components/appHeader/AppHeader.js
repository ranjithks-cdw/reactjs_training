import { useContext, useEffect, useState } from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';
import Image from '../image/Image';
import Navigation from '../navigation/Navigation';
import styles from './AppHeader.module.scss';
import { HI, IMAGE_URLS, LOGIN_LINK, LOG_STATUS } from '../../constants/pageConstants';
import { userContext } from '../../App';

/**
 * @description Method to return Header component
 * @returns AppHeader component
 */
const AppHeader = () => {
    const location = useLocation();
    const [isLoginPage, setIsLoginPage] = useState(false);
    const {userDetails, setUserDetails} = useContext(userContext);
    
    useEffect(() => {
        if(location.pathname === LOGIN_LINK) {
            setIsLoginPage(true);
            setUserDetails({isLoggedIn: false, name: ''});
            localStorage.setItem('user', JSON.stringify({
                isLoggedIn: false,
                name: ''
              }));
        }
        else {
            setIsLoginPage(false);
        }

    },[location]);
    return (
        <header className={styles.appHeader}>
            <Link to='/'>
                <Image src={IMAGE_URLS.LOGO} alt="logo" className="logo"/>
            </Link>
            {!isLoginPage && 
                <>
                    <Navigation />
                    <div className={styles.profileContainer}>
                        {!userDetails.isLoggedIn ? 
                            <NavLink className={styles.logStatus} to='/login'>{LOG_STATUS.LOGGED_OUT}</NavLink>
                            :
                            <>
                                <p className={styles.profile}>{HI} {userDetails.name}</p>
                                <div className={styles.separator}></div>
                                <NavLink className={styles.logStatus} to='/login'>{LOG_STATUS.LOGGED_IN}</NavLink>
                            </>
                        }
                    </div> 
                </>
            }
        </header>
    );
};

export default AppHeader;