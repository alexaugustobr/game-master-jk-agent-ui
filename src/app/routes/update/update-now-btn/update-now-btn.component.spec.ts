import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNowBtnComponent } from './update-now-btn.component';

describe('UpdateNowBtnComponent', () => {
  let component: UpdateNowBtnComponent;
  let fixture: ComponentFixture<UpdateNowBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNowBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNowBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
