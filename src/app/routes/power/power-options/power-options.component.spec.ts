import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerOptionsComponent } from './power-options.component';

describe('PowerOptionsComponent', () => {
  let component: PowerOptionsComponent;
  let fixture: ComponentFixture<PowerOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
