import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const getMovies = (movies) => {
    return (
        movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
    );
}
const MovieList = (props) => (
    <div>
        {getMovies(props.movies)}
    </div>
);
MovieList.propTypes = {
    movies: PropTypes.array
};

export default MovieList;