import {ChangeDetectorRef, Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {RoutingService} from '../../../services/routing.service';
import {CustomFileEvent, DepartmentModel, JobTitleModel} from '../../../models/user.model';
import {DEPARTMENTS, JOB_TITLES} from '../../../contants/constants';
import {UserModel} from '../../../dashboard/users/models/user.model';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html'
})

export class AddEditUserComponent {

  public createUser: FormGroup;
  public isSubmitted = false;
  public isEditInterface: boolean;
  public title: string;
  public uploadedFileName: string;
  public acceptedFormat = `.png, .jpg, .jpeg, .svg`;
  public hasUploadedFile: boolean;

  private _users: UserModel[];


  public departments: DepartmentModel[] = DEPARTMENTS;
  public jobTitles: JobTitleModel[] = JOB_TITLES;


  private _userId: string;
  private _saveSubs: Subscription;
  private _formSubscription: Subscription;
  private readonly jobTitlesOrigin: JobTitleModel[] = JOB_TITLES;


  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _routingService: RoutingService,
    private _changeRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this._users = [];
    this.setupForm();
    this._routingService.currentUrl$().subscribe( (url) => {
      const splitUrl = url.split('/');
      this._userId = splitUrl[2];
      this.isEditInterface = url.split('/').indexOf('edit') > -1;
    });
    this.handleInterfaceTitle();
    this.manageEditEvent();
    this.onDepartmentValueChange();
  }

  ngOnDestroy(): void {
    if (this._saveSubs) this._saveSubs.unsubscribe();
  }

  private setupForm() {
    this.createUser = this._fb.group({
      id: [''],
      name: ['', [Validators.required]],
      department: ['', [Validators.required]],
      jobTitle: ['', [Validators.required]],
      profile: [''],
      progress: ['']
    });
  }

  private handleInterfaceTitle(): void {
    this.title = this.isEditInterface ? 'Edit event' : 'Create an event'
  }

  public addFiles(event: CustomFileEvent | any) {
    if (event.target.files.length > 0) {
      this.hasUploadedFile = true;

      const droppedFiles = event.target.files || event.dataTransfer.files;

      if (this.acceptedFormat) {
        this.createUser
          .get('profile')
          .setValue(droppedFiles[0].name);
        this.uploadedFileName = droppedFiles[0].name;
      }
      this._changeRef.markForCheck();
    }
  }

  public onCreate(): void {
    this.isSubmitted = true;
    if (this.createUser.valid) {
      this.createUser.get('id').setValue(this.generateUuid(1));
      this.updateLocalStorage(this.createUser.value);
      this._router.navigate(['users']);
    }
  }

  private generateUuid(max: number): string {
    const random = JSON.stringify(Math.random() * max);
    const joinString = random.split('.').join('');
    return joinString.substring(1, 2);
  }

  private manageEditEvent(): void {
    if (this.isEditInterface) {
      this.initEditedEvent()
    }
  }

  /**
   * Listen to department valueChange to update the job title list
   */
  private onDepartmentValueChange(): void {
    this._formSubscription = this.createUser.get('department').valueChanges.subscribe(
      (value) => {
        this.jobTitles = this.filterOccupationListByDept(value);
        this.createUser.get('jobTitle').setValue('');
      }
    )
  }

  /**
   * Update Job title list by selected department
   * @param value
   */
  private filterOccupationListByDept(value: string): JobTitleModel[] {
    return [...this.jobTitlesOrigin.filter( (occupation: JobTitleModel) => occupation.slug === value)];
  }

  updateLocalStorage(formControl: UserModel) :void {
    window.localStorage.setItem('users', JSON.stringify(formControl))
  }

  private initEditedEvent(): void {
    /*this._eventSubs = this._eventStore.eventByUuid(this._eventUuid, this._loggedUserUuid).subscribe(
      (editedEvent: EventModel) => {
        this.createEvent.patchValue({
          name: editedEvent.name,
          date: editedEvent.date,
          description: editedEvent.description
        })
      }
    );*/
  }

  public onEdit() {
    /*this._saveSubs = this._eventStore.saveEvent(this._eventUuid, this._loggedUserUuid, this.createEvent.value).subscribe(
      () => {
        this._router.navigate(['homepage/events']);
      }
    )*/
  }

  /** Builds and returns a new User. */
  /*public createNewUser(id: number): UserModel {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
      ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
      '.';
    const jobTitle = 'Front-end Developer';

    return {
      id: id,
      name: name,
      department: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
      jobTitle: jobTitle,
      progress: Math.round(Math.random() * 100).toString(),
      actions: ['delete', 'create', 'profile']
    };
  }*/

}
