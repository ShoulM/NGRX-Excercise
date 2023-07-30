import {createFeatureSelector, createSelector} from "@ngrx/store";
import {NoteState} from "./note.reducer";
import {selectUserById} from "../user/user.selectors";

export const selectNoteState = createFeatureSelector<NoteState>('notes');

export const getAllNotes = createSelector(
  selectNoteState,
  ({notes}) => [...notes]
);

export const getAllNotesForUser = (userId: number) => createSelector(
  getAllNotes,
  selectUserById(userId),
  (notes, user) => ({user: user, notes: notes.filter(note => note.userId === userId)})
);
