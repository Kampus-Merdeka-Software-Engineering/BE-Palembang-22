import { Router } from "express"; 
import { getNotes, postNotes } from "../controllers/notes.js";


const notesRouter = Router();

notesRouter.get('/', getNotes);

notesRouter.post('/', postNotes);

export default notesRouter;