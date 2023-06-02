import { Request, Response } from "express";
import { data } from "../prov_data/data";

export default class NotesController {
  public static notesIndex(req: Request, res: Response) {
    return res.status(200).json(data.notes);
  }

  public static getNoteById(req: Request, res: Response, id: number) {
    let resObject: any;
    for (let note in data.notes) {
      if (data.notes[note].id == id) {
        resObject = data.notes[note];
      }
    }
    return res.status(200).json(resObject);
  }

  public static deleteById(req: Request, res: Response, id: number) {
    for (let note in data.notes) {
      if (data.notes[note].id == id) {
        data.notes.splice(parseInt(note), 1);
        return res.status(200).json({
          message: "Successfully deleted"
        })
      }
    }
    return res.status(422).json({
      message: "Could not delete"
    })
  }
}