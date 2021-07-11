import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { FileUploader } from 'ng2-file-upload';
import * as EXIF from 'exif-js';

// const URL = '/api/';
const URL = 'api';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent {
  uploader: FileUploader;
  hasBaseDropZoneOver: boolean;
  hasAnotherDropZoneOver: boolean;
  response: string;
  file: File;
  fileReader = new FileReader();

  constructor() {
    this.uploader = new FileUploader({
      url: URL,
      disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
      formatDataFunctionIsAsync: true,
      formatDataFunction: async item => {
        return new Promise((resolve, reject) => {
          resolve({
            name: item._file.name,
            length: item._file.size,
            contentType: item._file.type,
            date: new Date()
          });
        });
      }
    });

    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;

    this.response = '';

    this.uploader.onAfterAddingFile = file => {
      console.log(file);
      file._file.arrayBuffer().then(array => {
        const data = EXIF.readFromBinaryFile(array);
        if (data) {
          console.log(data);
          console.log(file.file.name);
        } else {
          console.log('failing here');
        }
      });
    };

    this.uploader.response.subscribe(res => (this.response = res));
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
}
