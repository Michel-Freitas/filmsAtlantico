import { AxiosError } from "axios";
import { filmsAtlanticoApi } from "../config/apiConfig"
import { IFilm } from "../schemas/FilmSchemas";

export function useFilmsService() {

    const getFilms = async () : Promise<IFilm[] | []> => {
        try {

            const { data } = await filmsAtlanticoApi.get("/api/films");

            return data.map((item: any) => {
                return {
                    coverPhoto: item.coverPhoto,
                    title: item.title,
                    releaseDate: item.releaseDate,
                    id: item.id,
                    favorite: false
                }
            });
        } catch (error) {
            return [];
        }
    }

    const getFilmsSearch = async (search: string): Promise<IFilm[] | []> => {
        try {
            if (search === "") throw Error();

            const { data } = await filmsAtlanticoApi.get(`api/films/search?name=${search}`);

            return data.map((item: any) => {
                return {
                    coverPhoto: item.coverPhoto,
                    title: item.title,
                    releaseDate: item.releaseDate,
                    id: item.id,
                    favorite: false
                }
            });

        } catch (error: any) {
            if (error instanceof AxiosError) {
                console.log(error.response?.data.message);
            }
            return [];
        } 
    }

    return {
        getFilms,
        getFilmsSearch
    }
}