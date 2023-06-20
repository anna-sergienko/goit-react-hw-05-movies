import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '51c5bf19a6b7aaf714af8f1ea69e271a';

export const getTrendingMovies = async () => {
const getData = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
return getData;
}


export const searchMovie = async submit => {
const getData = await axios.get(`search/movie?api_key=${API_KEY}&query=${submit}`);
return getData;
}

export const getMovieById = async id =>{
const getData = await axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`);
return getData;
}

export const getMovieCast = async id => {
    const getData = await axios.get(`movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
    return getData;
};

export const getMovieReview = async id => {
    const getData = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}&language=en-US`);
    return getData;
};
