import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcMainChatComponent } from './ac-main-chat.component';

describe('AcMainChatComponent', () => {
  let component: AcMainChatComponent;
  let fixture: ComponentFixture<AcMainChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcMainChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcMainChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
