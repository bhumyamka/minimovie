import movies from './data.json';

class MoviesData {
    static getMovies() {
        return movies ? movies : [];
    }
}

export default MoviesData;