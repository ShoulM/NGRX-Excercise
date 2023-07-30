import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {selectAdultUsers} from "../../../../state/user/user.selectors";
import {Observable} from "rxjs";
import {User} from "../../../../models/User.model";
import {UserState} from "../../../../state/user/user.reducer";

@Component({
  selector: 'app-adult-users-viewer',
  templateUrl: './adult-users-viewer.component.html',
  styleUrls: ['./adult-users-viewer.component.css']
})
export class AdultUsersViewerComponent {
  public adultUsers$: Observable<User[]>;

  constructor(private store : Store) {
    this.adultUsers$ = store.select(selectAdultUsers);
  }

}
