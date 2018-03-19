import {Component, OnInit} from '@angular/core';
import {FileManagerService} from '../file-manager.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
  files: any;

  constructor(private fileManagerService: FileManagerService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.fileManagerService.getFiles().subscribe(res => {
      this.files = res;
    });
  }

}
