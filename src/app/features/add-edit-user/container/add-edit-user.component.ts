import {ChangeDetectorRef, Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {RoutingService} from '../../../services/routing.service';
import {CustomFileEvent, DepartmentModel, JobTitleModel} from '../../../models/user.model';
import {DEPARTMENTS, JOB_TITLES} from '../../../contants/constants';
import {UserModel} from '../../../dashboard/users/models/user.model';
import {UsersStore} from '../../../services/users-store';
import {filter, map} from 'rxjs';
import {BreadcrumbService} from 'xng-breadcrumb';

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

  public departments: DepartmentModel[] = DEPARTMENTS;
  public jobTitles: JobTitleModel[] = JOB_TITLES;

  private _users: UserModel[];
  private _userId: number;
  private _saveSubs: Subscription;
  private _formSubscription: Subscription;
  private _userStoreSubscription: Subscription;
  private _routingSubscription: Subscription;
  private readonly jobTitlesOrigin: JobTitleModel[] = JOB_TITLES;


  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _routingService: RoutingService,
    private _changeRef: ChangeDetectorRef,
    private _usersStore: UsersStore,
    private _breadcrumbService: BreadcrumbService,
  ) {}

  ngOnInit(): void {
    this._users = [];
    this.setupForm();
    this.handleModuleByRouting();
    this.handleInterfaceTitle();
    this.onDepartmentValueChange();
    this._breadcrumbService.set('@edit', `${this._userId}: edit`);

  }

  ngOnDestroy(): void {
    if (this._userStoreSubscription) this._userStoreSubscription.unsubscribe();
    if (this._formSubscription) this._formSubscription.unsubscribe();
    if (this._saveSubs) this._saveSubs.unsubscribe();
    if (this._routingSubscription) this._routingSubscription.unsubscribe();
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


  private handleModuleByRouting(): void {
    this._routingSubscription = this._routingService.currentUrl$().subscribe( (url: string) => {
      this.isEditInterface = url.split('/').indexOf('edit') > -1;
      this.manageEditUserModule(url)
    });
  }

  private manageEditUserModule(url: string): void {
    if (this.isEditInterface) {
      const splitUrl = url.split('/');
      this._userId = JSON.parse(splitUrl[2]);

      // These FNC will be needed to initialize only if we are on Edit page
      this.initEditedUserInfo();
    }
  }

  private initEditedUserInfo(): void {
    this._userStoreSubscription = this._usersStore.usersStore$()
      .subscribe( (users: UserModel[]) => {
        this._users = users;
        users.forEach( (user: UserModel) => {
          if (user.id === this._userId) {
            this.createUser.patchValue(user)
          }
        });

    })

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
      this.createUser.get('id').setValue(this.generateId(1));
      this.createUser.get('progress').setValue(Math.round(Math.random() * 100).toString());

      this._usersStore.dispatchAddedUser(this.createUser.value);
      this._router.navigate(['users']);
    }
  }

  private generateId(max: number): number {
    const random = JSON.stringify(Math.random() * max);
    const joinString = random.split('.').join('');
    const take2 = joinString.substring(1, 2);
    return JSON.parse(take2);
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

  public onEdit() {
    this._usersStore.dispatchEditedUser(this.createUser.value);
    this._router.navigate(['users']);
  }
}
