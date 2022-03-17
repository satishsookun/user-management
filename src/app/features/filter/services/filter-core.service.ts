import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class FilterCoreService {

  private _filterOpt: {department: {name:string; slug:string}; jobTitle: {name:string; slug:string}};
  private _filterOpt$: BehaviorSubject<{department: {name:string; slug:string}; jobTitle: {name:string; slug:string}}>;

  constructor() {
    this._filterOpt$ = new BehaviorSubject<{department: {name:string; slug:string}, jobTitle: {name:string; slug:string}}>(this._filterOpt);
  }

  public setFilterOpt(opt: {department: {name:string; slug:string}; jobTitle: {name:string; slug:string}}) {
    this._filterOpt$.next(opt);
  }

  public getFilterOpt$(): Observable<{department: {name:string; slug:string}; jobTitle: {name:string; slug:string}}> {
    return this._filterOpt$.asObservable();
  }

}
