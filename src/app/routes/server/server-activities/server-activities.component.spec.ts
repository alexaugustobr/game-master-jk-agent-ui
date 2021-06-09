import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerActivitiesComponent } from './server-activities.component';

describe('ServerActivitiesComponent', () => {
  let component: ServerActivitiesComponent;
  let fixture: ComponentFixture<ServerActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
