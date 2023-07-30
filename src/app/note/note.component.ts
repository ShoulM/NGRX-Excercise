import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {selectAllUsers} from "../state/user/user.selectors";
import {Observable} from "rxjs";
import {User} from "../models/User.model";
import {addNoteAction} from "../state/Note/note.actions";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  users$: Observable<User[]>;
  selectedUserId: string ='';
  constructor(private store: Store) {
    this.users$ = store.select(selectAllUsers);
  }

  addMessage(id: string, note: string) {
    console.log(id);
    console.log(note);
    this.store.dispatch(addNoteAction({note: {userId: parseInt(id), note}}));

  }

  onUserSelectChange($event: Event) {

  }
}
