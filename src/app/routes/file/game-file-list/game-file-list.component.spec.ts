import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFileListComponent } from './game-file-list.component';

describe('GameFileListComponent', () => {
  let component: GameFileListComponent;
  let fixture: ComponentFixture<GameFileListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameFileListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
