import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-plugin-rtv-map-list-upload',
  templateUrl: './plugin-rtv-map-list-upload.component.html',
  styleUrls: ['./plugin-rtv-map-list-upload.component.css']
})
export class PluginRtvMapListUploadComponent implements OnInit {

  @Input() modalTitle = '';
  @Input() fileName = '';
  @Input() cardTitle = '';
  fileExtension = '.txt'

  descriptionText = 'Download the map list file or upload a new one. ';
  downloadUrl = '';
  uploadUrl  = '';


  constructor() { }

  ngOnInit(): void {
    this.downloadUrl = `${environment.apiUrl}/api/plugins/rtv/${this.fileName}`;
    this.uploadUrl = `${environment.apiUrl}/api/plugins/rtv/${this.fileName}`;
  }

}
