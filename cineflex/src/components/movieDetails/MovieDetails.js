import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {FaThumbsUp} from 'react-icons/fa6';
import Image from '../image/Image';
import { DETAILS_AD_SETTINGS, ALL_MOVIES, IMAGE_URLS } from '../../constants/pageConstants';
import WithAdvertisement from '../hoc/WithAdvertisement';
import { movieContext } from '../../App';
import { minuteConverter } from '../../utils/minuteConverter';
import styles from './MovieDetails.module.scss';

/**
 * @description Method to construct Movie Details component
 * @returns Movie Details component
 */
const MovieDetails = props => {
    const {timer, message, showAd, showNotification, displayContent, displayAd, stopAd} = props;
    const {currentMovie, setCurrentMovie} = useContext(movieContext);
    const [movie, setMovie] = useState({});
    
    const updateLike = () => {
        setCurrentMovie({...currentMovie, likes: parseInt(currentMovie.likes) + 1});
    };

    useEffect(() => {
        let interval;
        
        // Change movie state and start ad timer
        if(currentMovie.id !== movie.id) {
            setMovie(currentMovie);
            displayContent(DETAILS_AD_SETTINGS.TIME_BEFORE_AD, 0, DETAILS_AD_SETTINGS.ADVERTISEMENT_MESSAGE);
        }
        // Display content remaining time notification
        if(timer >= 0 && message === DETAILS_AD_SETTINGS.ADVERTISEMENT_MESSAGE) {
            interval = setInterval(() => {
                displayContent(timer, 1, DETAILS_AD_SETTINGS.ADVERTISEMENT_MESSAGE);
            },1000);
        }
        // Display ad
        else if(timer <= 0 && message === DETAILS_AD_SETTINGS.ADVERTISEMENT_MESSAGE) {
            displayAd(DETAILS_AD_SETTINGS.TIME_AFTER_AD, DETAILS_AD_SETTINGS.CONTENT_MESSAGE);
        }
        // Display ad remaining time notification
        else if(timer >= 0 && message === DETAILS_AD_SETTINGS.CONTENT_MESSAGE) {
            interval = setInterval(() => {
                displayAd(timer - 1 , DETAILS_AD_SETTINGS.CONTENT_MESSAGE);
            },1000);
        }
        // Stop ad
        else if(timer <= 0 && message === DETAILS_AD_SETTINGS.CONTENT_MESSAGE) {
            stopAd();
        }

        return () => {
            clearInterval(interval);
        }
    },[currentMovie?.id,currentMovie?.likes, timer]);
    
    const actorsList = currentMovie?.actors?.map((actor, index) => <li key={index}>{actor}</li>)
    return (
        <div className={styles.movieDetailsContainer}>
            {showAd ?
                <Image className='movieAd' src={IMAGE_URLS.LARGE_AD} alt='ad' />
                :
                <>
                    <header className={styles.detailsHeader}>
                        <h5 className={styles.movieTitle}>{currentMovie?.movie}</h5>
                        <div className={styles.iconWrapper} onClick={updateLike}>
                            <FaThumbsUp className={styles.likeIcon} />
                        </div>
                    </header>
                        <p className={styles.likes}>{currentMovie?.likes} {ALL_MOVIES.LIKES}</p>
                    <main className={styles.movieDetails}>
                        <Image className="detailsImage" src={currentMovie?.link} alt={currentMovie?.movie} />
                        <p className={styles.description}>{currentMovie?.description}</p>
                        <p className={styles.actorTitle}>{ALL_MOVIES.ACTORS}</p>
                        <ul className={styles.actorsList}>{actorsList}</ul>
                    </main>
                </>
            }
            <div className={styles.notificationContainer}>
                {showNotification && <p>{message} {minuteConverter(timer)}</p>}
            </div>
        </div>
    );
};

MovieDetails.propTypes = {
    timer: PropTypes.number, 
    message: PropTypes.string,
    showAd: PropTypes.bool,
    showNotification: PropTypes.bool,
    displayContent: PropTypes.func,
    displayAd: PropTypes.func,
    stopAd: PropTypes.func
};

MovieDetails.defaultProps = {
    timer: 0,
    message: '',
    showAd: false,
    showNotification: false,
    displayContent: () => {},
    stopAd: () => {}
};

export default WithAdvertisement(MovieDetails);