import {createReducer, on} from "@ngrx/store";
import {addNoteAction, loadNotesSuccess} from "./note.actions";
import {Note} from "../../models/note.model";
import {state} from "@angular/animations";

export interface NoteState {
  notes: Note[]
}
const initialState: NoteState = {notes: []};
export const noteReducer = createReducer(
  initialState,
  on(loadNotesSuccess, (state, {notes})=> ({notes})),
  on(addNoteAction, (state, {note}) => ({notes: state.notes.concat([note])}))
)
