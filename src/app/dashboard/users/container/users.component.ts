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
import {UserModel} from '../models/user.model';

import { BreadcrumbService } from 'xng-breadcrumb';
import {UsersStore} from '../../../services/users-store';
import {UsersModel} from '../store/actions';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UsersComponent implements OnInit, AfterViewInit, OnDestroy {

  public displayedColumns: string[];
  public dataSource: MatTableDataSource<UserModel>;
  public userList: UserModel[] = [];

  private _userStoreSubscription: Subscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _breadcrumbService: BreadcrumbService,
    private _usersStore: UsersStore,
  ) {
    this.paginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
    this.sort = new MatSort();
    this.displayedColumns = USER;
  }

  ngOnInit(): void {
    this._breadcrumbService.set('@dashboard', 'Dashboard');
    this.initUserStore();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    if (this._userStoreSubscription) this._userStoreSubscription.unsubscribe();
  }

  private initUserStore(): void {
    this._userStoreSubscription = this._usersStore.usersStore$().subscribe( (userStore: UsersModel) => {
      console.log(userStore, 'USERS from STORE');
      this.userList = userStore.users;
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(this.userList);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteUser(row: any) {
    console.log(row, 'delete user')
  }

  editUser(row: any) {
    console.log(row, 'Edit user')
  }

  viewProfile(row: any) {
    console.log(row, 'view user pro')
  }
}
