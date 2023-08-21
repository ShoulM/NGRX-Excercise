import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {selectAllUsers} from "../state/user/user.selectors";
import {Observable} from "rxjs";
import {User} from "../models/User.model";
import {addNoteAction, loadNotesAction} from "../state/Note/note.actions";
import { changeSelectedUserId } from "../state/user/user.actions";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  users$: Observable<User[]>;
  selectedUserId: string ='';
  noteText: string = '';
  constructor(private store: Store) {
    this.store.dispatch(loadNotesAction());
    this.users$ = store.select(selectAllUsers);
  }

  addMessage(id: string, note: string) {
    console.log(id);
    console.log(note);
    this.store.dispatch(addNoteAction({note: {userId: parseInt(id), note}}));

  }

  onUserSelectChange(selectedUserId: string) {
    //reset note when user changes
    this.store.dispatch(changeSelectedUserId( {selectedUserId: parseInt(selectedUserId)} ));
    this.noteText = '';
  }
}
