import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class FilterFormService {

  private _filterFrom: FormGroup;
  private _filterFrom$: BehaviorSubject<FormGroup>;

  constructor(
    private _fb: FormBuilder,
  ) {
    this._filterFrom$ = new BehaviorSubject<FormGroup>(this._filterFrom);
  }

  public getFilterForm$(): Observable<FormGroup> {
    return this._filterFrom$.asObservable();
  }

  public buildFilterForm(): void {
    this._filterFrom = this._fb.group({
      department: [],
      occupation: [],
    });
    this._filterFrom$.next(this._filterFrom);
  }

  public resetFilter(): void {
    this._filterFrom.patchValue({
      department: '',
      occupation: ''
    });
    this._filterFrom$.next(this._filterFrom);
  }

}
