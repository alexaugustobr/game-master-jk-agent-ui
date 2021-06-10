import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginEloPageComponent } from './plugin-elo-page.component';

describe('PluginEloPageComponent', () => {
  let component: PluginEloPageComponent;
  let fixture: ComponentFixture<PluginEloPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginEloPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginEloPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
