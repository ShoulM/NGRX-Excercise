import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersViewerComponent } from './users-viewer.component';

describe('UsersViewerComponent', () => {
  let component: UsersViewerComponent;
  let fixture: ComponentFixture<UsersViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersViewerComponent]
    });
    fixture = TestBed.createComponent(UsersViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
