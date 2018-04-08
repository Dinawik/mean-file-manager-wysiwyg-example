import {Component, OnInit} from '@angular/core';

import Quill from 'quill';
// add image resize module
import ImageResize from 'quill-image-resize-module';

Quill.register('modules/imageResize', ImageResize);

@Component({
  selector: 'app-wysiwyg-editor',
  templateUrl: './wysiwyg-editor.component.html',
  styleUrls: ['./wysiwyg-editor.component.css']
})
export class WysiwygEditorComponent implements OnInit {
  modules = {};

  constructor() {
    const toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{'header': 1}, {'header': 2}],               // custom button values
      [{'list': 'ordered'}, {'list': 'bullet'}],
      [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
      [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
      [{'direction': 'rtl'}],                         // text direction

      [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
      [{'header': [1, 2, 3, 4, 5, 6, false]}],

      [{'color': []}, {'background': []}],          // dropdown with defaults from theme
      [{'font': []}],
      [{'align': []}],

      ['clean'],                                         // remove formatting button
      ['link', 'image', 'video'],
      ['showHtml']
    ];
    this.modules = this.modules = {
      toolbar: toolbarOptions,
      imageResize: {}
    };
  }

  ngOnInit() {
  }

  onEditorCreated(event) {
    console.log(event);
  }

  add(editor) {
    console.log(editor.getContents());
    // editor.patchValue('asd patched!');
  }
}
