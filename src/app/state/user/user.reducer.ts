import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {User} from "../../models/User.model";
import {createReducer, on} from "@ngrx/store";
import * as UserActions from './user.actions';


export interface UserState extends EntityState<User> {
  //additional entities state properties
  selectedUserId: number | null
}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

const initialState: UserState = userAdapter.getInitialState(
  { selectedUserId: null}
);

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsersSuccess, (state, {users})=> userAdapter.setAll(users, state)),
  on(UserActions.addUser, (state, {user}) => userAdapter.addOne(user, state)),
  on(UserActions.updateUser, (state, {update}) => userAdapter.updateOne(update, state)),
  on(UserActions.deleteUser, (state, {id}) => userAdapter.removeOne(id, state)),
  on(UserActions.changeSelectedUserId, (state, {selectedUserId}) => ({...state, selectedUserId}))
);


