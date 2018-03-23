import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FileData} from './file-data';

@Injectable()
export class FileManagerService {
  constructor(private http: HttpClient) {
  }

  uploadFiles(files) {
    return this.http.post('/api', files);
  }

  getFiles() {
    return this.http.get<FileData[]>('/api');
  }

  deleteFile(fileName) {
    return this.http.delete('/api/' + fileName);
  }
}
