import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginRtvConfigComponent } from './plugin-rtv-config.component';

describe('PluginRtvConfigComponent', () => {
  let component: PluginRtvConfigComponent;
  let fixture: ComponentFixture<PluginRtvConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginRtvConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginRtvConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
