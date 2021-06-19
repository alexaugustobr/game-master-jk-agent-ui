import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerListPageComponent } from './power-list-page.component';

describe('PowerListPageComponent', () => {
  let component: PowerListPageComponent;
  let fixture: ComponentFixture<PowerListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
