import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcHomeComponent } from './ac-home.component';

describe('AcHomeComponent', () => {
  let component: AcHomeComponent;
  let fixture: ComponentFixture<AcHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
