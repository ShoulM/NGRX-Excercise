import { Component } from '@angular/core';
import {User} from "../../models/User.model";
import {Store} from "@ngrx/store";
import * as UserActions from '../../state/user/user.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private store: Store) {
    store.dispatch(UserActions.loadUsers());
  }

  addUser(userDetails: { firstName: string; lastName: string; id: string; age: string }) {
    const user: User = {...userDetails, id: Number.parseInt(userDetails.id), age: Number.parseInt(userDetails.age)};
    this.store.dispatch(UserActions.addUser({user}));
  }

  deleteUser(id: string) {
    this.store.dispatch(UserActions.deleteUser({id: Number.parseInt(id)}));

  }

  updateUser(userDetails: {firstName: string; lastName: string; id: string; age: string}) {
    const update = {id: Number.parseInt(userDetails.id), changes: {
      firstName: userDetails.firstName, lastName: userDetails.lastName, age: Number.parseInt(userDetails.age)
      }};
    this.store.dispatch(UserActions.updateUser({update}));

  }
}
