import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcFriendsComponent } from './ac-friends.component';

describe('AcFriendsComponent', () => {
  let component: AcFriendsComponent;
  let fixture: ComponentFixture<AcFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcFriendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
