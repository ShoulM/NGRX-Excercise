import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteViewerByUserComponent } from './note-viewer-by-user.component';

describe('NoteViewerByUserComponent', () => {
  let component: NoteViewerByUserComponent;
  let fixture: ComponentFixture<NoteViewerByUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteViewerByUserComponent]
    });
    fixture = TestBed.createComponent(NoteViewerByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
