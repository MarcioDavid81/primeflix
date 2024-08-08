import axios from 'axios';

// Base da URL da API: https://api.themoviedb.org/3/
// https://api.themoviedb.org/3/movie/now_playing?api_key=f65b7d708d05182c37d8f3129ffb0475&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;