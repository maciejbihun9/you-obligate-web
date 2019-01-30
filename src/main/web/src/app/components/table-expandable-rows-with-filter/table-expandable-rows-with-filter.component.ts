import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from "@angular/material";
import {Column} from "../../models/column.model";

@Component({
  selector: '[app-table-expandable-rows-with-filter]',
  templateUrl: './table-expandable-rows-with-filter.component.html',
  styleUrls: ['./table-expandable-rows-with-filter.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class TableExpandableRowsWithFilterComponent implements OnChanges {

  @Input() data: Array<Object>;
  @Input() columns: Array<Column>;

  columnsIds = [];

  dataSource = undefined;

  expandedElement: Object | null;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.dataSource = new MatTableDataSource(this.data);
      this.columns.forEach(column => {
          this.columnsIds.push(column.columnId);
      });
  }

}

