import {createReducer, on} from "@ngrx/store";
import {addNoteAction} from "./note.actions";
import {Note} from "../../models/note.model";

export interface NoteState {
  notes: Note[]
}
const initialState: NoteState = {notes: []};
export const noteReducer = createReducer(
  initialState,
  on(addNoteAction, (state, {note}) => ({notes: state.notes.concat([note])}))
)
