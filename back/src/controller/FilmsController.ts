import { Request, Response } from "express";
import { filmsService } from "../service";

export default class FilmsController {

    async getFilms(req: Request, res: Response) {
        const result = await filmsService.getFilms();
        return res.status(200).json(result);
    }
}