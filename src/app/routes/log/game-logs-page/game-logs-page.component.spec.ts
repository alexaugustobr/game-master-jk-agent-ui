import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLogsPageComponent } from './game-logs-page.component';

describe('GameLogsPageComponent', () => {
  let component: GameLogsPageComponent;
  let fixture: ComponentFixture<GameLogsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameLogsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameLogsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
