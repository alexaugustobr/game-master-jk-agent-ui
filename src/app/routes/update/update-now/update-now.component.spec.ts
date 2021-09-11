import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNowComponent } from './update-now.component';

describe('UpdateNowComponent', () => {
  let component: UpdateNowComponent;
  let fixture: ComponentFixture<UpdateNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
