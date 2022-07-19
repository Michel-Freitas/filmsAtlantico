import express from "express";
import { filmsController } from "./controller";

const router = express.Router();

router.get("/api/films", filmsController.getFilms);

export default router;