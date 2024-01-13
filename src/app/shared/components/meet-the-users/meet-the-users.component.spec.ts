import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetTheUsersComponent } from './meet-the-users.component';

describe('MeetTheUsersComponent', () => {
  let component: MeetTheUsersComponent;
  let fixture: ComponentFixture<MeetTheUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeetTheUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeetTheUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
