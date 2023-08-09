import { useContext, useEffect, useState } from 'react';
import {FaThumbsUp} from 'react-icons/fa6';
import PropTypes from 'prop-types';
import Image from '../image/Image';
import styles from './MoviesCard.module.scss';
import { ALL_MOVIES } from '../../constants/pageConstants';
import { movieContext } from '../../App';

/**
 * @description Method to construct Movies Card components
 * @returns MoviesCard component
 */
const MoviesCard = props => {
    const {movie, updateLike} = props;
    const {setCurrentMovie} = useContext(movieContext);
    const [movieLike, setMovieLike] = useState(movie.likes);
    const movieHandler = () => {
        setCurrentMovie(movie);
    };
    const likeHandler = (event) => {
        event.stopPropagation();
        setMovieLike(parseInt(movieLike) + 1);
        updateLike(movie);
    };

    useEffect(() => {
        setMovieLike(movie.likes);
    },[movie.likes]);
    
    return (
        <div className={styles.movieCard} onClick={movieHandler}>
            <Image src={movie.link} alt={movie.movie} className='movieCardImage' />
            <p className={styles.movieTitle}>{movie.movie}</p>
            <div className={styles.likesContainer}>
                <p>{movieLike} {ALL_MOVIES.LIKES}</p>
                <FaThumbsUp className={styles.likesIcon} onClick={likeHandler}/>
            </div>
        </div>
    );
};

MoviesCard.propTypes = {
    movie: PropTypes.object.isRequired,
    updateLike: PropTypes.func,
};

MoviesCard.defaultProps = {
    likes: 0,
    updateLike: () => {},
};

export default MoviesCard;