import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFileDeleteComponent } from './game-file-delete.component';

describe('GameFileDeleteComponent', () => {
  let component: GameFileDeleteComponent;
  let fixture: ComponentFixture<GameFileDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameFileDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFileDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
