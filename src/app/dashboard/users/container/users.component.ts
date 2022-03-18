import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {USER} from '../constants/constants';
import {UserModel, UserSimpleModel} from '../models/user.model';

import {BreadcrumbService} from 'xng-breadcrumb';
import {UsersStore} from '../../../services/users-store';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {ConfirmDialog} from '../../../shared/dialog/container/dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {DialogService} from '../../../shared/dialog/services/dialog.service';
import {FilterCoreService} from '../../../shared/filter/services/filter-core.service';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UsersComponent implements OnInit, AfterViewInit, OnDestroy {

  public displayedColumns: string[];
  public dataSource: MatTableDataSource<UserSimpleModel>;
  public userList: UserSimpleModel[] = [];

  private _userStoreSubscription: Subscription;
  private _dialogSubscription: Subscription;
  private _filterSubscription: Subscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _breadcrumbService: BreadcrumbService,
    private _usersStore: UsersStore,
    private _router: Router,
    private _dialog: MatDialog,
    private _dialogService: DialogService,
    private _filterCoreService: FilterCoreService,
  ) {
    this.dataSource = new MatTableDataSource(this.userList);
    this.paginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
    this.sort = new MatSort();
    this.displayedColumns = USER;
  }

  ngOnInit(): void {
    this._breadcrumbService.set('@dashboard', 'Dashboard');
    this.initUserStore();
    this.onConfirmDeleteSubscription();
    this.filterUserList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    if (this._userStoreSubscription) this._userStoreSubscription.unsubscribe();
    if (this._dialogSubscription) this._dialogSubscription.unsubscribe();
    if (this._filterSubscription) this._filterSubscription.unsubscribe();
  }

  private initUserStore(): void {
    this._userStoreSubscription = this._usersStore.usersStore$().subscribe( (userStore: UserModel[]) => {

      // Need to transform because the complex (department: {name; slug}) data structure was preventing search to work
      this.userList = userStore.map( (user: UserModel) => {
        return {
          id: user.id,
          name: user.name,
          department: user.department.name,
          jobTitle: user.jobTitle.name,
          profile: user.profile,
          progress: user.progress,
        }
      });
      // Assign the data to the data source for the table to render
      this.dataSource.data = this.userList;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editUser(userId: number) {
    this._router.navigate([`user/${userId}/edit`]);
  }

  viewUser(userId: number) {
    this._router.navigate([`user/${userId}/view`]);
  }

  openDialog(user: UserModel) {
    this._dialog.open(ConfirmDialog, {
      maxHeight: '95vh',
      height: 'auto',
      width: '600px',
      data: user,
    });
  }

  private onConfirmDeleteSubscription(): void {
    this._dialogSubscription = this._dialogService.getDialogInfo$().subscribe( (userId) => {
      this._usersStore.dispatchDeleteUser(userId);
    })
  }

  private filterUserList(): void {
    this._filterSubscription = this._filterCoreService.getFilterOpt$()
      .pipe(
        filter((filter) => filter !== undefined)
      )
      .subscribe( (filterOpt) => {
        this.dataSource.filter = filterOpt.department?.name?.trim().toLowerCase();
        this.dataSource.filter = filterOpt.jobTitle?.name?.trim().toLowerCase();
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      })
  }
}
