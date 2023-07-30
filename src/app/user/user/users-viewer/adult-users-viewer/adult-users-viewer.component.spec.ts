import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultUsersViewerComponent } from './adult-users-viewer.component';

describe('AdultUsersViewerComponent', () => {
  let component: AdultUsersViewerComponent;
  let fixture: ComponentFixture<AdultUsersViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdultUsersViewerComponent]
    });
    fixture = TestBed.createComponent(AdultUsersViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
