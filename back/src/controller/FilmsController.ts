import { Request, Response } from "express";
import GeneralException from "../exception/GeneralException";
import httpErrorFactory from "../exception/helpers/httpErrorFactory";
import { ExceptionType } from "../schemas/ErrorSchemas";
import { filmsService } from "../service";

export default class FilmsController {

    async popularFilms(req: Request, res: Response) {
        try {
            const result = await filmsService.popularFilms();
            return res.status(200).json(result);
        } catch (error: any) {
            return res
                .status(error?.type || 500)
                .json(httpErrorFactory(error?.type || 500, error?.message));
        }
    }

    async searchFilms(req: Request, res: Response) {
        try {
            const { name } = req.query;
            if (name == "") {
                throw new GeneralException(
                    ExceptionType.BAD_REQUEST,
                    "O atributo 'name' não pode ser vazio!"
                );
            }
            if (typeof name != "string") {
                throw new GeneralException(
                    ExceptionType.BAD_REQUEST,
                    "O atributo 'name' deve ser um texto!"
                );
            }
            const result = await filmsService.searchFilms(name);
            return res
                .status(200)
                .json(result);
        } catch (error: any) {
            return res
                .status(error?.type || 500)
                .json(httpErrorFactory(error?.type || 500, error?.message));
        }
    }
}