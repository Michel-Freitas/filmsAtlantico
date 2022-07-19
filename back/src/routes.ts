import express from "express";
import { filmsController } from "./controller";

const router = express.Router();

router.get("/api/films", filmsController.popularFilms);
router.get("/api/films/search", filmsController.searchFilms);

export default router;