import {ActionReducer} from "@ngrx/store";
import {addNoteAction} from "./Note/note.actions";
import {State} from "./state";

// example of a meta reducer. We can also use this in order to sync state with session storage
// instead of my effects implementation
// This meta reducer simply logs to console all the actions
export function syncNotesWithSessionStorage(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state: State, action) {
    const newState = reducer(state, action);
    if (action.type === addNoteAction.type) {
      sessionStorage.setItem('notes',JSON.stringify(newState.notes.notes));
    }
    return newState;
  }
}
