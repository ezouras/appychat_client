import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcHeaderComponent } from './ac-header.component';

describe('AcHeaderComponent', () => {
  let component: AcHeaderComponent;
  let fixture: ComponentFixture<AcHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
