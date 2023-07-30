import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {User} from "../../../models/User.model";
import {selectAllUsers} from "../../../state/user/user.selectors";

@Component({
  selector: 'app-users-viewer',
  templateUrl: './users-viewer.component.html',
  styleUrls: ['./users-viewer.component.css']
})
export class UsersViewerComponent {
  public users$: Observable<User[]>;
  constructor(private  store: Store) {
    this.users$ = store.select(selectAllUsers);
  }

}
