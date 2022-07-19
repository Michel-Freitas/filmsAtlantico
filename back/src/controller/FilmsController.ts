import { Request, Response } from "express";
import httpErrorFactory from "../exception/helpers/httpErrorFactory";
import { filmsService } from "../service";

export default class FilmsController {

    async getFilms(req: Request, res: Response) {
        try {
            const result = await filmsService.getFilms();
            return res.status(200).json(result);
        } catch (error: any) {
            return res
                .status(error?.type || 500)
                .json(httpErrorFactory(error?.type || 500, error?.message));
        }
    }
}