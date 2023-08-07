import {memo, useContext, useEffect} from 'react'
import { LOGIN_LINK, NOW_SHOWING, TRAILERS } from '../../constants/pageConstants';
import styles from './NowShowing.module.scss';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../App';
/**
 * @description Method to construct Now Showing page component
 * @returns Now Showing Component
 */
const NowShowing = () => {
    const navigate = useNavigate();
    const {userDetails} = useContext(userContext);

    useEffect(() => {
        !userDetails.isLoggedIn && navigate(LOGIN_LINK);
    },[userDetails]);
    return (
        <div className={styles.nowShowingContainer}>
            <div className={styles.nowShowingContent}>
                <p className={styles.sectionTitle}>{NOW_SHOWING.TITLE}</p>
                <p className={styles.movieTitle}>{TRAILERS.MOVIE_TITLE}</p>
                <iframe src={NOW_SHOWING.URL} className={styles.movie} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                <p className={styles.description}>{TRAILERS.MOVIE_DESCRIPTION}</p>
            </div>
        </div>
    )
};

export default memo(NowShowing);