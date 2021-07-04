import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFileUploadComponent } from './game-file-upload.component';

describe('GameFileUploadComponent', () => {
  let component: GameFileUploadComponent;
  let fixture: ComponentFixture<GameFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameFileUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
