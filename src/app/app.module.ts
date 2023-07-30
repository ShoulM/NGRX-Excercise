import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user/user.component';
import { StoreModule } from '@ngrx/store';
import { UsersViewerComponent } from './user/user/users-viewer/users-viewer.component';
import {userReducer} from "./state/user/user.reducer";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import {UserEffects} from "./state/user/user.effects";
import {debug} from "./state/meta-reducer.reducer";
import { AdultUsersViewerComponent } from './user/user/users-viewer/adult-users-viewer/adult-users-viewer.component';
import { NoteComponent } from './note/note.component';
import {FormsModule} from "@angular/forms";
import {noteReducer} from "./state/Note/note.reducer";
import { NoteViewerByUserComponent } from './note/note-viewer-by-user/note-viewer-by-user.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersViewerComponent,
    AdultUsersViewerComponent,
    NoteComponent,
    NoteViewerByUserComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({'users': userReducer, notes: noteReducer}, {metaReducers: [debug]}),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
