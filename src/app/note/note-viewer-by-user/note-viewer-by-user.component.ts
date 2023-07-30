import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {getAllNotesForUser} from "../../state/Note/note.selectors";
import {Store} from "@ngrx/store";
import {EMPTY, Observable} from "rxjs";
import {Note} from "../../models/note.model";
import {User} from "../../models/User.model";

@Component({
  selector: 'app-note-viewer-by-user',
  templateUrl: './note-viewer-by-user.component.html',
  styleUrls: ['./note-viewer-by-user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteViewerByUserComponent implements OnChanges {
  @Input() selectedUser: string  = '';

  constructor(private store: Store) {
  }
  notesForUser$: Observable<{ notes: Note[]; user: User | undefined }> = EMPTY;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.selectedUser) {
      this.notesForUser$ = this.store.select(getAllNotesForUser(parseInt(this.selectedUser)));
    }
  }



}
