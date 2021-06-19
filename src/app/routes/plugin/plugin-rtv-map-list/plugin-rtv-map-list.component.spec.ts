import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginRtvMapListComponent } from './plugin-rtv-map-list.component';

describe('PluginRtvMapListComponent', () => {
  let component: PluginRtvMapListComponent;
  let fixture: ComponentFixture<PluginRtvMapListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginRtvMapListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginRtvMapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
