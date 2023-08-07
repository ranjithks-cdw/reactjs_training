import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {AiFillPlayCircle} from 'react-icons/ai';
import { TEASER_AD_SETTINGS, IMAGE_URLS } from '../../constants/pageConstants';
import WithAdvertisement from '../hoc/WithAdvertisement';
import Image from '../image/Image';
import styles from './TeaserCards.module.scss';
import { minuteConverter } from '../../utils/minuteConverter';

/**
 * @description Method to construct Teaser Cards component
 * @returns Teaser cards component
 */
const TeaserCards = props => {
    const {movie, poster, showAd, timer, message, displayContent, showNotification, displayAd, stopAd, adAlreadyDisplayed} = props;
    const videoRef = useRef();
    const iconRef = useRef();

    // Method to change video state
    const toggleVideoState = () => {
        if(videoRef?.current) {
            videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
        }
    }

    // Method to handle when video plays
    const videoPlayHandler = () => {
        iconRef.current.style.display = 'none';
        if(!adAlreadyDisplayed && videoRef?.current.currentTime < TEASER_AD_SETTINGS.TIME_BEFORE_AD) {
            displayContent(TEASER_AD_SETTINGS.TIME_BEFORE_AD, Math.ceil(videoRef?.current.currentTime), TEASER_AD_SETTINGS.ADVERTISEMENT_MESSAGE);
        }
    };

    // Method to handle when video paused
    const videoPauseHandler = () => {
        if(!showAd)
            iconRef.current.style.display = '';
    };

    useEffect(() => {
        let interval;
        // Display content remaining time notification
        if(timer >= 0 && videoRef?.current.currentTime < TEASER_AD_SETTINGS.TIME_BEFORE_AD && message === TEASER_AD_SETTINGS.ADVERTISEMENT_MESSAGE) {
            interval = setInterval(() => {
                displayContent(TEASER_AD_SETTINGS.TIME_BEFORE_AD, Math.ceil(videoRef.current.currentTime), TEASER_AD_SETTINGS.ADVERTISEMENT_MESSAGE);
            }, 1000);
        }
        // Display ad
        else if(timer <= 0 && message === TEASER_AD_SETTINGS.ADVERTISEMENT_MESSAGE) {
            videoRef.current.pause();
            videoRef.current.style.display = 'none';
            iconRef.current.style.display = 'none';
            displayAd(TEASER_AD_SETTINGS.TIME_AFTER_AD, TEASER_AD_SETTINGS.CONTENT_MESSAGE);
        }
        // Display ad remaining time notification
        else if(timer >= 0 && message === TEASER_AD_SETTINGS.CONTENT_MESSAGE) {
            interval = setInterval(() => {
                displayAd(timer - 1, TEASER_AD_SETTINGS.CONTENT_MESSAGE);
            }, 1000);
        }
        // Stop ad
        else if (timer < 0 && message === TEASER_AD_SETTINGS.CONTENT_MESSAGE) {
            videoRef.current.style.display = '';
            videoRef.current.play();
            stopAd();
        }

        return () => {
            clearInterval(interval);
        }
    }, [timer]);
    
    return (
        <div className={styles.wrapper}>
                <div className={styles.videoContainer} onClick={toggleVideoState}>
                    {showAd && <Image className="teaserAd" src={IMAGE_URLS.SMALL_AD} alt="ad" /> }
                    <video className={styles.video} src={movie.videoSrc} poster={poster}
                     ref={videoRef} onPlay={videoPlayHandler} onPause={videoPauseHandler}
                    />
                    <div ref={iconRef}>
                        <AiFillPlayCircle className={styles.playIcon}/>
                    </div>
                </div>
            <h6>{movie.title}</h6>
            <div className={styles.notificationContainer}>
                {showNotification && <p>{message} {minuteConverter(timer)}</p>}
            </div>
        </div>
    );
};

TeaserCards.propTypes = {
    movie: PropTypes.object,
    poster: PropTypes.string,
    timer: PropTypes.number, 
    message: PropTypes.string,
    showAd: PropTypes.bool,
    adAlreadyDisplayed: PropTypes.bool,
    showNotification: PropTypes.bool,
    displayContent: PropTypes.func,
    displayAd: PropTypes.func,
    stopAd: PropTypes.func
};

TeaserCards.defaultProps = {
    movie: {},
    poster: '',
    timer: 0,
    message: '',
    showAd: false,
    showNotification: false,
    adAlreadyDisplayed: true,
    displayContent: () => {},
    stopAd: () => {}
};

export default WithAdvertisement(TeaserCards);