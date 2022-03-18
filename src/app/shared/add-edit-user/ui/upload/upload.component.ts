import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {CustomFileEvent, DepartmentModel, JobTitleModel} from '../../../../models/user.model';

@Component({
  selector: 'app-user-upload',
  templateUrl: './upload.component.html'
})

export class UploadComponent {

  @Input() createUser: FormGroup;
  @Input() isSubmitted: boolean;
  @Input() acceptedFormat: string;
  @Input() uploadedFileName: string;

  @Input() departments: DepartmentModel[];
  @Input() jobTitles: JobTitleModel[];

  @Output() emitUploadFile: EventEmitter<CustomFileEvent|any>;

  constructor() {
    this.emitUploadFile = new EventEmitter<CustomFileEvent|any>();
  }

  onAddFiles($event) {
    this.emitUploadFile.emit($event);
  }
}
