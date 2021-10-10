import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginRtvMapListUploadComponent } from './plugin-rtv-map-list-upload.component';

describe('PluginRtvMapListUploadComponent', () => {
  let component: PluginRtvMapListUploadComponent;
  let fixture: ComponentFixture<PluginRtvMapListUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginRtvMapListUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginRtvMapListUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
