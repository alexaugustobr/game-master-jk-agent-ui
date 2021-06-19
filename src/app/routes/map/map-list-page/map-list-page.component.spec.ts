import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapListPageComponent } from './map-list-page.component';

describe('MapListPageComponent', () => {
  let component: MapListPageComponent;
  let fixture: ComponentFixture<MapListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
