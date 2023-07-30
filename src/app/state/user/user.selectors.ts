import {userAdapter, UserState} from "./user.reducer";
import {createFeatureSelector, createSelector} from "@ngrx/store";


export const selectUserState = createFeatureSelector<UserState>('users');
const {
  selectAll
} = userAdapter.getSelectors(selectUserState);

export const selectAllUsers = selectAll;
export const selectAdultUsers = createSelector(
  selectAll,
  users => users.filter(user => user.age  >= 18)
);

