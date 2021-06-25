import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerOptionsBtnPowerOffComponent } from './power-options-btn-power-off.component';

describe('PowerOptionsBtnPowerOffComponent', () => {
  let component: PowerOptionsBtnPowerOffComponent;
  let fixture: ComponentFixture<PowerOptionsBtnPowerOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerOptionsBtnPowerOffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerOptionsBtnPowerOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
