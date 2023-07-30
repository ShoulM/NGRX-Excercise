import {ActionReducer} from "@ngrx/store";

// example of a meta reducer. We can also use this in order to sync state with session storage
// instead of my effects implementation
// This meta reducer simply logs to console all the actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  }
}
