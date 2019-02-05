import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from "@angular/material";
import {Column} from "../../models/column.model";
import {GroupJoinRequest} from "../../models/group-join-request.model";
import {HttpClient} from "@angular/common/http";
import {UserRegisteredServiceService} from "../../services/user-registered-service.service";
import {UserRegisteredService} from "../../models/user-registered-service.model";


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

  @Input() data: Array<GroupJoinRequest>;
  @Input() columns: Array<Column>;

  columnsIds = [];

  userRegisteredService: UserRegisteredService;

  dataSource = undefined;

  expandedElement: Object | null;

  constructor(private userRegisteredServiceService: UserRegisteredServiceService){}

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.dataSource = new MatTableDataSource(this.data);
      this.columns.forEach(column => {
          this.columnsIds.push(column.columnId);
      });
  }

  public onDataItemClick(element: GroupJoinRequest) {
    /*this.userRegisteredServiceService.getUserRegisteredService(element.userRegisteredServiceId).subscribe(userRegisteredService => {
      this.userRegisteredService = userRegisteredService;
    });*/
  }

}

