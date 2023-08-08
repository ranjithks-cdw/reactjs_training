import { useContext, useState } from 'react';
import { ALL_MOVIES, BUTTON } from '../../constants/pageConstants';
import MoviesCard from '../../components/moviesCard/MoviesCard';
import Button from '../../components/button/Button';
import styles from './MoviesList.module.scss';
import { likeContext, movieContext } from '../../App';

/**
 * @description Method to construct Movies List container
 * @returns MovieList Component
 */
const MoviesList = props => {
    const initMoviesCount = 6;
    const {movies} = props;
    const [moviesCount, setMoviesCount] = useState(initMoviesCount);
    const {setLikeChanged} = useContext(likeContext);
    const {currentMovie, setCurrentMovie} = useContext(movieContext);
    const likeChanger = movie => {
        const movieToUpdate = movie;
        movieToUpdate.likes = parseInt(movie.likes) + 1;
        currentMovie.id === movie.id && setCurrentMovie(movieToUpdate);
        setLikeChanged(true);
    };

    const moviesList = movies?.map((movie, index) => {
        if(index < moviesCount) {
            return <MoviesCard movie={movie} key={movie.id} updateLike={likeChanger} likes={movie.likes}/>;
        }
    });
    const loadMovies = () => {
        const tempCount = moviesCount + 6;
        setMoviesCount(tempCount >= movies.length ? movies.length : tempCount);
    };
    return (
        <div className={styles.moviesContainer}>
            <h5 className={styles.sectionTitle}>{ALL_MOVIES.TITLE}</h5>
            <div className={styles.movieContainer}>
                {moviesList}
            </div>
            {moviesCount !== movies.length && <Button className="loadMore" btnClickHandler={loadMovies}>{BUTTON.LOAD_MORE}</Button>}
        </div>
    );
};

export default MoviesList;