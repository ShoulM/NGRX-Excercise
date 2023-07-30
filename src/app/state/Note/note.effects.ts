import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {loadNotesAction, loadNotesSuccess} from "./note.actions";
import {EMPTY, of, switchMap} from "rxjs";
import {Note} from "../../models/note.model";

@Injectable()
export class NoteEffects {
    constructor(private actions$: Actions) {
    }

    loadNotes$ = createEffect(() => this.actions$.pipe(
        ofType(loadNotesAction),
        switchMap(() => {
            const notesFromStorage = sessionStorage.getItem('notes');
            if (notesFromStorage) {
                const notes: Note[] = JSON.parse(notesFromStorage);
                return of(loadNotesSuccess({notes}));
            }
            return EMPTY;
        })
    ))
}
