import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginRtvPageComponent } from './plugin-rtv-page.component';

describe('PluginRtvPageComponent', () => {
  let component: PluginRtvPageComponent;
  let fixture: ComponentFixture<PluginRtvPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginRtvPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginRtvPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
