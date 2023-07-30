import {createAction, props} from "@ngrx/store";
import {User} from "../../models/User.model";
import {Update} from "@ngrx/entity";

export const loadUsers = createAction('[User/API] Load Users');
export const loadUsersSuccess = createAction('[User/API] Load Users Success', props<{ users: User[] }>());
export const addUser = createAction('[User/API] Add User', props<{ user: User }>());
export const updateUser = createAction('[User/API] Update User', props<{ update: Update<User> }>());
export const deleteUser = createAction('[User/API] Delete User', props<{ id: number }>());
