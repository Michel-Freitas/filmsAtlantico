import { tmdbApi } from "../config/apiConfig";
import { IFilm } from "../schemas/FilmSchemas";

export default class FilmsService {

    async popularFilms() {
        try {
            const page = this.randomNumberBetween(1, 1000);
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

    /**
     * Function for the purpose of returning a random number between two values.
     * Min and max values are also included.
     * @param min 
     * @param max 
     * @returns generated random value
     */
    private randomNumberBetween(min: number, max: number) : number {
        return Math.floor(max * Math.random() + min);
    }
}