import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDeleteComponent } from './map-delete.component';

describe('MapDeleteComponent', () => {
  let component: MapDeleteComponent;
  let fixture: ComponentFixture<MapDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
