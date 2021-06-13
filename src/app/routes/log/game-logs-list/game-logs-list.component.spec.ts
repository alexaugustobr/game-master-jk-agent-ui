import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLogsListComponent } from './game-logs-list.component';

describe('GameLogsListComponent', () => {
  let component: GameLogsListComponent;
  let fixture: ComponentFixture<GameLogsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameLogsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameLogsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
