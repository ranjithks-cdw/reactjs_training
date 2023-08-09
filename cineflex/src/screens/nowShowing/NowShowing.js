import {memo} from 'react'
import { NOW_SHOWING, TRAILERS } from '../../constants/pageConstants';
import styles from './NowShowing.module.scss';
/**
 * @description Method to construct Now Showing page component
 * @returns Now Showing Component
 */
const NowShowing = () => {

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