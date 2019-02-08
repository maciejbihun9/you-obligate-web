import {
  AfterViewInit,
  Component, ComponentFactory, ComponentFactoryResolver, ComponentRef,
  ElementRef,
  HostListener,
  Input,
  OnChanges, OnDestroy, OnInit, QueryList,
  SimpleChanges, ViewChild, ViewChildren, ViewContainerRef
} from '@angular/core';

import { SuperTableState } from '../services/super-table-state.service';
import {ColumnState, SuperTableOptions} from '../models/interfaces';
import {GroupJoinRequest} from "../../../models/group-join-request/group-join-request.model";

const DEFAULT_ROW_HEIGHT = 48;

@Component({
  selector: '[super-table-body]',
  template: `
    <table [ngClass]="tableClasses" #table>
      <thead class="sizing-thead">
        <tr>
          <th scope="col" *ngFor="let column of state.columns" super-table-header [table]="table" [column]="column" [noHeight]="false"></th>
        </tr>
        <tr *ngIf="state.hasAnyFilters" class="filter-row">
          <td *ngFor="let column of state.columns">
              <div *ngIf="column.hasFilter" [ngSwitch]="column.def.filter.type">
                  <div *ngSwitchCase="'TEXT'" super-table-text-filter [placeholderText]="column.def.filter.placeholder" [column]="column"></div>
                  <div *ngSwitchCase="'ENUM'" super-table-enum-filter [column]="column"></div>
              </div>
          </td>
        </tr>
      </thead>
      <tbody class="visible-rows">
        <tr  *ngFor="let row of rows | paginate: { itemsPerPage: 20, currentPage: p }; let i = index" super-table-row [row]="row"></tr>
      </tbody>
      <ng-container #container></ng-container>
    </table>
    <pagination-controls (pageChange)="p = $event"></pagination-controls>
  `,
  styles: [`
    :host {
      height: 800px;
      display: block;
      overflow: auto;
    }
    table {
      table-layout: fixed;
      width: 100%;
      margin-bottom: 0;
    }
    thead.sizing-thead th {
      padding: 0 !important;
      border-width: 0;
    }
    tbody.dummy-rows, tbody.visible-rows {
      border-top: none;
    }
    tr {
      height: 48dp;      
    }
    tr:hover {
      background-color: #EEEEEE;
    }
  `]
})
export class SuperTableBodyComponent {


  @Input() rows: Array<GroupJoinRequest>;
  @Input() tableClasses: any;
  @Input() bodyHeight: number;
  @Input() options: SuperTableOptions;

  @ViewChild('table') table: ElementRef;

  visibleRows: Array<any> = [];

  constructor (private el: ElementRef, public state: SuperTableState,
               // resolver knows how to create a component
               private resolver: ComponentFactoryResolver) {
    this.visibleRows = this.rows;
  }

}
