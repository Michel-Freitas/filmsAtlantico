import express from "express";
import { filmsController } from "./controller";

const router = express.Router();

router.get("/api/films", filmsController.popularFilms);

export default router;