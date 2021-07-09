import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginRtvPowerOptionsComponent } from './plugin-rtv-power-options.component';

describe('PluginRtvPowerOptionsComponent', () => {
  let component: PluginRtvPowerOptionsComponent;
  let fixture: ComponentFixture<PluginRtvPowerOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginRtvPowerOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginRtvPowerOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
