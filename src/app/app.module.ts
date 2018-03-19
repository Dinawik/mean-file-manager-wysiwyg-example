import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {FileListComponent} from './file-manager/file-list/file-list.component';
import {FileUploadComponent} from './file-manager/file-upload/file-upload.component';
import {FileManagerService} from './file-manager/file-manager.service';

const appRoutes: Routes = [
  {path: 'file-list', component: FileListComponent},
  {path: 'file-upload', component: FileUploadComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FileListComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [FileManagerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
