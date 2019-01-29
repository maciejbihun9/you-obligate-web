import {
  Component, Input, Output, ElementRef, EventEmitter, OnChanges, SimpleChanges, OnInit, AfterViewInit,
  HostBinding, ViewChild
} from '@angular/core';
import { Observable } from 'rxjs';

import { SuperTableFilter, ColumnState } from '../models/interfaces';
import { SuperTableState } from '../services/super-table-state.service';

@Component({
  /* tslint:disable-next-line */
  selector: '[super-table-text-filter]',
  template: `
    <input 
      [style.visibility]="filterVisibility()"
      class="form-control input-sm"
      type="text"
      [(ngModel)]="column.filterValue"
      (ngModelChange)="onModelChange()"
      [attr.placeholder]="placeholderText"
      [attr.title]="filter.title"
      [class.hasContext] = ""
      [ngClass] = "{hasContext : !!column.filterValue}" />

    <button tabindex="-1" *ngIf="column.filterValue" class="clear-btn" role="button" (click)="clearFilter($event)">&times;</button>
  `,
  styles: [`
    :host {
      position: relative;
      height: 64px;
    }
    input {
      width: 100%;
      height: 64px;
      border-style: solid;
      border-width: 1px 1px 1px 1px;
      border-color: #EEEEEE;
      border-radius: 5px;
    }
    .hasContent {
      background: #dff7ff;
    }
    .clear-btn {
      position: absolute;
      background: transparent;
      color: black;
      right: 0;
      top: 0;
      border: none;
      font-size: 120%;
    }
  `]
})
export class TextFilterComponent implements OnChanges {

  @Input() column: ColumnState;
  @Input() placeholderText: string;
  public filter: SuperTableFilter;

  // wait 200 miliseconds to not notify a service too quick
  /* onModelChange: Function = debounce(function() {
    this.state.notify();
  }, 200); */

    public onModelChange() {
        setTimeout(() => {
            this.state.notify();
        }, 200)
    }

  public clearFilter() {
    this.column.filterValue = '';
    this.state.notify();
  }

  public filterVisibility(){
    return this.column.isHidden ? 'hidden' : 'visible';
  }

  constructor(private state: SuperTableState) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.filter = this.column.def.filter;
  }


}
