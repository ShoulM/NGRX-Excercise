import {createAction, props} from "@ngrx/store";
import {Note} from "../../models/note.model";


export const loadNotesAction = createAction('[Note/API] load notes');
export const loadNotesSuccess = createAction('[Note/API] load notes success', props<{notes: Note[]}>())
export const addNoteAction = createAction('[Note/API] add note', props<{note: Note}>());
