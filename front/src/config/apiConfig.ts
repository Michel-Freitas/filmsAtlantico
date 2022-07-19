import axios from "axios";

const { VITE_FILMS_ATLANTICO_API_URL } = import.meta.env;

const filmsAtlanticoApi = axios.create({
    baseURL: VITE_FILMS_ATLANTICO_API_URL
});

export {
    filmsAtlanticoApi
}