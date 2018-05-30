import React from 'react';
import MovieList from './MovieList';
import MovieData from '../../Data/MoviesData';

class Movies extends React.Component {
    constructor () {
        super();

        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        this.setState(() => ({movies: MovieData.getMovies() }))
    }

    render() {
        return(
            <main class="mdl-layout__content">
                <div class="page-content">
                    <MovieList movies={this.state.movies} />
                </div>
            </main>
        );
    }
}

export default Movies;


