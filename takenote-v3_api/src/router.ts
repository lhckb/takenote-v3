import { Router, Request, Response } from "express";
import NotesController from "./controllers/notes-controller";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  return res.status(200).send("hello world!!");
});

router.get("/notes", (req: Request, res: Response) => {
  return NotesController.notesIndex(req, res);
});

router.get("/notes/:id", (req: Request, res: Response) => {
  return NotesController.getNoteById(req, res, parseInt(req.params.id));
});

router.delete("/notes/:id", (req: Request, res: Response) => {
  return NotesController.deleteById(req, res, parseInt(req.params.id));
});

// router.post("/notes/:id")

export default router;