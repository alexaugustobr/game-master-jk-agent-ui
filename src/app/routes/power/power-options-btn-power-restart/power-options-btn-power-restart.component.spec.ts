import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerOptionsBtnPowerRestartComponent } from './power-options-btn-power-restart.component';

describe('PowerOptionsBtnPowerRestartComponent', () => {
  let component: PowerOptionsBtnPowerRestartComponent;
  let fixture: ComponentFixture<PowerOptionsBtnPowerRestartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerOptionsBtnPowerRestartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerOptionsBtnPowerRestartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
