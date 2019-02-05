import { Component, OnInit } from '@angular/core';
import { GroupJoinRequest } from '../../models/group-join-request.model';
import { GroupJoinRequestService } from '../../services/group-join-request.service';
import {GroupJoinRequestsGridColumns} from '../../models/group-join-requests-grid-columns';
import {SuperTableOptions} from "../super-table/models/interfaces";
import {Column} from "../../models/column.model";
import {GroupRequestRowDataItem} from "../../models/group-request-row-data-item.model";

@Component({
  selector: 'app-group-join-requests-panel-view',
  templateUrl: './group-join-requests-panel-view.component.html',
  styleUrls: ['./group-join-requests-panel-view.component.css']
})
export class GroupJoinRequestsPanelViewComponent implements OnInit {

  groupJoinRequests: Array<GroupJoinRequest>;

  // columns = GroupJoinRequestsGridColumns.superTableColumns;
  gridRowsData: Array<GroupRequestRowDataItem>;

  columns: Array<Column> = [
    {
      columnId: 'username',
      columnName: 'Username'
    },
    {
      columnId: 'userRegisteredServiceName',
      columnName: 'User registered service name'
    },
    {
      columnId: 'proposedUnitOfWorkType',
      columnName: 'Proposed UnitOfWorkType'
    },
    {
      columnId: 'proposedUnitOfWorkCost',
      columnName: 'Proposed UnitOfWorkCost'
    }];

  dataIsLoading = true;

  // dataIsLoading = true;

  options: SuperTableOptions = {
    autoHeight: true // auto size the table to the parent element
  };

  tableClasses: string[] = ['table'];

  constructor(private groupJoinRequestService: GroupJoinRequestService) { }

  ngOnInit() {
    this.groupJoinRequestService.getAllGroupJoinRequests().subscribe(
      polledGroupJoinRequests => {
        this.groupJoinRequests = polledGroupJoinRequests;
        this.dataIsLoading = false;

        // fill grid rows data
        this.groupJoinRequests.forEach(groupJoinRequest => {
          this.gridRowsData.push({username: groupJoinRequest.user.username,
            userRegisteredServiceName: groupJoinRequest.userRegisteredService.serviceName,
            proposedUnitOfWorkType: groupJoinRequest.proposedUnitOfWorkType,
            proposedUnitOfWorkCost: groupJoinRequest.proposedUnitOfWorkCost})
        });
      }
    );
  }

}
