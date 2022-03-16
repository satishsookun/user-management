import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {DEPARTMENTS, JOB_TITLES} from '../../../contants/constants';
import {DepartmentModel, JobTitleModel} from '../../../models/user.model';
import {FilterFormService} from '../services/filter-form.service';
import {FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit, OnDestroy {

  public departments: DepartmentModel[] = DEPARTMENTS;
  public jobTitles: JobTitleModel[] = JOB_TITLES;
  public filterForm: FormGroup;

  private _formSubscription: Subscription;
  private readonly jobTitlesOrigin: JobTitleModel[] = JOB_TITLES;

  constructor(
    private _filterFormService: FilterFormService,
  ) {}

  ngOnInit(): void {
    this._filterFormService.buildFilterForm();
    this.initFilterForm();
    this.onDepartmentValueChange();
  }

  ngOnDestroy(): void {
    if (this._formSubscription) this._formSubscription.unsubscribe();
  }

  private initFilterForm(): void {
    this._formSubscription = this._filterFormService.getFilterForm$().subscribe( (formControls: FormGroup) => {
      this.filterForm = formControls;
    });
  }

  public resetFilter() {
    this._filterFormService.resetFilter();
  }

  public onSearch() {

  }

  private onDepartmentValueChange(): void {
    this._formSubscription = this.filterForm.get('department').valueChanges.subscribe(
      (value) => {
        this.jobTitles = this.filterOccupationListByDept(value);
        this.filterForm.get('jobTitle').setValue('');
      }
    )
  }

  private filterOccupationListByDept(value: string): JobTitleModel[] {
    return [...this.jobTitlesOrigin.filter( (jobTitle: JobTitleModel) => jobTitle.slug === value)];
  }
}
