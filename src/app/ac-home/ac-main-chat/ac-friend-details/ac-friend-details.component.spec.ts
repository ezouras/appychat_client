import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcFriendDetailsComponent } from './ac-friend-details.component';

describe('AcFriendDetailsComponent', () => {
  let component: AcFriendDetailsComponent;
  let fixture: ComponentFixture<AcFriendDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcFriendDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcFriendDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
