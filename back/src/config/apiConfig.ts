import axios from "axios";

const { TMDB_API_URL, TMDB_API_KEY} = process.env;

const tmdbApi = axios.create({
    baseURL: TMDB_API_URL
});

tmdbApi.interceptors.request.use(async (req) => {
    if (req.url.includes("?")) {
        req.url += `&api_key=${TMDB_API_KEY}`;
    } else {
        req.url += `?api_key=${TMDB_API_KEY}`;
    }
    return req;
});

export {
    tmdbApi
}