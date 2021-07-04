import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFileListPageComponent } from './game-file-list-page.component';

describe('GameFileListPageComponent', () => {
  let component: GameFileListPageComponent;
  let fixture: ComponentFixture<GameFileListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameFileListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFileListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
