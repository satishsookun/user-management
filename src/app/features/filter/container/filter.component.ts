import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {DEPARTMENTS, OCCUPATIONS} from '../../../contants/constants';
import {DepartmentModel, OccupationModel} from '../../../models/user.model';
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
  public occupations: OccupationModel[] = OCCUPATIONS;
  public filterForm: FormGroup;

  private _formSubscription: Subscription;
  private readonly occupationsOrigin: OccupationModel[] = OCCUPATIONS;

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
        this.occupations = this.filterOccupationListByDept(value);
        this.filterForm.get('occupation').setValue('');
      }
    )
  }

  private filterOccupationListByDept(value: string): OccupationModel[] {
    return [...this.occupationsOrigin.filter( (occupation: OccupationModel) => occupation.slug === value)];
  }
}
