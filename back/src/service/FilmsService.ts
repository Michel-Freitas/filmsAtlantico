import { tmdbApi } from "../config/apiConfig";
import GeneralException from "../exception/GeneralException";
import { ExceptionType } from "../schemas/ErrorSchemas";
import { IFilm } from "../schemas/FilmSchemas";
import { randomNumberBetween } from "../utils/generalFunctions";

export default class FilmsService {

    async popularFilms() {
        try {
            const page = randomNumberBetween(1, 400);
            const { data } = await tmdbApi.get(`3/movie/popular?page=${page}`);
            const filmsList: IFilm[] = data.results.map((item: any) => {
                return {
                    coverPhoto: item.poster_path,
                    title: item.title,
                    releaseDate: item.release_date,
                    id: item.id
                }
            });
            return filmsList;
        } catch (error: any) {
            throw error;
        }
    }

    async searchFilms(name: string) {
        try {
            const { data } = await tmdbApi.get(`3/search/movie?query=${name}`);
            if (data.results.length == 0) {
                throw new GeneralException(
                    ExceptionType.NOT_FOUND,
                    "Filme não encontrado!"
                );
            }
            if (data.results.length > 12) {
                throw new GeneralException(
                    ExceptionType.URI_TOO_LONG,
                    "Lista de resultados muito grande. Por favor informe mais dados."
                );
            }
            const filmsList: IFilm[] = data.results.map((item: any) => {
                return {
                    coverPhoto: item.poster_path,
                    title: item.title,
                    releaseDate: item.release_date,
                    id: item.id
                }
            });
            return filmsList;
        } catch (error: any) {
            throw error;
        }
    }
}