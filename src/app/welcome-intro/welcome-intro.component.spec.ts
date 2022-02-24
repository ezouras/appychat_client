import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeIntroComponent } from './welcome-intro.component';

describe('WelcomeIntroComponent', () => {
  let component: WelcomeIntroComponent;
  let fixture: ComponentFixture<WelcomeIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
