import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class FileManagerService {
  constructor(private http: HttpClient) {
  }

  uploadFiles(files) {
    return this.http.post('/api', files);
  }

  getFiles() {
    return this.http.get('/api');
  }

  deleteFile(fileName) {
    return this.http.delete('/api/' + fileName);
  }
}
