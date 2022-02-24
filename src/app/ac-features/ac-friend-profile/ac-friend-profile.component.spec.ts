import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcFriendProfileComponent } from './ac-friend-profile.component';

describe('AcFriendProfileComponent', () => {
  let component: AcFriendProfileComponent;
  let fixture: ComponentFixture<AcFriendProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcFriendProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcFriendProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
