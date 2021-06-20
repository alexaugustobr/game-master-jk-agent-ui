import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapUploadComponent } from './map-upload.component';

describe('MapUploadComponent', () => {
  let component: MapUploadComponent;
  let fixture: ComponentFixture<MapUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
