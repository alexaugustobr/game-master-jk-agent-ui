import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigFileUploadDownloadComponent } from './config-file-upload-download.component';

describe('ConfigFileUploadDownloadComponent', () => {
  let component: ConfigFileUploadDownloadComponent;
  let fixture: ComponentFixture<ConfigFileUploadDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigFileUploadDownloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigFileUploadDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
