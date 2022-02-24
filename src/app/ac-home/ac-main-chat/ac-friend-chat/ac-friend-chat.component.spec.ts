import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcFriendChatComponent } from './ac-friend-chat.component';

describe('AcFriendChatComponent', () => {
  let component: AcFriendChatComponent;
  let fixture: ComponentFixture<AcFriendChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcFriendChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcFriendChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
