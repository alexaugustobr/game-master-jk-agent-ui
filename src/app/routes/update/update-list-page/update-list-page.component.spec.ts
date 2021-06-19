import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateListPageComponent } from './update-list-page.component';

describe('UpdateListPageComponent', () => {
  let component: UpdateListPageComponent;
  let fixture: ComponentFixture<UpdateListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
