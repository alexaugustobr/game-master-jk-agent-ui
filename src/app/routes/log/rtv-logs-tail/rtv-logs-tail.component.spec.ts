import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtvLogsTailComponent } from './rtv-logs-tail.component';

describe('RtvLogsTailComponent', () => {
  let component: RtvLogsTailComponent;
  let fixture: ComponentFixture<RtvLogsTailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtvLogsTailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtvLogsTailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
