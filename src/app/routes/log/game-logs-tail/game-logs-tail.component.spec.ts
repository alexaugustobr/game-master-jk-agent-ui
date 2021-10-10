import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLogsTailComponent } from './game-logs-tail.component';

describe('GameLogsTailComponent', () => {
  let component: GameLogsTailComponent;
  let fixture: ComponentFixture<GameLogsTailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameLogsTailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameLogsTailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
