export const updateMovie = (moviesList, currentMovie) => {
    const updatedMovies = moviesList.map(movie => {
        if(movie.id === currentMovie.id)
            return {...movie, likes: currentMovie.likes};
        return {...movie};
    });
    return updatedMovies;
}