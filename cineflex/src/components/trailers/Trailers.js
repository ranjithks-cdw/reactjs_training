import {NavLink, useNavigate} from 'react-router-dom';
import styles from './Trailers.module.scss';
import Image from '../image/Image';
import Button from '../button/Button';
import { BUTTON, IMAGE_URLS, LOGIN_LINK, NAVIGATION_LINKS, TRAILERS } from '../../constants/pageConstants';
import { useContext } from 'react';
import { userContext } from '../../App';

/**
 * @description Method to construct Trailers component
 * @returns Trailers component
 */
const Trailers = () => {
    const navigate = useNavigate();
    const {userDetails} = useContext(userContext);
    
    // Method to redirect user to different page based on login status
    const navigator = () => {
        userDetails.isLoggedIn ? navigate(NAVIGATION_LINKS[2].URL) : navigate(LOGIN_LINK);
    };
    return (
        <div className={styles.trailersContainer}>
            <header className={styles.trailersHeader}>
                <h5>{TRAILERS.TITLE}</h5>
                {!userDetails.isLoggedIn && <p>{TRAILERS.MESSAGE} <span><NavLink to='/login'>{TRAILERS.SIGN_IN}</NavLink></span></p> }
            </header>
            <div className={styles.contentContainer}>
                <Image src={IMAGE_URLS.SINDEL} alt={TRAILERS.IMAGE} className="trailerImage" />
                <div className={styles.content}>
                    <h5>{TRAILERS.MOVIE_TITLE}</h5>
                    <p>{TRAILERS.MOVIE_DESCRIPTION}</p>
                    <Button className="watchBtn" btnClickHandler={navigator}>{BUTTON.WATCH}</Button>
                </div>
            </div>
        </div>
    );
};

export default Trailers;