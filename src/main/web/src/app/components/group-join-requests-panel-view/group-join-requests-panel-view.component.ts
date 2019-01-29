import { Component, OnInit } from '@angular/core';
import { GroupJoinRequest } from '../../models/group-join-request.model';
import { GroupJoinRequestService } from '../../services/group-join-request.service';
import {GroupJoinRequestsGridColumns} from '../../models/group-join-requests-grid-columns';

@Component({
  selector: 'app-group-join-requests-panel-view',
  templateUrl: './group-join-requests-panel-view.component.html',
  styleUrls: ['./group-join-requests-panel-view.component.css']
})
export class GroupJoinRequestsPanelViewComponent implements OnInit {

  groupJoinRequests: Array<GroupJoinRequest>;

  columns = GroupJoinRequestsGridColumns.superTableColumns;

  dataIsLoading = true;

  constructor(private groupJoinRequestService: GroupJoinRequestService) { }

  ngOnInit() {
    this.groupJoinRequestService.getAllGroupJoinRequests().subscribe(
      polledGroupJoinRequests => {
        this.groupJoinRequests = polledGroupJoinRequests;
        this.dataIsLoading = false;
      }
    );
  }

}
