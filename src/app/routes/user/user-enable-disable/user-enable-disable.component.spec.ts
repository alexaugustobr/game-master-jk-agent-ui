import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEnableDisableComponent } from './user-enable-disable.component';

describe('UserEnableDisableComponent', () => {
  let component: UserEnableDisableComponent;
  let fixture: ComponentFixture<UserEnableDisableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEnableDisableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEnableDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
