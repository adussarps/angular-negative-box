import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SenderFormComponent } from './sender-form/sender-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, FileUploadModule],
  declarations: [
    AppComponent,
    HelloComponent,
    SenderFormComponent,
    FileUploaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
