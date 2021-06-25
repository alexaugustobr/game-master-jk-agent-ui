import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerOptionsBtnPowerOnComponent } from './power-options-btn-power-on.component';

describe('PowerOptionsBtnPowerOnComponent', () => {
  let component: PowerOptionsBtnPowerOnComponent;
  let fixture: ComponentFixture<PowerOptionsBtnPowerOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerOptionsBtnPowerOnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerOptionsBtnPowerOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
