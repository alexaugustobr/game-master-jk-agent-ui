import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerConfigUploadDownloadComponent } from './server-config-upload-download.component';

describe('ServerConfigUploadDownloadComponent', () => {
  let component: ServerConfigUploadDownloadComponent;
  let fixture: ComponentFixture<ServerConfigUploadDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerConfigUploadDownloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerConfigUploadDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
