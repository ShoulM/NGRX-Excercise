import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as UserActions from './user.actions';
import {catchError, concatMap, EMPTY, of, switchMap} from "rxjs";
import {User} from "../../models/User.model";
import * as _ from "lodash";


/* these effects sync between the Users in the NGRX store and session storage
  A simpler approach would be to use a meta reducer see:
  https://stackoverflow.com/questions/57490863/syncing-between-session-storage-and-ngrx-store-with-feature-modules
 */
@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.loadUsers),
    switchMap(() => {
      const usersFromStorage = sessionStorage.getItem('users');
      if (usersFromStorage) {
        const users: User[] = JSON.parse(usersFromStorage);
        return of(UserActions.loadUsersSuccess({users}));
      }
      return EMPTY;
    })
    )
  );


  addUser$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.addUser),
    concatMap(({user}) => {
      const usersFromStorage = sessionStorage.getItem('users') || '[]';
      const users: User[]  = JSON.parse(usersFromStorage);
      if (!_.find(users, {id: user.id})) {
        users.push(user);
        sessionStorage.setItem('users', JSON.stringify(users));
      }
      return EMPTY;
    })
  ), {dispatch: false});

  deleteUser$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.deleteUser),
    concatMap(({id}) => {
      const usersFromStorage = sessionStorage.getItem('users') || '[]';
      const users: User[]  = JSON.parse(usersFromStorage);
      _.remove(users, (user) => user.id === id);
      sessionStorage.setItem('users', JSON.stringify(users));
      return EMPTY;
    })
  ), {dispatch: false});

  updateUser$ = createEffect(()=> this.actions$.pipe(
    ofType(UserActions.updateUser),
    concatMap(({update}) => {
      const usersFromStorage = sessionStorage.getItem('users') || '[]';
      const users: User[]  = JSON.parse(usersFromStorage);
      const userToUpdate = _.find(users, {id: update.id});
      if (userToUpdate) {
        Object.assign(userToUpdate, update.changes);
        sessionStorage.setItem('users', JSON.stringify(users));
      }
      return EMPTY;
    })
  ), {dispatch: false});



  constructor(private actions$: Actions) {
  }


}
