import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginRtvPowerRestartComponent } from './plugin-rtv-power-restart.component';

describe('PluginRtvPowerRestartComponent', () => {
  let component: PluginRtvPowerRestartComponent;
  let fixture: ComponentFixture<PluginRtvPowerRestartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginRtvPowerRestartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginRtvPowerRestartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
