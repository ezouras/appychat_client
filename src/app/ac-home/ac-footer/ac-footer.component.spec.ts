import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcFooterComponent } from './ac-footer.component';

describe('AcFooterComponent', () => {
  let component: AcFooterComponent;
  let fixture: ComponentFixture<AcFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
