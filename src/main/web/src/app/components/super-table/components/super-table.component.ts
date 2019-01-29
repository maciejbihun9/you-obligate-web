import {
    AfterContentInit,
    AfterViewInit,
    Component, ContentChildren,
    ElementRef, EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit, Output, QueryList,
    SimpleChanges, ViewChildren
} from '@angular/core';
import { Subscription } from 'rxjs';

import { SuperTableColumn, ColumnState, SuperTableOptions } from '../models/interfaces';
import { SuperTableState } from '../services/super-table-state.service';
import {SuperTableBodyComponent} from './super-table-body.component';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: '[super-table]',
  template: `
      <mat-progress-spinner *ngIf="dataIsLoading" class="progress-spinner" mode="indeterminate" ></mat-progress-spinner>
      <div super-table-body
      *ngIf="!dataIsLoading"
      [rows]="filteredSortedRows"
      [tableClasses]="tableClasses"
      [options]="options"
      [style.height]="bodyHeight + 'px'"
      [style.backgroundColor]="backgroundColor"
      [bodyHeight]="bodyHeight">
    </div>
  `,
  styles: [`

    .progress-spinner {
          top: 45%;
          left: 45%;
    }
    
    :host {
      box-shadow: 3px 3px 6px 3px lightgray;
      position: relative;
      display: block;
      height: 800px;
    }
  `],
  providers: [SuperTableState]
})
export class SuperTableComponent implements OnInit, AfterContentInit, OnChanges, OnDestroy {

  // inputs
  @Input() rows: Array<any>;
  @Input() columns: Array<SuperTableColumn>;
  @Input() options: SuperTableOptions;
  @Input() tableClasses: any;
  @Input() dataIsLoading: boolean;

  @Output() oppsDownloadUrlEmitter = new EventEmitter();

  private downloadOppsUrl: string = "";

  // properties
  backgroundColor = "white";
  isReady = false;
  hasError = false;
  bodyHeight: number;
  filteredSortedRows: Array<any>;

  // subscribe for super-table changes
  private subscription: Subscription;

  constructor (private el: ElementRef, private state: SuperTableState, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // register sub for table state
    // after each change filter rows again
    this.subscription = this.state.stateChanged$.subscribe(() => this.sortAndFilterRows());
    this.changeDownloadOppsUrl();
  }

  changeDownloadOppsUrl(){
      let blob = new Blob(['\ufeff' + JSON.stringify(this.filteredSortedRows)], { type: 'text/json;charset=utf-8;' });
      this.downloadOppsUrl = URL.createObjectURL(blob);
      this.oppsDownloadUrlEmitter.emit(this.sanitizer.bypassSecurityTrustUrl(this.downloadOppsUrl));
  }

  ngAfterContentInit() {
    if (this.options.autoHeight) {
      const parentHeight: number = this.el.nativeElement.parentElement.clientHeight;
      this.setTableHeight(parentHeight);
    }
    this.isReady = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    // Inform state of columns changes
    this.state.setColumns(changes['columns'].currentValue);
    this.sortAndFilterRows();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private setTableHeight(totalHeight: number) {
    this.bodyHeight = totalHeight;
  }

  private sortAndFilterRows() {
    // Search for columns with values
    const activeFilterColumns: ColumnState[] = this.state.columns.filter((c) => {
      return !!c.def.filter && !!c.def.filter.isActive(c.filterValue);
    });

    // if there is at least one column with value
    if (activeFilterColumns.length) {
      this.filteredSortedRows = this.rows.filter(row => {
        for (let i = 0; i < activeFilterColumns.length; i++) {
          const colState: ColumnState = activeFilterColumns[i];
          const val: any = row[colState.def.key];
          let filterResult = false;
          if (colState.def.filter) {
            filterResult = colState.def.filter.fn(colState.filterValue, val, row);
            if (filterResult === false) {
              return false;
            }
          }
        }
        return true;
      });
    } else {
      this.filteredSortedRows = this.rows.slice();
    }

    // Sorting
    this.filteredSortedRows.sort( (a, b) => {
      for (let i = 0; i < this.state.sortStack.length; i++) {
        const colState: ColumnState = this.state.sortStack[i];
        const val1 = a[colState.def.key];
        const val2 = b[colState.def.key];
        let compareResult = 0;
        if (colState.def.sort) {
          compareResult = colState.sortOrder === 'ASC'
            ? colState.def.sort(val1, val2, a, b)
            : colState.def.sort(val2, val1, b, a);
        }
        if (compareResult !== 0) {
          return compareResult;
        }
      }
      return 0;
    });
    this.changeDownloadOppsUrl();
  }
}
