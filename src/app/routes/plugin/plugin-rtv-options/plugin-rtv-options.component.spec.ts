import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginRtvOptionsComponent } from './plugin-rtv-options.component';

describe('PluginRtvPowerOptionsComponent', () => {
  let component: PluginRtvOptionsComponent;
  let fixture: ComponentFixture<PluginRtvOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginRtvOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginRtvOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
