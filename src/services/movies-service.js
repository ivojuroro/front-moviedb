import axios from 'axios';

const API_KEY = "50540d01d6d219323e9bdf30c65a77ce";


axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingWeek = () => {
    return (
        axios.get('trending/movie/week?api_key=' + API_KEY) //todo: Check api_key header strategy to avoid CORS
            .then(res => {
                return res.data.results;
            })
            .catch(error => {
                return error;
            })
    );
};

export const fetchDiscoveredMovies = () => {
    return (
        axios.get('discover/movie?api_key=' + API_KEY).then(res => {
                return res;
            })
            .catch(error => {
                return error;
            })
    );
};

export const fetchMovieDetails = (movieId) => {
    return (
        axios.get('/movie/' + movieId + '?api_key=' + API_KEY)
            .then(res => {
                return res.data
            })
            .catch(error => {
                return error;
            })
    );
};
