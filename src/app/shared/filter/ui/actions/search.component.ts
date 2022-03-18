import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filter-search-button',
  template: `
    <div class="search">
      <button class="btn btn--primary btn--sm" (click)="onSearch()">Search</button>
    </div>
    
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {

  @Output() emitSearch: EventEmitter<void>;

  constructor() {
    this.emitSearch = new EventEmitter<void>()
  }

  public onSearch() {
    this.emitSearch.emit();
  }
}
