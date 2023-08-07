import axios from 'axios';
import { API_URLS } from '../constants/pageConstants';

/**
 * Method to return movies data from api
 * @returns movies Data
 */
export const getMovies = async () => {
    const movies = await axios.get(API_URLS.MOVIES);
    return movies.data;
};

/**
 * Method to return teasers data from api
 * @returns teasers data
 */
export const getShortTeasers = async () => {
    const teasers = await axios.get(API_URLS.TEASERS);
    return teasers.data;
};