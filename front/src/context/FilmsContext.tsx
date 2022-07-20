import { createContext, ReactNode, useState } from "react";
import { IFilm } from "../schemas/FilmSchemas";

type FilmsContext = {
    films: IFilm[];
    setFilms: React.Dispatch<React.SetStateAction<IFilm[]>>
}

export const FilmsContext = createContext({} as FilmsContext);

type FilmsProvider = {
    children: ReactNode
}

export const FilmsProvider: React.FC<FilmsProvider> = (props) => {
    const [films, setFilms] = useState<IFilm[]>([]);

    return (
        <FilmsContext.Provider
            value={{
                films,
                setFilms
            }}
        >
            {props.children}
        </FilmsContext.Provider>
    )
}