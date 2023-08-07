import {memo, useContext, useEffect, useState} from 'react'
import {FadeLoader} from 'react-spinners';
import MoviesList from '../../containers/moviesList/MoviesList';
import MovieDetails from '../../components/movieDetails/MovieDetails';
import { getMovies } from '../../services/MoviesService';
import styles from './AllMovies.module.scss';
import { updateMovie } from '../../utils/updateMovie';
import { movieContext } from '../../App';

/**
 * @description Method to construct All Movies component
 * @returns AllMovies page
 */
const AllMovies = () => {
    const [movies,setMovies] = useState([]);
    const {currentMovie, setCurrentMovie} = useContext(movieContext);
    const [load, setLoad] = useState(true);
    
    useEffect(() => {
        const loadTimer = setTimeout(() => {
            setLoad(false);
        }, 2000);
        const getMoviesList = async () => {
            const movies = await getMovies();
            setMovies(movies);
            movies.length > 0 && setCurrentMovie(movies[0]);
        }
        getMoviesList();
        return () => {
            clearTimeout(loadTimer);
        }
    },[]);

    useEffect(() => {
        const updatedMovies = updateMovie(movies, currentMovie);
        updatedMovies.length > 0 && setMovies(updatedMovies);
    },[currentMovie]);
    
    return (
        <div className={styles.moviesPage}>
            {!load ?
                <div className={styles.movieContainer}>
                    <MoviesList movies={movies} />
                </div>
                    :
                <div className={styles.loader}>
                    <FadeLoader color='#4b90e2'/>
                </div>
            }
            {!load && 
                <div className={styles.movieDetails}>
                        <MovieDetails />
                    </div>
            }
        </div>
    );
};

export default memo(AllMovies);