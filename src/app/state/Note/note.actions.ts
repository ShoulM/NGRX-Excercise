import {createAction, props} from "@ngrx/store";
import {Note} from "../../models/note.model";


export const addNoteAction = createAction('[Note/API] add note', props<{note: Note}>());
