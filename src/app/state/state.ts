import {UserState} from "./user/user.reducer";
import {NoteState} from "./Note/note.reducer";

export interface State{
  users: UserState,
  notes: NoteState
}
