import {Component, OnInit} from '@angular/core';
import {FileManagerService} from '../file-manager.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {FileData} from '../file-data';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
  dataSource = new FileDataSource(this.fileManagerService);
  displayedColumns = ['name', 'size'];

  constructor(private fileManagerService: FileManagerService) {
  }

  ngOnInit() {
  }
}

export class FileDataSource extends DataSource<any> {
  constructor(private fileManagerService: FileManagerService) {
    super();
  }
  connect(): Observable<FileData[]> {
    return this.fileManagerService.getFiles();
  }
  disconnect() {}
}
