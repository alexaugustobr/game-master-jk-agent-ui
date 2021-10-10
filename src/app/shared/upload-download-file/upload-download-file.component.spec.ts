import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDownloadFileComponent } from './upload-download-file.component';

describe('UploadDownloadFileComponent', () => {
  let component: UploadDownloadFileComponent;
  let fixture: ComponentFixture<UploadDownloadFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadDownloadFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDownloadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
