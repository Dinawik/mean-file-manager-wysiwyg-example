import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {FileListComponent} from './file-manager/file-list/file-list.component';
import {FileUploadComponent} from './file-manager/file-upload/file-upload.component';
import {FileManagerService} from './file-manager/file-manager.service';
import {MaterialModule} from './others/material/material.module';
import {WysiwygEditorComponent} from './wysiwyg-editor/wysiwyg-editor.component';
import {QuillModule} from 'ngx-quill';

const appRoutes: Routes = [
  {path: 'file-list', component: FileListComponent},
  {path: 'file-upload', component: FileUploadComponent},
  {path: 'wysiwyg-editor', component: WysiwygEditorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FileListComponent,
    FileUploadComponent,
    WysiwygEditorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    QuillModule
  ],
  providers: [FileManagerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
